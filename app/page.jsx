'use client';

import { useState, useRef } from "react"; import { motion } from "framer-motion";

export default function ValentineApp() { const [accepted, setAccepted] = useState(false); const [yesSize, setYesSize] = useState(1); const audioRef = useRef(null);

const playMusic = () => { if (audioRef.current) { audioRef.current.play().catch(() => {}); } };

const handleNo = () => { playMusic(); setYesSize((prev) => prev + 0.2); };

const handleYes = () => { playMusic(); setAccepted(true); };

if (accepted) { return ( <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(to right, #ffd1dc, #ff9aa2)", textAlign: "center", padding: "20px", }} > <audio ref={audioRef} loop> <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_3a4d1b4c2c.mp3" /> </audio>

<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ fontSize: "28px", marginBottom: "15px" }}>
          💖 Felicidades 💖
        </h1>
        <p style={{ fontSize: "18px" }}>
          Nos vemos en <br />
          <strong>Fecha:</strong> 14 de febrero <br />
          <strong>Hora:</strong> 11:30 <br /><br />
          "Amar no es mirarse el uno al otro, sino mirar juntos en la misma dirección." – Antoine de Saint-Exupéry
        </p>
        <p style={{ marginTop: "15px", fontSize: "20px" }}>
          Te amo ❤️
        </p>
      </div>
    </motion.div>
  </div>
);

}

return ( <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(to right, #ffd1dc, #ff9aa2)", textAlign: "center", padding: "20px", }} > <audio ref={audioRef} loop> <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_3a4d1b4c2c.mp3" /> </audio>

<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
    <div
      style={{
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        ❤️ ¿Quieres ser mi San Valentín? ❤️
      </h1>

      <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        <motion.button
          animate={{ scale: yesSize }}
          onClick={handleYes}
          style={{
            padding: "15px 25px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "none",
            background: "#ff4d6d",
            color: "white",
            cursor: "pointer",
          }}
        >
          Sí 💘
        </motion.button>

        <button
          onClick={handleNo}
          style={{
            padding: "15px 25px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "none",
            background: "#555",
            color: "white",
            cursor: "pointer",
          }}
        >
          No 😢
        </button>
      </div>
    </div>
  </motion.div>
</div>

); }
