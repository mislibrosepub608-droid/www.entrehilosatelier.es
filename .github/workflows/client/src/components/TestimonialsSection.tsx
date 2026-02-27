/* ============================================================
   TestimonialsSection — Entrehilos Atelier
   Testimonios de clientes satisfechos
   Style: Taller Mediterráneo — cards con avatar y estrellas
   ============================================================ */
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    nombre: "María García",
    ciudad: "Madrid",
    avatar: "MG",
    rating: 5,
    texto: "Llevé un vestido de novia que necesitaba varios arreglos y quedé absolutamente encantada. El resultado fue perfecto, como si el vestido hubiera sido hecho a mi medida. Muy profesional y atenta.",
    servicio: "Arreglo vestido de novia",
  },
  {
    nombre: "Carmen López",
    ciudad: "Barcelona",
    avatar: "CL",
    rating: 5,
    texto: "Me hicieron una falda midi de lino a medida y es la prenda que más me han elogiado. El acabado es impecable y el trato fue excelente desde el primer momento. Totalmente recomendable.",
    servicio: "Confección falda a medida",
  },
  {
    nombre: "Ana Martínez",
    ciudad: "Valencia",
    avatar: "AM",
    rating: 5,
    texto: "Llevé varios pantalones para subir el bajo y ajustar la cintura. El trabajo fue rápido, limpio y a un precio muy razonable. Ya soy clienta fija. ¡Gracias por cuidar tanto los detalles!",
    servicio: "Arreglos de pantalones",
  },
  {
    nombre: "Laura Fernández",
    ciudad: "Sevilla",
    avatar: "LF",
    rating: 5,
    texto: "Encargué un vestido de fiesta para la boda de mi hermana y superó todas mis expectativas. Escucharon exactamente lo que quería y lo ejecutaron a la perfección. Repetiré sin duda.",
    servicio: "Vestido de fiesta por encargo",
  },
  {
    nombre: "Sofía Ruiz",
    ciudad: "Bilbao",
    avatar: "SR",
    rating: 5,
    texto: "Tenía un abrigo vintage muy especial que necesitaba restauración y arreglos. Lo trataron con un cuidado increíble y quedó como nuevo. Muy agradecida por el mimo y la profesionalidad.",
    servicio: "Restauración de abrigo vintage",
  },
  {
    nombre: "Isabel Torres",
    ciudad: "Zaragoza",
    avatar: "IT",
    rating: 5,
    texto: "Ropa infantil para mis hijos: les hicieron unos pantalones a medida y unas camisas preciosas. Los niños los adoran y la calidad es excelente. El precio muy justo para la calidad recibida.",
    servicio: "Ropa infantil a medida",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-14 fade-in-up">
          <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Lo que dicen nuestras clientas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Testimonios
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg mt-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            La satisfacción de nuestras clientas es nuestra mayor recompensa. Aquí compartimos algunas de sus experiencias.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-14 fade-in-up">
          {[
            { num: "4.9/5", label: "Valoración media" },
            { num: "+200", label: "Reseñas positivas" },
            { num: "98%", label: "Clientes satisfechos" },
          ].map((s) => (
            <div key={s.num} className="text-center bg-card rounded-lg p-4 shadow-sm border border-border">
              <p className="text-2xl md:text-3xl font-bold text-terracotta" style={{ fontFamily: "'Playfair Display', serif" }}>{s.num}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.nombre}
              className="fade-in-up bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border relative"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 text-border" size={28} />

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Text */}
              <p className="text-foreground/80 text-sm leading-relaxed mt-4 mb-5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                "{t.texto}"
              </p>

              {/* Service tag */}
              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-4" style={{ backgroundColor: "oklch(0.62 0.10 42 / 0.1)", color: "oklch(0.62 0.10 42)", fontFamily: "'Source Sans 3', sans-serif" }}>
                {t.servicio}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.62 0.10 42)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{t.nombre}</p>
                  <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{t.ciudad}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
