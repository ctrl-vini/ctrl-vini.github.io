import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        "service_qlg7wlw",
        "template_8a4sxzu",
        {
          from_name: formData.name,
          to_name: "Vinicius",
          from_email: formData.email,
          to_email: "viniciusa.dev@gmail.com",
          message: formData.message,
        },
        "u-OYbTvydLjOBRPCZ"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Sua mensagem foi enviada!");
    } catch (error) {
      setIsLoading(false);
      showAlertMessage("danger", "Algo deu errado!");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex items-center c-space section-spacing"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Fale Comigo</h2>
          <p className="font-normal text-neutral-400">
            Se você está procurando criar um novo sistema, melhorar sua
            plataforma existente ou dar vida a um projeto único, estou aqui para
            ajudar!
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Nome Completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Seu Nome"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="seuemail@exemplo.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Me diga como posso ajudar você..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Enviar" : "Enviando..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
