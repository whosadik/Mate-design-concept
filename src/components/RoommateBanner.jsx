import Seeker from "../assets/images/seeker.svg";
import "./RoommateBanner.css";

export default function RoommateBanner() {
  return (
    <div className="roommate-banner">
      <img src={Seeker} alt="roommate" />
      <div className="banner-content">
        <p className="banner-title">Найти сожителя</p>
        <p className="banner-subtitle">
          Оставьте заявку чтобы найти идеального соседа
        </p>
      </div>
      <button className="banner-btn">Оставить заявку</button>
    </div>
  );
}
