/* ============================================================
   ChatBot — Entrehilos Atelier
   Chatbot de IA para atención al cliente
   Style: Taller Mediterráneo — floating chat bubble
   ============================================================ */
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34613175658?text=Hola,%20me%20gustaría%20hablar%20con%20una%20persona%20del%20equipo";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  options?: string[];
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    from: "bot",
    text: "¡Hola! 👋 Soy el asistente virtual de **Entrehilos Atelier**. ¿En qué puedo ayudarte hoy?",
    options: [
      "Ver precios de arreglos",
      "Información sobre confección",
      "¿Cómo hago un encargo?",
      "Horarios y contacto",
    ],
  },
];

const BOT_RESPONSES: Record<string, { text: string; options?: string[] }> = {
  "ver precios de arreglos": {
    text: "Nuestros precios orientativos son:\n\n• **Bajo de pantalón:** 8–12 €\n• **Cintura pantalón:** 12–18 €\n• **Bajo de falda/vestido:** 8–14 €\n• **Cremallera:** 12–25 €\n• **Acortar mangas:** 10–22 €\n\nTodos los precios incluyen el trabajo artesanal. El precio exacto se confirma tras ver la prenda.",
    options: ["Hacer un encargo", "Más preguntas", "Hablar con el equipo"],
  },
  "información sobre confección": {
    text: "En Entrehilos Atelier confeccionamos prendas únicas a medida:\n\n• Faldas, vestidos, blusas, pantalones\n• Trajes de novia y ropa de fiesta\n• Ropa infantil\n\nEl precio de la confección varía según el diseño, la tela y la complejidad. Siempre hacemos un presupuesto previo gratuito.",
    options: ["¿Cómo hago un encargo?", "Ver galería de trabajos", "Hablar con el equipo"],
  },
  "¿cómo hago un encargo?": {
    text: "Hacer un encargo es muy sencillo:\n\n1️⃣ **Rellena el formulario** de encargo en nuestra web\n2️⃣ **O escríbenos por WhatsApp** con los detalles\n3️⃣ **Te respondemos** en menos de 24 horas con el presupuesto\n4️⃣ **Traes la prenda** al taller o la enviamos por mensajería\n5️⃣ **Recogida** cuando el arreglo esté listo",
    options: ["Ir al formulario", "Contactar por WhatsApp", "Más preguntas"],
  },
  "horarios y contacto": {
    text: "Puedes contactarnos por:\n\n📞 **Teléfono:** +34 613 175 658\n📧 **Email:** entrehilosatelier78@gmail.com\n💬 **WhatsApp:** +34 613 175 658\n\nRespondemos en horario de lunes a viernes de 9:00 a 19:00 h.",
    options: ["Hacer un encargo", "Ver precios", "Hablar con el equipo"],
  },
  "hacer un encargo": {
    text: "¡Perfecto! Puedes rellenar nuestro formulario de encargo en la sección correspondiente de la web, o escribirnos directamente por WhatsApp. ¿Qué prefieres?",
    options: ["Ir al formulario", "Contactar por WhatsApp"],
  },
  "ir al formulario": {
    text: "Te llevo al formulario de encargo ahora mismo. 📋",
    options: [],
  },
  "contactar por whatsapp": {
    text: "¡Genial! Haz clic en el botón de abajo para abrir WhatsApp y hablar directamente con nuestro equipo. 💬",
    options: ["Abrir WhatsApp"],
  },
  "hablar con el equipo": {
    text: "Por supuesto. Puedes contactar directamente con nuestro equipo por WhatsApp o teléfono. Estamos disponibles de lunes a viernes de 9:00 a 19:00 h.",
    options: ["Abrir WhatsApp", "Ver teléfono y email"],
  },
  "abrir whatsapp": {
    text: "Abriendo WhatsApp... 💬 Si no se abre automáticamente, escríbenos al +34 613 175 658.",
    options: [],
  },
  "más preguntas": {
    text: "¡Claro! ¿Sobre qué más quieres información?",
    options: [
      "Ver precios de arreglos",
      "Información sobre confección",
      "¿Cómo hago un encargo?",
      "Horarios y contacto",
    ],
  },
  "ver galería de trabajos": {
    text: "Puedes ver nuestra galería de trabajos en la sección 'Galería' de la web. Allí encontrarás fotos de arreglos y prendas confeccionadas por nuestro equipo.",
    options: ["Hacer un encargo", "Más preguntas"],
  },
  "ver teléfono y email": {
    text: "📞 **Teléfono:** +34 613 175 658\n📧 **Email:** entrehilosatelier78@gmail.com\n\nNo dudes en llamarnos o escribirnos.",
    options: ["Hacer un encargo", "Más preguntas"],
  },
};

function formatText(text: string) {
  const parts = text.split("**");
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(100);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const addBotMessage = (text: string, options?: string[]) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, from: "bot", text, options },
      ]);
    }, 800);
  };

  const handleOption = (option: string) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: nextId.current++, from: "user", text: option },
    ]);

    const key = option.toLowerCase();

    if (key === "ir al formulario") {
      addBotMessage(BOT_RESPONSES["ir al formulario"].text);
      setTimeout(() => {
        document.querySelector("#encargo")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }, 1200);
      return;
    }

    if (key === "abrir whatsapp") {
      addBotMessage(BOT_RESPONSES["abrir whatsapp"].text);
      setTimeout(() => {
        window.open(WHATSAPP_URL, "_blank");
      }, 1000);
      return;
    }

    const response = BOT_RESPONSES[key];
    if (response) {
      addBotMessage(response.text, response.options);
    } else {
      addBotMessage(
        "No he entendido bien tu pregunta. ¿Puedo ayudarte con algo de lo siguiente?",
        ["Ver precios de arreglos", "Información sobre confección", "¿Cómo hago un encargo?", "Horarios y contacto"]
      );
    }
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((prev) => [
      ...prev,
      { id: nextId.current++, from: "user", text },
    ]);

    const lower = text.toLowerCase();
    let matched = false;
    for (const key of Object.keys(BOT_RESPONSES)) {
      if (lower.includes(key) || key.includes(lower.split(" ")[0])) {
        addBotMessage(BOT_RESPONSES[key].text, BOT_RESPONSES[key].options);
        matched = true;
        break;
      }
    }
    if (!matched) {
      addBotMessage(
        "Gracias por tu mensaje. Para una respuesta más precisa, te recomendamos contactar directamente con nuestro equipo.",
        ["Hablar con el equipo", "Ver precios de arreglos", "¿Cómo hago un encargo?"]
      );
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        style={{ backgroundColor: "oklch(0.62 0.10 42)" }}
        aria-label="Abrir chat de atención al cliente"
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} className="text-white" />
        )}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 bg-background rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
          style={{ maxHeight: "520px" }}
        >
          {/* Header */}
          <div className="p-4 flex items-center gap-3" style={{ backgroundColor: "oklch(0.62 0.10 42)" }}>
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Bot size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                Asistente Entrehilos
              </p>
              <p className="text-white/70 text-xs flex items-center gap-1" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                En línea ahora
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: "340px" }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: msg.from === "bot" ? "oklch(0.62 0.10 42)" : "oklch(0.64 0.07 152)" }}
                >
                  {msg.from === "bot" ? <Bot size={14} className="text-white" /> : <User size={14} className="text-white" />}
                </div>
                <div className={`max-w-[75%] ${msg.from === "user" ? "items-end" : "items-start"} flex flex-col gap-1.5`}>
                  <div
                    className={`px-3 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.from === "bot"
                        ? "bg-muted text-foreground rounded-tl-sm"
                        : "text-white rounded-tr-sm"
                    }`}
                    style={{
                      backgroundColor: msg.from === "user" ? "oklch(0.62 0.10 42)" : undefined,
                      fontFamily: "'Source Sans 3', sans-serif",
                    }}
                  >
                    {msg.text.split("\n").map((line, i) => (
                      <span key={i}>
                        {formatText(line)}
                        {i < msg.text.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                  {msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOption(opt)}
                          className="text-xs px-3 py-1.5 rounded-full border transition-colors hover:text-white"
                          style={{
                            borderColor: "oklch(0.62 0.10 42)",
                            color: "oklch(0.62 0.10 42)",
                            fontFamily: "'Source Sans 3', sans-serif",
                          }}
                          onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.backgroundColor = "oklch(0.62 0.10 42)"; }}
                          onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.backgroundColor = "transparent"; }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.62 0.10 42)" }}>
                  <Bot size={14} className="text-white" />
                </div>
                <div className="bg-muted px-3 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1">
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Escribe tu pregunta..."
                className="flex-1 px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors disabled:opacity-40"
                style={{ backgroundColor: "oklch(0.62 0.10 42)" }}
              >
                <Send size={15} className="text-white" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Asistente virtual · Para hablar con una persona:{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-terracotta underline">WhatsApp</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
