/* ============================================================
   ContactSection — Entrehilos Atelier
   Sección de contacto con datos, horario e imagen
   Style: Taller Mediterráneo
   ============================================================ */
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34613175658?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20vuestros%20servicios";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-12 fade-in-up">
          <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Estamos aquí para ti
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contacto
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg mt-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Puedes contactarnos por teléfono, email o WhatsApp. Respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="fade-in-up space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.62 0.10 42 / 0.1)" }}>
                <Phone className="text-terracotta" size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Teléfono</p>
                <a href="tel:+34613175658" className="text-xl font-bold text-foreground hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  +34 613 175 658
                </a>
                <p className="text-sm text-muted-foreground mt-1" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Llamadas y WhatsApp</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.62 0.10 42 / 0.1)" }}>
                <Mail className="text-terracotta" size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Correo electrónico</p>
                <a href="mailto:entrehilosatelier78@gmail.com" className="text-base font-semibold text-foreground hover:text-primary transition-colors break-all" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  entrehilosatelier78@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(37, 211, 102, 0.1)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-muted-foreground mb-1" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>WhatsApp</p>
                <p className="text-base font-semibold text-foreground mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>+34 613 175 658</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm py-2 px-4"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enviar mensaje
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-sm border border-border">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.64 0.07 152 / 0.1)" }}>
                <Clock className="text-sage" size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Horario de atención</p>
                <div className="space-y-1 text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  <div className="flex justify-between gap-6">
                    <span className="text-foreground/80">Lunes – Viernes</span>
                    <span className="font-semibold text-foreground">9:00 – 19:00</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span className="text-foreground/80">Sábados</span>
                    <span className="font-semibold text-foreground">10:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span className="text-foreground/80">Domingos</span>
                    <span className="font-semibold text-muted-foreground">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder + CTA */}
          <div className="fade-in-up flex flex-col gap-6">
            <div className="rounded-xl overflow-hidden shadow-sm border border-border bg-muted flex-1 min-h-64 flex items-center justify-center" style={{ minHeight: "280px" }}>
              <div className="text-center p-8">
                <MapPin className="mx-auto mb-3 text-terracotta" size={36} />
                <p className="text-foreground font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Entrehilos Atelier</p>
                <p className="text-muted-foreground text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  Consulta nuestra ubicación exacta<br />contactándonos por WhatsApp o teléfono.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-4 text-sm py-2.5 px-5"
                >
                  <MessageCircle size={16} />
                  Pedir cita
                </a>
              </div>
            </div>

            {/* Quick CTA card */}
            <div className="rounded-xl p-6 text-white" style={{ background: "linear-gradient(135deg, oklch(0.62 0.10 42), oklch(0.55 0.11 35))" }}>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                ¿Primera vez en el taller?
              </h3>
              <p className="text-white/80 text-sm mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Trae tu prenda y te hacemos una valoración gratuita sin compromiso. ¡Te esperamos!
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
                style={{ color: "oklch(0.62 0.10 42)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Reservar visita por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
