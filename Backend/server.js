
import express from "express";
import mysql from "mysql";
import cors from "cors";


const sql = express();
const PORT = 3001;

sql.use(cors());
sql.use(express.json()); // Asegura que puede recibir JSON

const DB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dokkan2",
});

DB.connect((err) => {
    if (err) {
        console.error("Error de conexión a MySQL:", err);
        return;
    }
    console.log("Conexion exitosa a MySQL");
});

// Ruta GET
sql.get("/api/sql", (req, res) => {
    const SQL_QUERY = "SELECT * FROM imagenes";
    DB.query(SQL_QUERY, (err, result) => {
        if (err) {
            console.error("Error en la consulta:", err);
            res.status(500).json({ error: "Error en la consulta" });
            return;
        }
        res.json(result);
    });
});

sql.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});