import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <div className="footer-logo">Mate</div>

      <div className="footer-links">
        <section>
          <Link to="#">О нас</Link>
          <Link to="#">Новые функции</Link>
          <Link to="#">Реквизиты</Link>
          <Link to="#">Для инвесторов</Link>
        </section>

        <section>
          <p className="footer-section-title">Поддержка</p>
          <Link to="#">Центр помощи</Link>
          <Link to="#">Сообщить о проблеме</Link>
          <Link to="#">Программа защиты от ущерба</Link>
        </section>

        <section>
          <p className="footer-section-title">Направления</p>
          <Link to="#">Посуточная аренда</Link>
          <Link to="#">Отели</Link>
          <Link to="#">Помесячная аренда</Link>
        </section>
      </div>
    </footer>
  );
}
