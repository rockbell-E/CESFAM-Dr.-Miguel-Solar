import type { APIRoute } from "astro";
import { pool } from "../../lib/db.js";

export const GET: APIRoute = async () => {
  try {
    const [rows] = await pool.query(
      "SELECT id, nombre FROM especialidades ORDER BY nombre ASC"
    );

    const especialidades = Array.isArray(rows) ? rows : [];

    return new Response(JSON.stringify(especialidades), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error al consultar especialidades:", err);

    return new Response(JSON.stringify([]), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
