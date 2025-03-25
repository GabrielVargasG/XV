import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaStar,
  FaChurch,
  FaUtensils,
  FaMusic,
  FaGlassCheers,
  FaRegStar,
} from "react-icons/fa";
import quince1 from "./images/quince1.jpeg";
import quince2 from "./images/quince2.jpeg";
import quince3 from "./images/quince3.jpeg";
import fondo from "./images/textura-patron-damasco_1268-4571.avif";


const images = [quince1, quince2, quince3];

const eventTimeline = [
  { time: "8:00 PM", event: "Recepción de invitados", icon: <FaGlassCheers /> },
  { time: "9:30 PM", event: "Vals", icon: <FaChurch /> },
  { time: "9:00 PM", event: "Cena", icon: <FaUtensils /> },
  { time: "Toda la noche", event: "Baile de la quinceañera", icon: <FaMusic /> },
  { time: "1:00 AM", event: "Fin de la celebración", icon: <FaStar /> },
];

export default function QuinceaneraInvitation() {
  return (
    <div
      style={{
        top: 0,
        backgroundColor: "#ffc4db",
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        {/* <header
          style={{
            textAlign: "center",
            padding: "1rem",
            backgroundColor: "#dc3545",
            color: "#fff",
            fontSize: "1.25rem",
            fontWeight: "bold",
          }}
        >
          ¡Estás invitado a la Quinceañera de Valeria!
        </header> */}

      {/* Sección destacada con el nombre de la quinceañera */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
        rel="stylesheet"
      />

      <section
        style={{
          textAlign: "center",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#dc3545",
            textShadow: "0 0 10px #ff5d9b, 0 0 20px #ff5d9b",
          }}
        >
          Diana romina
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <FaRegStar style={{ color: "#ff5d9b", fontSize: "2rem" }} />
          <FaRegStar style={{ color: "#ff5d9b", fontSize: "2.5rem" }} />
          <FaRegStar style={{ color: "#ff5d9b", fontSize: "2rem" }} />
        </div>
      </section>
      //Texto invitacion
      //Familiares
      //Padrinos
      //Fecha
      <section style={{ textAlign: "center", margin: "2rem 0" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#dc3545",
          }}
        >
          Ceremonia Religiosa
        </h2>
        <p style={{ marginTop: "1rem" }}>
          ⛪ San Judas Tadeo
        </p>
      </section>
      //Boton maps

      {/* <section style={{ margin: "2rem auto", maxWidth: "800px" }}>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "2rem",
              }}
            >
              <img
                src={src}
                alt={`Imagen ${index + 1}`}
                style={{
                  borderRadius: "2rem",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          ))}
        </Carousel>
      </section> */}

      <section style={{ textAlign: "center", margin: "2rem 0" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#dc3545",
          }}
        >
          Detalles del Evento
        </h2>
        <p style={{ marginTop: "1rem" }}>📅 Fecha: 12 Abril de 2025</p>
        <p>📍Montecarlo Salon de eventos </p>
      </section>
      

      //Boton ubicacion
      {/* <section
        style={{ width: "100%", margin: "2rem auto", textAlign: "center" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4266.167573407774!2d-109.4644012!3d27.0428886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b81b84f837ffcd%3A0x228741631cea165d!2sIglesia%20de%20San%20Judas%20Tadeo!5e1!3m2!1ses-419!2smx!4v1742830855785!5m2!1ses-419!2smx"
          width="600"
          height="450"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
        ></iframe>
      </section> */}
      //Contador de tiempo hacia atras 
      <section style={{ margin: "3rem auto", maxWidth: "800px" }}>
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "#dc3545",
            marginBottom: "1rem",
          }}
        >
          Itinerario
        </h2>
        <VerticalTimeline>
          {eventTimeline.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--event"
              date={item.time}
              iconStyle={{ background: "#ff5d9b", color: "#fff" }}
              icon={item.icon}
            >
              <h3 style={{ fontWeight: "bold" }}>{item.event}</h3>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>
      {/* <section
        style={{ width: "100%", margin: "2rem auto", textAlign: "center" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4264.724473193854!2d-109.44337460000001!3d27.0808315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b81b3c1cd5ef6d%3A0xa60e5715884fb059!2sSALON%20MONTECARLO!5e1!3m2!1ses-419!2smx!4v1742830698093!5m2!1ses-419!2smx"
          width="600"
          height="450"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
        ></iframe>
      </section> */}
      //boton confirmar invitacion +52 1 642 115 7848
      //Deseo confirmar mi asistencia a los XV años de . Mi nombre es: ___________________ Del número de lugares que se me asignaron, utilizaré______
    </div>
  );
}
