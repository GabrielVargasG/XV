import { useState } from "react";
import fondo from "./images/textura-patron-damasco_1268-4571.avif";
import corona from "./images/corona.png";
import corona2 from "./images/corona2.png";
import sparkles from "./images/sparkles.webp";
import itinerario from "./images/itinerario.png";
import iglesia from "./images/iglesia.jpg";
import regalo from "./images/regalo.avif";
import ropa from "./images/ropa.png";
import phone from "./images/phone.png";
import fondo2 from "./images/fondo2.png";
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
      <h1 style={{ fontFamily: "DM Serif Text", fontSize: "3rem", color: "#eb7d88", fontWeight: 500 }}>
        {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
      </h1>
      <h1 style={{ fontFamily: "DM Serif Text", fontSize: "1rem", color: "#eb7d88", fontWeight: 500, whiteSpace: "pre", marginTop: -30 }}>
        DIAS   HORAS   MINUTOS   SEGUNDOS
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
    backgroundImage: `url(${fondo2})`,
    backgroundSize: "auto", // Adjusted to allow repeating
    backgroundRepeat: "repeat", // Set to repeat
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }}
>
        {/* <img src={corona} alt="corona" style={{width: "10rem", mixBlendMode: "multiply", marginTop:50}} />
        <h1 style={{fontFamily: "Dancing Script", fontSize: "3rem", color: "#eb7d88"}}>15 Años
        </h1> */}
        {/* <div style={{ filter: "hue-rotate(-60deg)", position: "static", marginBottom:-160 }}>
          <img src={sparkles} alt="sparkles" style={{ width: "10rem", position: "relative", left:110 }} />
        </div> */}
        <div style={{ backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: -1, backgroundImage: `url(${fondo2})`, backgroundRepeat: "repeat-x" }}>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:150, marginBottom:-10}}>

        <img src={corona} alt="corona" style={{width: "10rem", mixBlendMode: "multiply",}} />
        </div>
        {/* <img src={corona2} alt="corona" style={{width: "10rem", , marginTop:150, marginBottom:-70}} /> */}
        <h1
          style={{
            fontFamily: "Rouge Script",
            fontSize: "5rem",
            fontWeight: 500,
            background: "linear-gradient(to right,#ffffff,#ffffff,#c38b23,#c38b23,#ffffff, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            // color:"white",
            marginLeft: 40,
            paddingLeft: 10, // Added padding to prevent text cutoff
            marginTop:20,
            // textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          Diana
        </h1>

        <h1
          style={{
            fontFamily: "Rouge Script",
            fontSize: "8rem",
            fontWeight: 500,
            background: "linear-gradient(to right,#c38b23,#c38b23, #c38b23, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            // color:"white",
            marginTop: -110,
            paddingLeft: 10, // Added padding to prevent text cutoff
            // textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          Romina
        </h1>
        <h1
          style={{
            fontFamily: "DM Serif Text",
            fontSize: "4rem",
            fontWeight: 500,
            background: "linear-gradient(to right,#c38b23,#c38b23, #c38b23, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            // color:"white",
            marginTop: -80,

            paddingLeft: 10, // Added padding to prevent text cutoff
            // textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          XV
        </h1>
        <h1
          style={{
            fontFamily: "DM Serif Text",
            fontSize: "1.6rem",
            fontWeight: 500,
            background: "linear-gradient(to right,#c38b23,#c38b23, #c38b23, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            // color:"white",
            marginTop: -65,
            paddingLeft: 10, // Added padding to prevent text cutoff
            // textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          AÑOS
        </h1>
        {/* <div style={{ filter: "hue-rotate(-60deg)", position: "static" }}>
          <img src={sparkles} alt="sparkles" style={{ width: "10rem", position: "relative", left:-200, top: -130 }} />
        </div> */}
        
        <div style={{ padding:10,display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 300}}>
        <h1 style={{fontFamily: "Dancing Script", fontSize: "2.5rem", fontWeight:200, color: "#eb7d88", marginTop:70}}>Junto con mis padres</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "1.3rem", fontWeight:200, color: "#a19599"}}>Azmin Viridiana Bisher Hernández</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "1.3rem", fontWeight:200, color: "#a19599", marginTop:-10}}>Lombardo García Rios</h1>
        <h1 style={{fontFamily: "Rouge Script", fontSize: "2.5rem", fontWeight:400, color: "#a19599"}}>y la presencia de mis madrinas:</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "1rem", fontWeight:200, color: "#a19599", marginTop:-10}}>Griselda Nataly Escalante Hernandez</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "1rem", fontWeight:200, color: "#a19599", marginTop:-10}}>Diana Samirah Bisher Hernandez</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "1rem", fontWeight:200, color: "#a19599", marginTop:-10}}>Idalia María Hernández Hernández</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "1rem", fontWeight:200, color: "#a19599", marginTop:-10}}>Adriana García Rios</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "1rem", fontWeight:200, color: "#a19599", marginTop:-10}}>Adeibe Adriana Bishet Hernandez</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "1rem", fontWeight:200, color: "#eb7d88", marginTop:40}}>FESTEJAMOS MI GRAN DIA</h1>
        <img src={corona} alt="corona" style={{width: "10rem", mixBlendMode: "multiply",marginTop:50, marginBottom:-50}} />
        <h1 style={{fontFamily: "Rouge Script", fontSize: "7rem", fontWeight:500, color: "#eb7d88"}}>Diana</h1>
        <h1 style={{fontFamily: "Rouge Script", fontSize: "9rem", fontWeight:500, color: "#eb7d88", marginTop:-100}}>Romina</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "1.5rem", fontWeight:200, color: "#a19599"}}>Tenemos el honor de invitarte a usted y su 
          apresiable familia a la celebración de la Misa de Acción de gracias que con motivo de mis XV años se llevará el día</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "5rem", fontWeight:500, color: "#a19599", display: "flex", flexDirection: "row", alignItems: "center"}}>
          <span style={{fontFamily: "Dancing Script", fontSize: "4rem", fontWeight:500, color: "#eb7d88", marginRight:30}}>Sábado </span>
          12 <span style={{fontFamily: "Dancing Script", fontSize: "4rem", fontWeight:500, color: "#eb7d88",marginLeft:40}}> Abril</span>
        </h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "5rem", fontWeight:500, color: "#a19599", marginTop:-20}}>2025</h1>

        <img src={iglesia} alt="iglesia" style={{width: "70%", mixBlendMode: "multiply" , marginTop:30}} />

        <h1 style={{fontFamily: "DM Serif Text", fontSize: "5rem", fontWeight:500, color: "#a19599", display: "flex",marginTop:-30, flexDirection: "column", alignItems: "center"}}>
          <span style={{fontFamily: "DM Serif Text", fontSize: "3rem", fontWeight:500, color: "#eb7d88"}}>Misa </span>
        </h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:500, color: "#eb7d88", marginTop:-50}}>6:00 PM</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "3rem", fontWeight:200, color: "#a19599",marginTop:-20}}>San Judas Tadeo</h1>
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
          <span style={{fontFamily: "DM Serif Text", fontSize: "3rem", fontWeight:500, color: "#eb7d88"}}>Fiesta </span>
        </h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "3rem", fontWeight:500, color: "#eb7d88", marginTop:-50}}>8:00 PM</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "3.5rem", fontWeight:200, color: "#a19599", marginTop:-20}}>Montecarlo</h1>

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

        
        <div style={{ filter: "hue-rotate(-60deg)", position: "static", marginBottom:-120 }}>
          <img src={sparkles} alt="sparkles" style={{ width: "5rem", position: "relative", left:100 }} />
        </div>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "5rem", fontWeight:500, color: "#a19599", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <span style={{fontFamily: "Dancing Script", fontSize: "6rem", fontWeight:500, color: "#eb7d88"}}>Detalles</span>
        </h1>
        <div style={{ filter: "hue-rotate(-60deg)", position: "static", marginTop:-90}}>
          <img src={sparkles} alt="sparkles" style={{ width: "5rem", position: "relative", left:-250 }} />
        </div>

        <h1 style={{fontFamily: "DM Serif Text", fontSize: "3rem", fontWeight:200, color: "#a19599"}}>SUGERENCIAS DE REGALO</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:200, color: "#a19599"}}>Tu presencia es el regalo más bello, pero si deseas hacerme un presente 
          agradezco sea la siguiente opción:
        </h1>

        <img src={regalo} alt="iglesia" style={{width: "50%", marginTop:50, mixBlendMode: "multiply",filter: "hue-rotate(-70deg)", }} />

<h1 style={{fontFamily: "DM Serif Text", fontSize: "5rem", fontWeight:500, color: "#a19599", display: "flex", flexDirection: "column", alignItems: "center"}}>
  <span style={{fontFamily: "Dancing Script", fontSize: "4rem", fontWeight:500, color: "#eb7d88"}}>Efectivo </span>
</h1>
<img src={ropa} alt="iglesia" style={{width: "40%", marginTop:50, mixBlendMode: "multiply",filter: "hue-rotate(10deg)", }} />

        <h1 style={{fontFamily: "DM Serif Text", fontSize: "5rem", fontWeight:500, color: "#a19599", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <span style={{fontFamily: "Dancing Script", fontSize: "4rem", fontWeight:500, color: "#eb7d88"}}>Código de Vestimenta </span>
        </h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:500, color: "#a19599"}}>Ponte tu mejor Outfit para lucir fantástico</h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "5rem", fontWeight:500, color: "#a19599", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <span style={{fontFamily: "Dancing Script", fontSize: "4rem", fontWeight:500, color: "#eb7d88"}}>Formal </span>
        </h1>
        <img src={phone} alt="iglesia" style={{width: "40%", marginTop:50, mixBlendMode: "multiply" }} />

        <h1 style={{fontFamily: "DM Serif Text", fontSize: "5rem", fontWeight:500, color: "#a19599", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <span style={{fontFamily: "Dancing Script", fontSize: "4rem", fontWeight:500, color: "#eb7d88"}}>Confirmar asistencia </span>
        </h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "5rem", fontWeight:500, color: "#a19599", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <span style={{fontFamily: "DM Serif Text", fontSize: "4rem", fontWeight:500, color: "#a19599"}}>Favor de confirmar tu asistencia</span>
        </h1>
        <h1 style={{fontFamily: "DM Serif Text", fontSize: "2rem", fontWeight:200, color: "#a19599", marginTop:-50}}>Puedes hacerlo en el siguiente botón</h1>
        <a
          href="https://w.app/hikadq"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            marginTop: 20,
            marginBottom: 50,
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
            Confirmar asistencia
          </button>
        </a>
      </div>
      </div>
      </div>
    </>
  );
}

export default App;
