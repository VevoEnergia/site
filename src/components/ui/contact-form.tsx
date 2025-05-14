"use client";
import { ContactPayload } from "@/app/types/Contact";
import Input from "./input";
import TextArea from "./textarea";
import { useState } from "react";
import { Subtitle } from "./text";
import PhoneInput from "./phone-input";

export default function ContactForm() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState<ContactPayload>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setError(true);
      setMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Mensagem enviada com sucesso!");
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setError(false);
      } else {
        setMessage("Erro ao enviar a mensagem. Tente novamente mais tarde.");
        setError(true);
      }
    } catch {
      setMessage("Erro ao enviar a mensagem. Tente novamente mais tarde.");
      setError(true);
    }
  };

  return (
    <div className="p-4 dxl:p-8">
      <Subtitle className="text-start !text-3xl md:!text-4xl 2xl:!text-5xl w-full text-secondary font-black">
        Fale com um Especialista<span className="text-primary">.</span>
      </Subtitle>
      <p className="text-xs lg:text-base text-neutral-700 mt-2">
        Preencha o formulário abaixo e um de nossos consultores entrará em
        contato com você o mais breve possível.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 mt-4">
        {error && <p className="text-red-500">{message}</p>}
        {success && <p className="text-green-600 font-medium">{message}</p>}
        <Input
          type="text"
          name="name"
          label="Nome"
          value={formData.name}
          onChange={handleChange}
          placeholder="Digite seu nome"
          required
        />
        <PhoneInput
          type="text"
          name="phone"
          label="Telefone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="seu@email.com"
          label="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          label="Mensagem"
          placeholder="Digite sua mensagem..."
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
