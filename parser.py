import requests
from bs4 import BeautifulSoup
from lxml import html
import json


base_url = "https://www.entertainersworldwide.com"

response = requests.get("https://www.entertainersworldwide.com/entertainers")
soup = BeautifulSoup(response.text, "html.parser")
artist_id = 10


def extract_youtube_link(html_content):
    soup = BeautifulSoup(html_content, "html.parser")

    youtube_iframe = soup.find("div", class_="fullbox bggray")
    if youtube_iframe:
        youtube_iframe_iframe = youtube_iframe.find("iframe")
        if youtube_iframe_iframe:
            youtube_iframe_src = youtube_iframe_iframe["src"]
            youtube_video_id = youtube_iframe_src.split("/")[-1].split(".")[0]
            youtube_full_embed_link = (
                f"https://www.youtube.com/embed/{youtube_video_id}"
            )
            return youtube_full_embed_link
    else:
        return None


def extract_address_lxml(html_content):
    tree = html.fromstring(html_content)
    country = tree.xpath('//strong[text()="Country:"]/following-sibling::span/text()')
    based_in = tree.xpath('//strong[text()="Based In:"]/following-sibling::span/text()')

    country = country[0].strip() if country else ""
    based_in = based_in[0].strip() if based_in else ""

    return f"{country}, {based_in}" if country and based_in else None


def create_json(
    artist_name=None,
    description=None,
    promo_video_url=None,
    address=None,
    min_salary=None,
    currency=None,
    activities=None,
    reviews=None,
):
    data = {
        "artist_name": artist_name,
        "description": description,
        "promo_video_url": promo_video_url,
        "address": address,
        "location": None,
        "is_premium": False,
        "min_salary": min_salary,
        "currency": currency,
        "activities": activities,
        "reviews": reviews,
    }
    return data


orange_spans = soup.find_all("span", class_="orange")
links = orange_spans[3].find_all("a", title=True)
categories = {link["title"]: link["href"] for link in links}

count = 0
for category, link in categories.items():
    if link not in ["/", "/p/request-a-quote#Request%20a%20Quote"]:
        category_url = base_url + link
        print(f"Переход в категорию '{category}': {category_url}")

        response = requests.get(category_url)
        soup = BeautifulSoup(response.text, "html.parser")

        column_list = soup.find("div", class_="column-list")
        if column_list:
            region_links = column_list.find_all("a", class_="region-link")
            for region_link in region_links:
                region_url = base_url + region_link["href"]
                print(f"Переход к региону '{region_link.text.strip()}': {region_url}")

                # Переходим к странице региона
                response_region = requests.get(region_url)
                soup_region = BeautifulSoup(response_region.text, "html.parser")

                # Извлечение всех элементов <div class="profile-bottom">
                profile_bottoms = soup_region.find_all("div", class_="profile-bottom")
                for profile_bottom in profile_bottoms:
                    # Извлечение ссылки на профиль из первой ссылки внутри <div class="profile-bottom">
                    profile_link = base_url + profile_bottom.find("a")["href"]
                    response_profile = requests.get(profile_link)
                    soup_profile = BeautifulSoup(response_profile.text, "html.parser")

                    artist_name = (
                        soup_profile.find("div", class_="main-info")
                        .find("span", itemprop="name")
                        .text.strip()
                    )

                    description = profile_bottom.find(
                        "div", class_="summary"
                    ).text.strip()

                    promo_video_url = extract_youtube_link(response_profile.text)

                    address = extract_address_lxml(response_profile.text)

                    tree = html.fromstring(response_profile.text)
                    from_info = tree.xpath(
                        '//strong[contains(text(), "From:")]/following-sibling::span/text()'
                    )
                    if from_info:
                        from_info = from_info[0].strip()
                        min_salary = "".join(filter(str.isdigit, from_info))
                        currency = "".join(
                            filter(lambda x: not x.isdigit(), from_info)
                        ).strip()

                    activities_list = []
                    main_activity = soup_profile.find("h4", class_="darkblue")
                    if main_activity:
                        activities_list.append(main_activity.get_text(strip=True))
                    also_performs_as = soup_profile.find(
                        "strong", string="Also Performs As:"
                    )
                    if also_performs_as:
                        for sibling in also_performs_as.find_next_siblings(
                            "a", class_="darkblue underline"
                        ):
                            activity = sibling.get_text(strip=True)
                            activities_list.append(activity)

                    reviews = []
                    reviews_divs = soup_profile.find_all("div", class_="review")
                    for review_div in reviews_divs:
                        stars_div = review_div.find("span", class_="stars-small-gray")
                        grade = stars_div["class"][1].split("-")[-1] if stars_div else 0
                        grade = float(grade) / 10
                        comment_div = review_div.find("div", class_="text")
                        comment = (
                            comment_div.get_text(strip=True) if comment_div else ""
                        )
                        reviews.append(
                            {
                                "user_id": 10,
                                "artist_id": artist_id,
                                "grade": grade,
                                "comment": comment,
                            }
                        )
                    artist_id += 1

                    json_data = create_json(
                        artist_name=artist_name,
                        description=description,
                        promo_video_url=promo_video_url,
                        address=address,
                        min_salary=min_salary,
                        currency=currency,
                        activities=activities_list,
                        reviews=reviews,
                    )
                    count += 1
                    print(json_data)

        print(count)
        # countries_url = base_url + '/' + link + '/countries'
        # print(f"Переход к странице стран: {countries_url}")
