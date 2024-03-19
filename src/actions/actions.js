"use server";
import pool from "@/app/db/db";

export async function getAllData() {
  try {
    const connection = await pool.getConnection();

    const data = await connection.query(
      "SELECT * FROM data_harvests ORDER BY id DESC LIMIT 1"
    );

    connection.release();

    return JSON.stringify(data);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function insertHarvestedData(ipAddress, productId, allData) {
  if (!ipAddress || !productId || !allData) return;

  try {
    const connection = await pool.getConnection();

    connection.release();

    const data = await connection.query(
      "INSERT INTO data_harvests (ip, product_id, data) VALUES (?, ?, ?)",
      [ipAddress, parseInt(productId), JSON.stringify(allData)]
    );

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
