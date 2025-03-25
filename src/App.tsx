import { useState } from "react";
import fondo from "./images/textura-patron-damasco_1268-4571.avif";
import corona from "./images/corona.jpg";
import sparkles from "./images/sparkles.webp";
import itinerario from "./images/itinerario.png";
import iglesia from "./images/iglesia.jpg";
import { useEffect } from "react";
const calculateTimeLeft = () => {
  const eventDate = new Date("2025-04-12T00:00:00");
  const now = new Date();
  const difference = eventDate.getTime() - now.getTime();

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1 style={{ fontFamily: "DM Serif Text", fontSize: "2rem", color: "#a19599" }}>
        Solo faltan:
      </h1>
      <h1 style={{ fontFamily: "Dancing Script", fontSize: "3rem", color: "#eb7d88" }}>
        {timeLeft.days} días, {timeLeft.hours} horas, {timeLeft.minutes} minutos, {timeLeft.seconds} segundos
      </h1>
    </div>
  );
};
function App() {

  return (
    <>
      <div
      style={{
        top: 0,
        width: "100%",
        height: "100%",
        // backgroundColor: "#ffc4db",
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mixBlendMode: "multiply",
            }}>
        <img src={corona} alt="corona" style={{width: "10rem", mixBlendMode: "multiply", marginTop:50}} />
        <h1 style={{fontFamily: "Dancing Script", fontSize: "3rem", color: "#eb7d88"}}>15 Años
        </h1>
        <div style={{ filter: "hue-rotate(-60deg)", position: "static" }}>
          <img src={sparkles} alt="sparkles" style={{ width: "10rem", position: "relative", left:80 }} />
        </div>
        <h1 style={{fontFamily: "Rouge Script", fontSize: "7rem", fontWeight:500, color: "#eb7d88"}}>Diana</h1>
        <h1 style={{fontFamily: "Rouge Script", fontSize: "8rem", fontWeight:500, color: "#eb7d88", marginTop:-100}}>Romina</h1>
        <div style={{ filter: "hue-rotate(-60deg)", position: "static" }}>
          <img src={sparkles} alt="sparkles" style={{ width: "10rem", position: "relative", left:-250, top: -130 }} />
        </div>
        <div style={{ padding:10,display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"}}>
        <h1 style={{fontFamily: "Dancing Script", fontSize: "2.5rem", fontWeight:200, color: "#eb7d88", marginTop:160}}>Junto con mis padres</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:200, color: "#a19599"}}>Azmin Viridiana Bisher Hernández</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:200, color: "#a19599", marginTop:-10}}>Lombardo García Rios</h1>
        <h1 style={{fontFamily: "Rouge Script", fontSize: "2.5rem", fontWeight:400, color: "#a19599"}}>y la presencia de mis madrinas:</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:200, color: "#a19599"}}>Griselda Nataly Escalante Hernandez</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:200, color: "#a19599"}}>Diana Samirah Bisher Hernandez</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:200, color: "#a19599"}}>Idalia María Hernández Hernández</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:200, color: "#a19599"}}>Adriana García Rios</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:200, color: "#a19599"}}>Adeibe Adriana Bishet Hernandez</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:200, color: "#eb7d88"}}>FESTEJAMOS MI GRAN DIA</h1>
        <img src={corona} alt="corona" style={{width: "10rem", mixBlendMode: "multiply", marginBottom:-90}} />
        <h1 style={{fontFamily: "Rouge Script", fontSize: "7rem", fontWeight:500, color: "#eb7d88"}}>Diana</h1>
        <h1 style={{fontFamily: "Rouge Script", fontSize: "9rem", fontWeight:500, color: "#eb7d88", marginTop:-100}}>Romina</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:200, color: "#a19599"}}>Tenemos el honor de invitarte a usted y su 
          apresiable familia a la celebración de la Misa de Acción de gracias que con motivo de mis XV años se llevará el día</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "5rem", fontWeight:500, color: "#a19599", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <span style={{fontFamily: "Dancing Script", fontSize: "4rem", fontWeight:500, color: "#eb7d88"}}>Sábado </span>
          12 <span style={{fontFamily: "Dancing Script", fontSize: "4rem", fontWeight:500, color: "#eb7d88"}}> Abril</span>
        </h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "5rem", fontWeight:500, color: "#a19599", marginTop:-20}}>2025</h1>

        <img src={iglesia} alt="iglesia" style={{width: "50%", marginTop:50, mixBlendMode: "multiply" }} />

        <h1 style={{fontFamily: "DM Serif Text", fontSize: "5rem", fontWeight:500, color: "#a19599", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <span style={{fontFamily: "Dancing Script", fontSize: "4rem", fontWeight:500, color: "#eb7d88"}}>Misa </span>
        </h1>
        <h1 style={{fontFamily: "Dancing Script", fontSize: "4rem", fontWeight:500, color: "#eb7d88", marginTop:-50}}>6:00 PM</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:200, color: "#a19599"}}>San Judas Tadeo</h1>
        <a
          href="https://maps.app.goo.gl/jEUJvD4WYSKArw2z7?g_st=com.google.maps.preview.copy"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            marginTop: 20,
          }}
        >
          <button
            style={{
              backgroundColor: "#eb7d88",
              color: "#fff",
              fontFamily: "Dancing Script",
              fontSize: "1.5rem",
              padding: "10px 20px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Ver ubicación
          </button>
        </a>

        <h1 style={{fontFamily: "DM Serif Text", fontSize: "5rem", fontWeight:500, color: "#a19599", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <span style={{fontFamily: "Dancing Script", fontSize: "4rem", fontWeight:500, color: "#eb7d88"}}>Fietsa </span>
        </h1>
        <h1 style={{fontFamily: "Dancing Script", fontSize: "4rem", fontWeight:500, color: "#eb7d88", marginTop:-50}}>8:00 PM</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:200, color: "#a19599"}}>Monte Carlo</h1>

        <a
          href="https://maps.app.goo.gl/si5xh8VnqnTuVvwP8?g_st=com.google.maps.preview.copy"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            marginTop: 20,
          }}
        >
          <button
            style={{
              backgroundColor: "#eb7d88",
              color: "#fff",
              fontFamily: "Dancing Script",
              fontSize: "1.5rem",
              padding: "10px 20px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Ver ubicación
          </button>
        </a>

        <Countdown />

        <img src={itinerario} alt="itinerario" style={{width: "100%", marginTop:50}} />

        <h1 style={{fontFamily: "DM Serif Text", fontSize: "5rem", fontWeight:500, color: "#a19599", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <span style={{fontFamily: "Dancing Script", fontSize: "4rem", fontWeight:500, color: "#eb7d88"}}>Favor de confirmar tu asistencia</span>
        </h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:200, color: "#a19599", marginTop:-50}}>Puedes hacerlo en el siguiente botón</h1>
      </div>
      </div>
      
    </>
  );
}

export default App;
