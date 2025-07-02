import "./SearchBar.css";
import SearchIcon from "../assets/icons/search.svg";
import FilterIcon from "../assets/icons/filter2.png";
import LocationIcon from "../assets/icons/location_on.png";

export default function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-bar">
        <img src={LocationIcon} alt="Location icon" className="icon-location" />
        <input type="text" placeholder="Город или адрес" />
        <button className="search-btn">
          <img src={SearchIcon} alt="Search Icon" />
        </button>
      </div>
      <button className="filter-btn">
        <img src={FilterIcon} alt="Filter icon" />
      </button>
    </div>
  );
}
