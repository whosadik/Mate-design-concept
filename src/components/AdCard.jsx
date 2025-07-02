import "./AdCard.css";
import { FaStar, FaEye } from "react-icons/fa";

export default function AdCard({ ad }) {
  return (
    <div className="ad-card">
      <img src={ad.image} alt={ad.title} className="ad-image" />
      <div className="ad-info">
        <h3 className="ad-title">{ad.title}</h3>
        <p className="ad-address">{ad.address}</p>
        <div className="ad-stats">
          <span>
            <FaStar /> {ad.rating}
          </span>
          <span>
            <FaEye /> {ad.views}
          </span>
        </div>
        <p className="ad-price">{ad.price}</p>
      </div>
    </div>
  );
}
