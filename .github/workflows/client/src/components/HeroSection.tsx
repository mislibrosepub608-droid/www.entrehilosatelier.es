/* ============================================================
   HeroSection — Entrehilos Atelier
   Style: Full-bleed image hero, dark overlay, Playfair Display
   ============================================================ */
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/wzk0ByA2Rv0nQM10tchTZS/sandbox/KKLU5pDJ4cVRwLZSN3ppZC-img-1_1772036750000_na1fn_aGVyby1hdGVsaWVy.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd3prMEJ5QTJSdjBuUU0xMHRjaFRaUy9zYW5kYm94L0tLTFU1cERKNGNWUndMWlNOM3BwWkMtaW1nLTFfMTc3MjAzNjc1MDAwMF9uYTFmbl9hR1Z5YnkxaGRHVnNhV1Z5LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NjzDfgx1amWWRsKWpBnK8V8BZ6VlnS1QtL-Rw2BaLbssDXZ68Wta12foFQB62LcRDOkVL4Wdpz5lNHTJvjgPmZ4AaA2mtlmuVxjukUomBBw6pB168nMNzIgravpyWkQGYaAo8JhnqhPwENHk5tCqgwpRBLQnMcXeBqy47WJ2P5r-Or34Duud6bS5X10as0eNyMe-KMmJ~CmB6ArlwR6dcqQbbSYOLHlFZib-dPo-QzSivlYnj0DwiLHlBsl8FGUN3HGzBUvT50RYvQiviO4FJVBD9m2n3GylEaou~7rFJGnhDxroi0vIBzowudHehsAzgo4NMa8Pd7BZH~MXO6~kwg__";
const WHATSAPP_URL = "https://wa.me/34613175658?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20vuestros%20servicios";

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textRef.current) {
        textRef.current.style.opacity = "1";
        textRef.current.style.transform = "translateY(0)";
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToArreglos = () => {
    document.querySelector("#arreglos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />
      {/* Gradient overlay — left side darker for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container">
        <div
          ref={textRef}
          style={{
            opacity: 0,
            transform: "translateY(32px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <p
            className="text-amber-200 text-sm font-semibold tracking-[0.18em] uppercase mb-4"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Taller artesanal de costura
          </p>

          {/* Headline */}
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Tu ropa,{" "}
            <em className="not-italic" style={{ color: "oklch(0.82 0.10 55)" }}>
              perfecta
            </em>{" "}
            a medida
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300 }}
          >
            Arreglos profesionales, confección por encargo y costura artesanal.
            Desde subir un pantalón hasta crear la falda de tus sueños.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#encargo"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#encargo")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
            >
              Solicitar encargo
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
              Consultar por WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-6">
            {[
              { num: "+500", label: "Arreglos realizados" },
              { num: "10+", label: "Años de experiencia" },
              { num: "100%", label: "Satisfacción garantizada" },
            ].map((badge) => (
              <div key={badge.num} className="text-white">
                <p className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.82 0.10 55)" }}>
                  {badge.num}
                </p>
                <p className="text-xs text-white/70 mt-0.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {badge.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToArreglos}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
