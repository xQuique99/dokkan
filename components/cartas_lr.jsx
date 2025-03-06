import React from "react";
import datos from "../pjs/datos.json"; // Importa el JSON completo
import "./cartas_lr.css"

export const CartasLr = () => {
    const primeros10 = datos.slice(-1)
  return (
    <div className="container">
      <div className="elementos-1-2">
        <div className="elemento-1">
        {primeros10.map((carta) => (
          <>
              <img className="personaje" src={`../pjs/assets/${carta.nombre_archivo}`} />
              <img className="tipo" src={`../pjs/assets/${carta.tipo}`} />
              <img className="clase" src="../pjs/assets/cha_type_icon_10.png" alt="" />
              <img className="rareza" src={`../pjs/assets/${carta.rareza}`} alt={carta.rareza} />
          </>
          ))}
        </div>
        <div className="elemento-2">
        {primeros10.map((carta) => (
              <h2 className="nombre-carta">{carta.nombre_personaje}</h2>
          ))}
        </div>
      </div>
      <div className="elementos-3-4">
      <div className="elemento-3">
        {primeros10.map((carta) => (
            <>
                <img className="canvas" src={`../pjs/assets/canvas/${carta.canvas}`} />
            </>
            ))}
      </div>
      <div className="elemento-4">
        <div className="leader-skill-unique">
            <h2>Leader Skill</h2>
        </div>
        <div className="leader-skill">
        {primeros10.map((carta) => (
            <>
              <p>{carta.leader_skill}</p>
            </>
            ))}
        </div>
        <div className="elemento-5">
          <div className="sa">
              <h2>Super Attack</h2>
          </div>
          <div className="sa-skill-unique">
          {primeros10.map((carta) => (
              <>
                  <p>{carta.sa}</p>
              </>
              ))}
          </div>
        </div>
        <div className="elemento-6">
        <div className="ultra">
            <h2>Ultra Super Attack</h2>
        </div>
        <div className="ultra-skill-unique">
        {primeros10.map((carta) => (
            <>
                <p>{carta.ultra}</p>
            </>
            ))}
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};
