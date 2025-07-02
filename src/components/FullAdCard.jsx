import "./FullAdCard.css";
import { FaMapMarkerAlt, FaHeart, FaStar, FaEye } from "react-icons/fa";

export default function FullAdCard({ ad }) {
  return (
    <div className="full-ad-card">
      <div className="full-ad-image-wrapper">
        <img src={ad.image} alt={ad.title} className="full-ad-image" />
        <FaHeart className="full-ad-fav-icon" />
      </div>

      <div className="full-ad-info">
        <div className="full-ad-tags">
          <span className="tag yellow">{ad.type}</span>
          <span className="tag light">{ad.duration}</span>
        </div>

        <h3 className="full-ad-title">{ad.title}</h3>

        <div className="full-ad-location">
          <FaMapMarkerAlt className="full-ad-location-icon" />
          <span>{ad.location}</span>
        </div>

        <div className="full-ad-details">
          <span className="room-count">{ad.rooms}</span>
          <span className="rating">
            <FaStar /> {ad.rating}
          </span>
          <span className="views">
            <FaEye /> {ad.views}
          </span>
        </div>

        <p className="full-ad-price">
          <strong>{ad.price}</strong>{" "}
          <span className="full-ad-period">{ad.period}</span>
        </p>
      </div>
    </div>
  );
}
