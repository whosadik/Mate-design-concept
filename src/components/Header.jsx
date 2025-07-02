import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "@css/vars.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <Link to="/" className="logo">
            <div className="logo-circle" />
            <span className="logo-text">Mate</span>
          </Link>
        </div>

        <div className="header-right">
          <select className="language-selector">
            <option value="ru">Рус</option>
            <option value="en">Eng</option>
          </select>

          <div
            className={`burger-menu ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>

      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <nav className="side-menu-links">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Главная
          </Link>
          <Link to="/ads" onClick={() => setIsMenuOpen(false)}>
            Объявления
          </Link>
          <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
            Профиль
          </Link>
          <Link to="/favorites" onClick={() => setIsMenuOpen(false)}>
            Избранное
          </Link>
          <Link to="/chats" onClick={() => setIsMenuOpen(false)}>
            Чаты
          </Link>
        </nav>
        <Link
          to="/logout"
          className="logout-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Выйти
        </Link>
      </div>
    </>
  );
}
