import { useState } from "react";
import "./CreateContent.css";

export default function CreateContent({ addStory }) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [source, setSource] = useState("");

  function handleSubmit() {
    if (!image.trim() || !name.trim() || !role.trim() || !source.trim()) {
      alert("Ошибка: вы не заполнили все поля ввода!");
      return;
    }

    addStory({
      img: image,
      name,
      role,
      href: source,
    });

    setImage("");
    setName("");
    setRole("");
    setSource("");
  }

  return (
    <section className="create-content">
      <h2 className="create-content__title">
        Создать Контент
      </h2>

      <div className="create-content__form">
        {/* URL ФОТО */}
        <input
          type="text"
          placeholder="URL фотографии"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="create-content__input"
        />

        {/* ФИО */}
        <input
          type="text"
          placeholder="ФИО"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="create-content__input"
        />

        {/* ПРОФЕССИЯ */}
        <input
          type="text"
          placeholder="Профессия"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="create-content__input"
        />

        {/* ССЫЛКА */}
        <input
          type="text"
          placeholder="Ссылка на источник"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="create-content__input"
        />

        <button
          onClick={handleSubmit}
          className="create-content__button"
        >
          Сохранить
        </button>
      </div>
    </section>
  );
}

