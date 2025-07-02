import "./Home.css";
import AdCard from "../components/AdCard";
import SearchBar from "../components/SearchBar";
import RoommateBanner from "../components/RoommateBanner";
import FilterTabs from "../components/FilterTabs";

import flat1 from "../assets/images/flat1.webp";
import flat2 from "../assets/images/flat2.jpg";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const mockAds = [
    {
      id: 1,
      title: "2-комнатная квартира",
      address: "Астана, Кабанбай батыра 60А/6",
      price: "190 000тг/мес",
      rating: 4.5,
      views: 12,
      image: flat1,
    },
    {
      id: 2,
      title: "3-комнатная квартира",
      address: "Астана, Кабанбай батыра 60А/6",
      price: "250 000тг/мес",
      rating: 4.8,
      views: 24,
      image: flat2,
    },
  ];

  return (
    <>
      <div className="home">
        <SearchBar />
        <RoommateBanner />
        <FilterTabs />

        <div className="ads-section">
          <div className="show-more-wrapper">
            <button className="show-more-btn" onClick={() => navigate("/ads")}>
              Показать ещё
            </button>
          </div>
          <div className="ads-list-horizontal">
            {mockAds.map((ad) => (
              <AdCard key={ad.id} ad={ad} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
