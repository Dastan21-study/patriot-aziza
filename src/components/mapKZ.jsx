import { useState } from "react";

export default function KazakhstanMapMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const cities = [
    { name: "Алматы", population: "2.3 млн", area: "682 км²" },
    { name: "Астана", population: "1.5 млн", area: "797 км²" },
    { name: "Шымкент", population: "1.2 млн", area: "1170 км²" },
    { name: "Караганда", population: "500 тыс", area: "550 км²" },
    { name: "Актобе", population: "560 тыс", area: "428 км²" },
    { name: "Тараз", population: "430 тыс", area: "187 км²" },
    { name: "Павлодар", population: "360 тыс", area: "400 км²" },
    { name: "Усть-Каменогорск", population: "310 тыс", area: "540 км²" },
    { name: "Семей", population: "320 тыс", area: "210 км²" },
    { name: "Костанай", population: "250 тыс", area: "240 км²" },
  ];

  return (
    <>
      {/* Кнопка открытия */}
      <button style={styles.openBtn} onClick={() => setIsOpen(true)}>
        🗺️ Открыть карту Казахстана
      </button>

      {/* Меню */}
      {isOpen && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            {/* Кнопка закрытия */}
            <button style={styles.closeBtn} onClick={() => setIsOpen(false)}>
              ✕
            </button>

            {/* Контент */}
            <div style={styles.content}>
              {/* Карта */}
              <div style={styles.mapBlock}>
                <img
                  src="/KZ_MAP.webp"
                  alt="Карта Казахстана"
                  style={styles.map}
                />
              </div>

              {/* Информация */}
              <div style={styles.infoBlock}>
                <h2 style={styles.title}>Крупные города Казахстана</h2>

                <div style={styles.cityList}>
                  {cities.map((city, index) => (
                    <div key={index} style={styles.cityCard}>
                      <h3 style={styles.cityName}>{city.name}</h3>

                      <p style={styles.cityText}>
                        Население: {city.population}
                      </p>

                      <p style={styles.cityText}>
                        Площадь: ({city.area})
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  openBtn: {
    padding: "14px 24px",
    border: "none",
    borderRadius: "14px",
    background: "#1565c0",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    padding: "20px",
  },

  modal: {
    width: "100%",
    maxWidth: "1400px",
    height: "90vh",
    background: "#ffffff",
    borderRadius: "24px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
  },

  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "15px",
    width: "45px",
    height: "45px",
    border: "none",
    borderRadius: "50%",
    background: "#e53935",
    color: "white",
    fontSize: "22px",
    cursor: "pointer",
    zIndex: 20,
  },

  content: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
  },

  mapBlock: {
    flex: "1 1 60%",
    minWidth: "320px",
    background: "#eef5ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  map: {
    width: "100%",
    maxWidth: "850px",
    objectFit: "contain",
    borderRadius: "18px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
  },

  infoBlock: {
    flex: "1 1 40%",
    minWidth: "300px",
    padding: "30px",
    overflowY: "auto",
    background: "#f8fbff",
  },

  title: {
    fontSize: "32px",
    marginBottom: "25px",
    color: "#0d47a1",
  },

  cityList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  cityCard: {
    background: "white",
    borderRadius: "18px",
    padding: "18px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },

  cityName: {
    margin: 0,
    marginBottom: "10px",
    color: "#1565c0",
    fontSize: "22px",
  },

  cityText: {
    margin: "4px 0",
    color: "#333",
    fontSize: "16px",
  },
};

// 📱 Адаптация под телефон
if (window.innerWidth < 768) {
  styles.content.flexDirection = "column";

  styles.modal.height = "95vh";

  styles.mapBlock.flex = "none";
  styles.mapBlock.height = "40%";

  styles.infoBlock.flex = "none";
  styles.infoBlock.height = "60%";

  styles.title.fontSize = "24px";

  styles.cityName.fontSize = "18px";

  styles.cityText.fontSize = "14px";
}