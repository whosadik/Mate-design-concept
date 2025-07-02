import { useState } from "react";
import "./FilterTabs.css";

export default function FilterTabs() {
  const filters = [
    "Популярное",
    "Рекомендуемые",
    "Высокий рейтинг",
    "Новые",
    "Старые",
    "Цена",
    "По отзывам",
  ];

  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <div className="filter-wrapper">
      <div className="filters-scroll">
        {filters.map((label) => (
          <button
            key={label}
            className={`filter-btn-scroll ${
              activeFilter === label ? "active" : ""
            }`}
            onClick={() => setActiveFilter(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="right-blur" />
    </div>
  );
}
