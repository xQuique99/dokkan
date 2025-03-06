import React, { useEffect, useState } from "react";

export const Sql = () => {
    const [imagenes, setImagenes] = useState([])

    const fetchImagenes = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/sql"); 
            if (!response.ok) {
                throw new Error("Error en la respuesta del servidor");
            }
            const data = await response.json();
            setImagenes(data);
        } catch (error) {
            console.error("Error al obtener imágenes:", error);
        }
    };
    
    

    useEffect (() =>{
        fetchImagenes()
    }, [])

    console.log(imagenes)

  return (
    <>
        {imagenes.map((imagen) => (
            <h1>{imagen.nombre_personaje}</h1>
        ))}
    </>
  );
};
