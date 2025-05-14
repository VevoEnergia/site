import { ContactPayload } from "@/app/types/Contact";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.TRELLO_API_KEY;
const TOKEN = process.env.TRELLO_TOKEN;
const LIST_ID = process.env.TRELLO_LIST_ID;

export const POST = async (request: NextRequest) => {
  try {
    const { name, email, phone, message }: ContactPayload =
      await request.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const TRELLO_API_URL = `https://api.trello.com/1/cards?key=${API_KEY}&token=${TOKEN}&idList=${LIST_ID}&name=${encodeURIComponent(
      "Contato no Site"
    )}&desc=${encodeURIComponent(mountText({ name, email, phone, message }))}`;

    console.log("Trello API URL:", TRELLO_API_URL);

    const response = await fetch(TRELLO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Invalid json" }, { status: 500 });
    }
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
};

const mountText = (contact: ContactPayload) => {
  const { name, email, phone, message } = contact;

  const descricao = `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`;
  return descricao;
};
