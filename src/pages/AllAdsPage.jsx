import FullAdCard from "../components/FullAdCard";
import flat1 from "../assets/images/flat1.webp";
import flat2 from "../assets/images/flat2.jpg";
import "./AllAdsPage.css";
import SearchBar from "../components/SearchBar";
import FilterTabs from "../components/FilterTabs";

export default function AllAdsPage() {
  const allAds = [
    {
      id: 1,
      image: flat1,
      type: "Квартира",
      duration: "Посуточно",
      location: "Astana, Казахстан",
      title: "Адиктын үйі",
      price: "19 000 ₸",
      period: "за ночь",
      rooms: "2-комнатная",
      rating: 4.5,
      views: 12,
    },
    {
      id: 2,
      image: flat2,
      type: "Квартира",
      duration: "Посуточно",
      location: "Астана, Кабанбай батыра",
      title: "Айдынның үйі",
      price: "21 000 ₸",
      period: "за ночь",
      rooms: "2-комнатная",
      rating: 4.5,
      views: 12,
    },
  ];

  return (
    <div className="all-ads-page">
      <SearchBar />
      <FilterTabs />
      <h2>Все объявления</h2>
      <div className="ads-list-vertical">
        {allAds.map((ad) => (
          <FullAdCard key={ad.id} ad={ad} />
        ))}
      </div>
    </div>
  );
}
