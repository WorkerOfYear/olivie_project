export function googlePhotoParser(url: string) {
  const match = url.match(/\/file\/d\/(.+?)\/view/);
  if (match && match[1]) {
    return `https://drive.google.com/thumbnail?id=${match[1]}`;
  } else return "";
}

export function videoIdFromYoutubeUrl(url: string) {
  const regexp =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;
  const match = url.match(regexp);
  if (match) {
    return match[0].replace("youtu.be/", "");
  }
  return "";
}

//https://drive.google.com/uc?export=view&id=${match[1]}
