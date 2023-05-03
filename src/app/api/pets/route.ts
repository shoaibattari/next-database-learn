import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const client = await db.connect();
 
  try {
    // await client.sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    const names = ['Fiona1', 'Lucy2'];
    const owners = ['owners1', 'owners2'];
    await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${owners[0]});`;
  } catch (error) {
    return NextResponse.json({ error }, {
        status: 500,
      });
  }

  const pets = await client.sql`SELECT * FROM Pets;`;
  return NextResponse.json({ pets });
  }