import pool from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const search = searchParams.get("search") || "";

    const limit = 100;
    const offset = (page - 1) * limit;

    let query = "SELECT * FROM articles";
    const params = [];

    if (search) {
      query += " WHERE name LIKE ? OR code LIKE ?";
      params.push(`%${search}%`, `%${search}%`);
    }

    query += " LIMIT ? OFFSET ?";
    params.push(limit, offset);

    const [rows] = await pool.execute(query, params);

    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
