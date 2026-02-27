/* ============================================================
   ServicesSection — Entrehilos Atelier
   Arreglos con precios + Confección por encargo (consultar)
   Style: Taller Mediterráneo — card grid with left accent
   ============================================================ */
import { useEffect, useRef } from "react";
import { Scissors, Ruler, Shirt, Star, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34613175658?text=Hola,%20me%20gustaría%20solicitar%20presupuesto%20para%20confección%20a%20medida";

const arreglos = [
  {
    categoria: "Pantalones",
    icon: "👖",
    servicios: [
      { nombre: "Subir o bajar bajo de pantalón", precio: "8 – 12 €" },
      { nombre: "Entrar o ensanchar cintura", precio: "12 – 18 €" },
      { nombre: "Entrar o ensanchar piernas", precio: "15 – 22 €" },
      { nombre: "Acortar o alargar entrepierna", precio: "10 – 15 €" },
      { nombre: "Cambio de cremallera pantalón", precio: "12 – 18 €" },
    ],
  },
  {
    categoria: "Faldas y Vestidos",
    icon: "👗",
    servicios: [
      { nombre: "Subir o bajar bajo de falda/vestido", precio: "8 – 14 €" },
      { nombre: "Entrar o ensanchar falda", precio: "12 – 20 €" },
      { nombre: "Entrar o ensanchar vestido", precio: "18 – 30 €" },
      { nombre: "Cambio de cremallera vestido", precio: "15 – 25 €" },
      { nombre: "Ajuste de tirantes/escote", precio: "10 – 18 €" },
    ],
  },
  {
    categoria: "Chaquetas y Abrigos",
    icon: "🧥",
    servicios: [
      { nombre: "Acortar mangas chaqueta", precio: "15 – 22 €" },
      { nombre: "Entrar o ensanchar chaqueta", precio: "20 – 35 €" },
      { nombre: "Acortar largo abrigo", precio: "18 – 28 €" },
      { nombre: "Forrar chaqueta/abrigo", precio: "35 – 60 €" },
      { nombre: "Cambio de botones", precio: "8 – 15 €" },
    ],
  },
  {
    categoria: "Camisas y Tops",
    icon: "👕",
    servicios: [
      { nombre: "Entrar o ensanchar camisa", precio: "10 – 18 €" },
      { nombre: "Acortar largo camisa", precio: "8 – 12 €" },
      { nombre: "Acortar mangas camisa", precio: "10 – 16 €" },
      { nombre: "Cambio de cremallera top", precio: "10 – 16 €" },
      { nombre: "Reparación de costuras", precio: "5 – 12 €" },
    ],
  },
  {
    categoria: "Ropa de Novia y Fiesta",
    icon: "💍",
    servicios: [
      { nombre: "Arreglo vestido de novia", precio: "Desde 60 €" },
      { nombre: "Ajuste traje de novia completo", precio: "Desde 90 €" },
      { nombre: "Arreglo vestido de fiesta", precio: "Desde 30 €" },
      { nombre: "Bordados y adornos", precio: "Consultar" },
      { nombre: "Prueba y ajuste final", precio: "Incluido" },
    ],
  },
  {
    categoria: "Otros Arreglos",
    icon: "🧵",
    servicios: [
      { nombre: "Reparación de ropa infantil", precio: "5 – 12 €" },
      { nombre: "Zurcido invisible", precio: "8 – 20 €" },
      { nombre: "Coser botones sueltos", precio: "3 – 6 €" },
      { nombre: "Arreglo de bolsillos", precio: "8 – 15 €" },
      { nombre: "Impermeabilizar costuras", precio: "10 – 18 €" },
    ],
  },
];

const confeccion = [
  { nombre: "Falda a medida", desc: "Diseño personalizado en tela de tu elección. Desde faldas midi hasta mini.", icon: "👗" },
  { nombre: "Vestido por encargo", desc: "Confección completa desde el patrón. Ideal para eventos especiales.", icon: "✨" },
  { nombre: "Pantalón a medida", desc: "Patronaje y confección adaptados a tu figura exacta.", icon: "👖" },
  { nombre: "Blusa o camisa", desc: "Diseño propio o basado en una referencia que nos traigas.", icon: "👚" },
  { nombre: "Traje de novia", desc: "Tu vestido de novia soñado, desde el boceto hasta el último detalle.", icon: "💐" },
  { nombre: "Ropa infantil", desc: "Prendas únicas para los más pequeños, con telas seguras y duraderas.", icon: "🧒" },
];

function useScrollReveal(selector: string) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}

export default function ServicesSection() {
  useScrollReveal(".fade-in-up");

  return (
    <>
      {/* ===== ARREGLOS SECTION ===== */}
      <section id="arreglos" className="py-20 bg-background">
        <div className="container">
          {/* Header */}
          <div className="max-w-2xl mb-14 fade-in-up">
            <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Nuestros servicios
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Arreglos de Ropa
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground text-lg mt-4 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Precios orientativos. El precio final depende del tejido, la complejidad y el estado de la prenda.
              Consulta sin compromiso — siempre valoramos antes de comenzar.
            </p>
          </div>

          {/* Grid de categorías */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {arreglos.map((cat, ci) => (
              <div
                key={cat.categoria}
                className="fade-in-up bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden card-accent-left"
                style={{ transitionDelay: `${ci * 80}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {cat.categoria}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {cat.servicios.map((s) => (
                      <li key={s.nombre} className="flex items-center justify-between gap-4 text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        <span className="text-foreground/80 flex-1">{s.nombre}</span>
                        <span className="font-semibold text-terracotta whitespace-nowrap">{s.precio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Nota legal de precios */}
          <p className="mt-8 text-sm text-muted-foreground text-center fade-in-up" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            * Precios orientativos. IVA no incluido. Presupuesto gratuito y sin compromiso previo a cualquier trabajo.
          </p>
        </div>
      </section>

      {/* ===== CONFECCIÓN POR ENCARGO ===== */}
      <section id="confeccion" className="py-20 bg-cream-dark">
        <div className="container">
          <div className="max-w-2xl mb-14 fade-in-up">
            <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Creamos para ti
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Confección por Encargo
            </h2>
            <div className="section-divider" style={{ backgroundColor: "oklch(0.64 0.07 152)" }} />
            <p className="text-muted-foreground text-lg mt-4 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Diseñamos y confeccionamos prendas únicas a tu medida. El precio varía según el diseño, la tela y la complejidad.
              Contáctanos para un presupuesto personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {confeccion.map((item, i) => (
              <div
                key={item.nombre}
                className="fade-in-up bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 card-accent-left-sage"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.nombre}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-sage">Precio: Consultar</span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-xs py-1.5 px-3"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Consultar
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="mt-14 fade-in-up rounded-xl overflow-hidden" style={{ background: "oklch(0.28 0.012 55)" }}>
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  ¿Tienes un proyecto en mente?
                </h3>
                <p className="text-white/70" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  Cuéntanos tu idea y te damos presupuesto sin compromiso.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <a
                  href="#encargo"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#encargo")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="btn-primary"
                >
                  Formulario de encargo
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
