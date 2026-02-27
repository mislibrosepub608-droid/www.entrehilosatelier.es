/* ============================================================
   Footer — Entrehilos Atelier
   Footer con términos legales, privacidad y cookies
   Style: Taller Mediterráneo
   ============================================================ */
import { useState } from "react";
import { X } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663281847680/OOnOUBHhklrxYonb.png";
const WHATSAPP_URL = "https://wa.me/34613175658?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20vuestros%20servicios";

type ModalType = "aviso" | "privacidad" | "cookies" | "terminos" | null;

const MODALS: Record<string, { titulo: string; contenido: string }> = {
  aviso: {
    titulo: "Aviso Legal",
    contenido: `AVISO LEGAL

En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los datos de información general de este sitio web.

DATOS DEL TITULAR
Denominación social: Entrehilos Atelier
Actividad: Taller de costura, arreglos y confección de ropa por encargo
Teléfono: +34 613 175 658
Correo electrónico: entrehilosatelier78@gmail.com

OBJETO Y ÁMBITO DE APLICACIÓN
El presente Aviso Legal regula el acceso y uso del sitio web de Entrehilos Atelier. El acceso al sitio web implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.

PROPIEDAD INTELECTUAL E INDUSTRIAL
Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como el diseño gráfico y los códigos fuente) son propiedad intelectual de Entrehilos Atelier o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual.

RESPONSABILIDAD
Entrehilos Atelier no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran ocasionarse a raíz del uso de los servicios y de los contenidos de la web por parte de los usuarios.

LEGISLACIÓN APLICABLE Y JURISDICCIÓN
Las relaciones entre Entrehilos Atelier y los usuarios de sus servicios, presentes en este sitio web, están sometidas a la legislación y jurisdicción española.`,
  },
  privacidad: {
    titulo: "Política de Privacidad",
    contenido: `POLÍTICA DE PRIVACIDAD

En cumplimiento del Reglamento General de Protección de Datos (RGPD) (UE) 2016/679 y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos de lo siguiente:

RESPONSABLE DEL TRATAMIENTO
Denominación: Entrehilos Atelier
Correo electrónico: entrehilosatelier78@gmail.com
Teléfono: +34 613 175 658

FINALIDAD DEL TRATAMIENTO
Los datos personales que nos facilite a través del formulario de encargo o por cualquier otro medio serán tratados con las siguientes finalidades:
• Gestionar y tramitar los encargos de arreglos y confección solicitados.
• Comunicarnos con usted para confirmar presupuestos y plazos.
• Enviarle información sobre nuestros servicios si nos ha dado su consentimiento.

BASE JURÍDICA
El tratamiento de sus datos se basa en:
• La ejecución del contrato de prestación de servicios.
• Su consentimiento expreso cuando corresponda.
• El cumplimiento de obligaciones legales.

DESTINATARIOS
Sus datos no serán cedidos a terceros salvo obligación legal. No realizamos transferencias internacionales de datos.

PLAZO DE CONSERVACIÓN
Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad.

DERECHOS DEL INTERESADO
Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de los datos enviando un correo a entrehilosatelier78@gmail.com, adjuntando copia de su DNI.

También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).`,
  },
  cookies: {
    titulo: "Política de Cookies",
    contenido: `POLÍTICA DE COOKIES

En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, le informamos sobre el uso de cookies en nuestro sitio web.

¿QUÉ SON LAS COOKIES?
Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten que el sitio recuerde sus acciones y preferencias durante un período de tiempo.

TIPOS DE COOKIES QUE UTILIZAMOS

1. COOKIES TÉCNICAS (necesarias)
Son imprescindibles para el correcto funcionamiento del sitio web. No requieren su consentimiento.
• Cookies de sesión: mantienen su sesión activa mientras navega.
• Cookies de preferencias: recuerdan sus preferencias de navegación.

2. COOKIES ANALÍTICAS
Nos permiten analizar el uso del sitio web para mejorar nuestros servicios. Los datos son anónimos y agregados.
• Análisis de visitas y comportamiento de navegación.

3. COOKIES DE TERCEROS
Podemos utilizar servicios de terceros que instalan sus propias cookies:
• Google Analytics: análisis de tráfico web.
• WhatsApp: botón de contacto integrado.

GESTIÓN DE COOKIES
Puede configurar su navegador para rechazar o eliminar cookies:
• Chrome: Configuración > Privacidad y seguridad > Cookies
• Firefox: Opciones > Privacidad y seguridad
• Safari: Preferencias > Privacidad
• Edge: Configuración > Privacidad, búsqueda y servicios

Tenga en cuenta que deshabilitar ciertas cookies puede afectar al funcionamiento del sitio web.

ACTUALIZACIONES
Esta política puede ser actualizada. Le recomendamos revisarla periódicamente.`,
  },
  terminos: {
    titulo: "Términos y Condiciones",
    contenido: `TÉRMINOS Y CONDICIONES DE SERVICIO

Los presentes Términos y Condiciones regulan la prestación de servicios de costura, arreglos y confección de ropa por encargo por parte de Entrehilos Atelier.

1. SERVICIOS OFRECIDOS
Entrehilos Atelier ofrece los siguientes servicios:
• Arreglos de ropa (subida/bajada de bajos, ajuste de tallas, cambio de cremalleras, etc.)
• Confección de prendas a medida por encargo
• Reparación y restauración de prendas

2. PRESUPUESTOS
• Todos los presupuestos son gratuitos y sin compromiso.
• Los precios indicados en la web son orientativos. El precio final se confirma tras valorar la prenda.
• El presupuesto se comunica antes de comenzar cualquier trabajo.

3. ENCARGOS Y PLAZOS
• El plazo de entrega se acordará en el momento del encargo según la carga de trabajo del taller.
• Los plazos urgentes (menos de 48 horas) pueden tener un suplemento de precio.
• Entrehilos Atelier no se responsabiliza de retrasos debidos a causas ajenas a su control.

4. PAGO
• El pago se realiza a la entrega de la prenda.
• Se aceptan efectivo y transferencia bancaria.
• Para encargos de confección a medida, puede requerirse un anticipo del 50%.

5. RECOGIDA DE PRENDAS
• Las prendas deben recogerse en el plazo acordado.
• Transcurridos 3 meses desde la finalización del trabajo sin recogida, Entrehilos Atelier no se responsabiliza de la prenda.

6. GARANTÍA
• Todos los trabajos cuentan con garantía de 30 días desde la entrega.
• La garantía cubre defectos de ejecución, no el deterioro por uso o lavado incorrecto.

7. RESPONSABILIDAD
• Entrehilos Atelier tratará las prendas con el máximo cuidado y profesionalidad.
• En caso de daño a la prenda por negligencia del taller, se indemnizará al cliente por el valor razonable de la prenda.

8. LEGISLACIÓN APLICABLE
Los presentes términos se rigen por la legislación española vigente.`,
  },
};

function LegalModal({ type, onClose }: { type: ModalType; onClose: () => void }) {
  if (!type) return null;
  const modal = MODALS[type];
  return (
    <div className="fixed inset-0 z-[60] bg-black/70 flex items-start justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div
        className="bg-background rounded-2xl max-w-2xl w-full my-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            {modal.titulo}
          </h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={22} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto" style={{ maxHeight: "70vh" }}>
          <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            {modal.contenido}
          </div>
        </div>
        <div className="p-6 border-t border-border">
          <button onClick={onClose} className="btn-primary w-full justify-center">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [modal, setModal] = useState<ModalType>(null);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-foreground text-white" style={{ backgroundColor: "oklch(0.28 0.012 55)" }}>
        {/* Main footer */}
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <img src={LOGO_URL} alt="Entrehilos Atelier" className="h-16 w-auto mb-4 brightness-0 invert" />
              <p className="text-white/60 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Taller artesanal de costura y arreglos de ropa por encargo. Cada prenda merece el mejor cuidado.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm py-2 px-4"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Navegación
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Inicio", href: "#inicio" },
                  { label: "Arreglos y precios", href: "#arreglos" },
                  { label: "Confección", href: "#confeccion" },
                  { label: "Galería", href: "#galeria" },
                  { label: "Testimonios", href: "#testimonios" },
                  { label: "Blog", href: "#blog" },
                  { label: "Contacto", href: "#contacto" },
                ].map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Servicios
              </h4>
              <ul className="space-y-2.5 text-sm text-white/60" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                <li>Arreglos de pantalones</li>
                <li>Arreglos de vestidos</li>
                <li>Arreglos de chaquetas</li>
                <li>Confección a medida</li>
                <li>Vestidos de novia</li>
                <li>Ropa infantil</li>
                <li>Reparaciones</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Contacto
              </h4>
              <ul className="space-y-3 text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                <li>
                  <a href="tel:+34613175658" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    📞 +34 613 175 658
                  </a>
                </li>
                <li>
                  <a href="mailto:entrehilosatelier78@gmail.com" className="text-white/60 hover:text-white transition-colors break-all">
                    ✉️ entrehilosatelier78@gmail.com
                  </a>
                </li>
                <li className="text-white/60">
                  🕐 Lun–Vie: 9:00–19:00
                </li>
                <li className="text-white/60">
                  🕐 Sáb: 10:00–14:00
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              © {new Date().getFullYear()} Entrehilos Atelier. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {[
                { label: "Aviso Legal", type: "aviso" as ModalType },
                { label: "Política de Privacidad", type: "privacidad" as ModalType },
                { label: "Política de Cookies", type: "cookies" as ModalType },
                { label: "Términos y Condiciones", type: "terminos" as ModalType },
              ].map((item) => (
                <button
                  key={item.type}
                  onClick={() => setModal(item.type)}
                  className="text-white/40 hover:text-white/80 text-xs transition-colors underline"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <LegalModal type={modal} onClose={() => setModal(null)} />
    </>
  );
}
