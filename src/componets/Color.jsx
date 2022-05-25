import React, { useEffect, useState } from "react";

const Color = () => {
  const [color, setColor] = useState("#FF9671");

  useEffect(() => {
    const callback = (e) => {
      if (e.x < window.innerWidth / 2) {
        setColor("#FF9671");
      } else {
        setColor("#FFC75F");
      }
    };
    // Evento para detectar tamaño de pantalla: resize
    window.addEventListener("mousemove", callback);

    return () => {
      
      window.removeEventListener("mousemove", callback);
    };
  }, []);

  return (
    <div className="color" style={{ background: color }}>
      Color
    </div>
  );
};

export default Color;

