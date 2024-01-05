import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

import search_icon from "static/img/Icon/Search.svg";
import { ARTISTSCARDS_ROUTE } from "routes";
import { useAppSelector } from "store/hooks";
import {
  selectActivity,
  selectAddress,
  selectRadius,
} from "store/searchReducer";
import SearchModal from "components/searchbar/searchmodal/SearchModal";

import "./SearchBar.css";
import WhoInput from "./WhoInput";
import WhereInput from "./WhereInput";

interface SearchProps {
  address?: string;
  radius?: number;
  activity?: string;
}

const SearchBar: FC<SearchProps> = ({ address, radius, activity }) => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const addressValue = useAppSelector(selectAddress);
  const radiusValue = useAppSelector(selectRadius);
  const activityValue = useAppSelector(selectActivity);

  const handleLocationBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalShow(true);
  };

  return (
    <div className="search">
      <WhoInput who={activity} />
      <WhereInput where={address} />
      <button className="location_icon" onClick={handleLocationBtn}>
        <CiLocationOn />
      </button>
      <SearchModal
        radius={radius}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Link
        to={{
          pathname: ARTISTSCARDS_ROUTE,
          search: `address=${addressValue}&radius=${radiusValue}&activity=${activityValue}`,
        }}
      >
        <button className="search__btn">
          <img src={search_icon} alt="" />
          <span>SEARCH</span>
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
