/* ============================================================
   OrderForm — Entrehilos Atelier
   Formulario de encargo de arreglos y confección
   Style: Taller Mediterráneo
   ============================================================ */
import { useState } from "react";
import { CheckCircle, Send, AlertCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34613175658";

type FormData = {
  nombre: string;
  telefono: string;
  email: string;
  tipoServicio: string;
  prenda: string;
  descripcion: string;
  urgente: boolean;
  politica: boolean;
};

const initialForm: FormData = {
  nombre: "",
  telefono: "",
  email: "",
  tipoServicio: "",
  prenda: "",
  descripcion: "",
  urgente: false,
  politica: false,
};

export default function OrderForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!form.telefono.trim()) newErrors.telefono = "El teléfono es obligatorio";
    else if (!/^[+]?[\d\s\-]{9,15}$/.test(form.telefono.trim())) newErrors.telefono = "Teléfono no válido";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Email no válido";
    if (!form.tipoServicio) newErrors.tipoServicio = "Selecciona un tipo de servicio";
    if (!form.prenda.trim()) newErrors.prenda = "Indica la prenda";
    if (!form.descripcion.trim()) newErrors.descripcion = "Describe el trabajo a realizar";
    if (!form.politica) newErrors.politica = "Debes aceptar la política de privacidad";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Simulate form submission — redirect to WhatsApp with pre-filled message
    const msg = encodeURIComponent(
      `Hola, soy ${form.nombre}. Me gustaría solicitar un encargo:\n\n` +
      `📌 Servicio: ${form.tipoServicio}\n` +
      `👗 Prenda: ${form.prenda}\n` +
      `📝 Descripción: ${form.descripcion}\n` +
      `📞 Teléfono: ${form.telefono}\n` +
      `${form.email ? `📧 Email: ${form.email}\n` : ""}` +
      `${form.urgente ? "⚡ Es urgente\n" : ""}`
    );

    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);

    // Open WhatsApp after a short delay
    setTimeout(() => {
      window.open(`${WHATSAPP_URL}?text=${msg}`, "_blank");
    }, 1500);
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-md border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-border bg-background focus:border-primary"
    }`;

  return (
    <section id="encargo" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12 fade-in-up">
            <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Solicita tu encargo
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Formulario de Encargo
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground text-lg mt-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Rellena el formulario y nos pondremos en contacto contigo en menos de 24 horas para confirmar el presupuesto.
            </p>
          </div>

          {submitted ? (
            <div className="fade-in-up text-center py-16 bg-card rounded-xl shadow-sm border border-border">
              <CheckCircle className="mx-auto mb-4 text-green-500" size={56} />
              <h3 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                ¡Encargo recibido!
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Gracias, {form.nombre}. Abriendo WhatsApp para que puedas enviarnos los detalles directamente...
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline"
              >
                Enviar otro encargo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="fade-in-up bg-card rounded-xl shadow-sm border border-border p-8 space-y-6" noValidate>
              {/* Row 1: Nombre + Teléfono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    Nombre completo <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={inputClass("nombre")}
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  />
                  {errors.nombre && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.nombre}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    Teléfono <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+34 600 000 000"
                    className={inputClass("telefono")}
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  />
                  {errors.telefono && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.telefono}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  Correo electrónico <span className="text-muted-foreground font-normal">(opcional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className={inputClass("email")}
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
              </div>

              {/* Row 2: Tipo de servicio + Prenda */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    Tipo de servicio <span className="text-terracotta">*</span>
                  </label>
                  <select
                    name="tipoServicio"
                    value={form.tipoServicio}
                    onChange={handleChange}
                    className={inputClass("tipoServicio")}
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    <option value="">Selecciona...</option>
                    <option value="Arreglo de ropa">Arreglo de ropa</option>
                    <option value="Confección a medida">Confección a medida</option>
                    <option value="Arreglo vestido de novia/fiesta">Arreglo vestido de novia/fiesta</option>
                    <option value="Reparación">Reparación</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.tipoServicio && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.tipoServicio}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    Prenda <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    name="prenda"
                    value={form.prenda}
                    onChange={handleChange}
                    placeholder="Ej: Pantalón vaquero, vestido de noche..."
                    className={inputClass("prenda")}
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  />
                  {errors.prenda && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.prenda}</p>}
                </div>
              </div>

              {/* Descripción */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  Descripción del trabajo <span className="text-terracotta">*</span>
                </label>
                <textarea
                  name="descripcion"
                  value={form.descripcion}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe con detalle qué necesitas: subir el bajo 3 cm, entrar la cintura, confeccionar una falda midi en lino beige..."
                  className={`${inputClass("descripcion")} resize-none`}
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                />
                {errors.descripcion && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.descripcion}</p>}
              </div>

              {/* Urgente */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="urgente"
                  name="urgente"
                  checked={form.urgente}
                  onChange={handleChange}
                  className="w-4 h-4 accent-primary rounded"
                />
                <label htmlFor="urgente" className="text-sm text-foreground/80" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  Es urgente (necesito el arreglo en menos de 48 horas)
                </label>
              </div>

              {/* Política de privacidad */}
              <div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="politica"
                    name="politica"
                    checked={form.politica}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 accent-primary rounded"
                  />
                  <label htmlFor="politica" className="text-sm text-foreground/80 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    He leído y acepto la{" "}
                    <button
                      type="button"
                      onClick={() => document.querySelector("#privacidad")?.scrollIntoView({ behavior: "smooth" })}
                      className="text-terracotta underline hover:no-underline"
                    >
                      Política de Privacidad
                    </button>{" "}
                    y el tratamiento de mis datos personales para gestionar mi encargo. <span className="text-terracotta">*</span>
                  </label>
                </div>
                {errors.politica && <p className="text-red-500 text-xs mt-1 flex items-center gap-1 ml-7"><AlertCircle size={12} />{errors.politica}</p>}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar solicitud de encargo
                    </>
                  )}
                </button>
                <p className="text-xs text-muted-foreground text-center mt-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  Al enviar, se abrirá WhatsApp con los detalles para confirmar tu encargo directamente.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
