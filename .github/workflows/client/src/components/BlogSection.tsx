/* ============================================================
   BlogSection — Entrehilos Atelier
   Blog con artículos sobre costura, moda y cuidado de ropa
   Style: Taller Mediterráneo — editorial cards
   ============================================================ */
import { useState } from "react";
import { ArrowRight, X, Calendar, Clock } from "lucide-react";

const BLOG_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/wzk0ByA2Rv0nQM10tchTZS/sandbox/KKLU5pDJ4cVRwLZSN3ppZC-img-5_1772036747000_na1fn_YmxvZy1zZXdpbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd3prMEJ5QTJSdjBuUU0xMHRjaFRaUy9zYW5kYm94L0tLTFU1cERKNGNWUndMWlNOM3BwWkMtaW1nLTVfMTc3MjAzNjc0NzAwMF9uYTFmbl9ZbXh2WnkxelpYZHBibWMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jwLpwPpcsPQrZO1JFanFZ5sB0Ag3FBgPknunlOInfySFyxCwYS8ZBiWgpIwyJjOBvOd1h12PCJ4Dz18kh1SR9TJFliULId1A77J88x8Lji~SdWP3YVb9jFWrNqeoMVqcysNypPKZN38tx2njDpGiq6kUwpl0PKQyhktKx1Ehlz04TSOyubZuMMJgF8psAuvtOp-AKtHYrwm6NmbZulY19SIwx39D6wJC0daVocUjDlSPqbAVulQhTEXamw7kH-YQY7A-~Y~l-0wDDQHZQEViyeFIzxZErvaZKcPfiiOv8ad2Pi4ZkIOsX7bi8JLNiJkGOO5Ie1etjH1U-smdZ2Ov-Q__";
const FABRIC_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/wzk0ByA2Rv0nQM10tchTZS/sandbox/KKLU5pDJ4cVRwLZSN3ppZC-img-4_1772036741000_na1fn_ZmFicmljLWRldGFpbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd3prMEJ5QTJSdjBuUU0xMHRjaFRaUy9zYW5kYm94L0tLTFU1cERKNGNWUndMWlNOM3BwWkMtaW1nLTRfMTc3MjAzNjc0MTAwMF9uYTFmbl9abUZpY21sakxXUmxkR0ZwYkEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RtA937bRll4fgtk3iIlrEa2EzsbtDfQbu3fk-KHPhm6qnZGoNdq3UGDSE5aHI884dlmGfOXsfyGMyw9v8PYammtghrrDXPv9jsPCh7hxcibA~Ty8oa4PABRqxUzxu6h2lL5zLcWNqz0peElXkuKlHBHuqp9iKLrXXyGOyd8zAOncfgDVOx0hSOsZWbsIfTYsapRwHftXb6QhxMPMDwh~idsW~2vVfkXomWyNyftUadUwrigeSFFTqpv-vwn6nmHwk7riUnzCJXy1OKpzmPBrHgdsueRDZMAMDMN2v2RoX~~ZmlUUDzHNpPr64REK~Gl6375QaFT9FeVi0hDFjhlMvA__";
const ALTERATIONS_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/wzk0ByA2Rv0nQM10tchTZS/sandbox/KKLU5pDJ4cVRwLZSN3ppZC-img-2_1772036756000_na1fn_YWx0ZXJhdGlvbnMtd29yaw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd3prMEJ5QTJSdjBuUU0xMHRjaFRaUy9zYW5kYm94L0tLTFU1cERKNGNWUndMWlNOM3BwWkMtaW1nLTJfMTc3MjAzNjc1NjAwMF9uYTFmbl9ZV3gwWlhKaGRHbHZibk10ZDI5eWF3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PezJOzZnLDlIlbK5K0Fg7slQNTvJx16MJNoo9WCMabZ-8pMu-szHtcnOABAvHZDRs~M53wvceBsdg21xe1bk1ZxT-KH5DvsltXlx~z9MK-R~wHj7-AsjNH4OEKM~RHdydoCuJ1hfK3jqjlS3jKc57CSQBja0KwuPWc6etZkrZVpC2DHgzhg8FPAqZt6L36gzRHxv-0smIzKYLCb5JiALVi87pM-kLk9WTZgNL9aijXiq1fd3vsoq6UdzD5lLCsdyd3uNsrAbr2-fwlIH9jjHsoDAm1ygey-XSoZFB6picVtIAKWm7ypN8NV9CuULwguzB5Suy0w~v5sEkFkmnUdIHA__";

const posts = [
  {
    id: 1,
    titulo: "5 señales de que tu ropa necesita un arreglo profesional",
    extracto: "Muchas veces guardamos prendas que nos encantan pero que ya no nos sientan bien. Aprende a identificar cuándo un arreglo puede devolverle la vida a tu ropa favorita.",
    imagen: BLOG_IMG,
    categoria: "Consejos",
    fecha: "15 febrero 2026",
    lectura: "4 min",
    contenido: `¿Tienes prendas en el armario que no te pones porque no te sientan bien? Antes de donarlas o tirarlas, considera llevarlas a un taller de costura. Aquí te explicamos las 5 señales más claras de que tu ropa necesita un arreglo profesional:

**1. El bajo arrastra por el suelo**
Si el pantalón o la falda te queda demasiado largo, un arreglo de bajo es rápido, económico y transforma completamente la prenda.

**2. La cintura queda grande o pequeña**
El cuerpo cambia con el tiempo. Si la cintura de tus pantalones ya no se ajusta bien, un sastre puede entrarla o ensancharla sin que se note.

**3. Las mangas son demasiado largas**
Las mangas de las chaquetas y camisas se pueden acortar con facilidad. Es uno de los arreglos más comunes y que más diferencia hace en el aspecto final.

**4. La cremallera está rota**
Una cremallera rota no significa que la prenda esté perdida. Cambiarla es un arreglo sencillo que puede salvar tu prenda favorita.

**5. Las costuras se han descosido**
Las costuras abiertas son fáciles de reparar si se atienden a tiempo. No esperes a que el problema sea mayor.

En Entrehilos Atelier te ayudamos con todos estos arreglos y muchos más. ¡Consúltanos sin compromiso!`,
  },
  {
    id: 2,
    titulo: "Cómo elegir la tela perfecta para tu falda a medida",
    extracto: "La elección de la tela es fundamental para que tu prenda quede perfecta. Te guiamos por los tejidos más populares, sus características y para qué ocasiones son ideales.",
    imagen: FABRIC_IMG,
    categoria: "Guías",
    fecha: "8 febrero 2026",
    lectura: "6 min",
    contenido: `Cuando decides encargar una falda a medida, una de las decisiones más importantes es la elección de la tela. Cada tejido tiene sus propias características y es más adecuado para determinadas ocasiones y estilos.

**Lino: natural y fresco**
El lino es perfecto para el verano. Es transpirable, fresco y tiene una caída natural muy elegante. Ideal para faldas midi o maxi de uso diario. Eso sí, arruga con facilidad, lo que para muchos es parte de su encanto.

**Algodón: versátil y cómodo**
El algodón es el tejido más versátil. Admite todo tipo de diseños, es fácil de lavar y muy cómodo. Perfecto para faldas de uso cotidiano en cualquier estación.

**Seda y satén: para ocasiones especiales**
Si buscas una falda para una boda o evento especial, la seda y el satén son tus aliados. Tienen una caída espectacular y un brillo elegante. Requieren más cuidado en el lavado.

**Lana: calidez en otoño-invierno**
Para los meses fríos, la lana es insuperable. Abriga, tiene una caída elegante y es muy duradera. Perfecta para faldas de tubo o plisadas.

**Tejidos elásticos: comodidad y ajuste**
Los tejidos con lycra o elastán se ajustan perfectamente al cuerpo y son muy cómodos. Ideales para faldas de uso diario que requieran libertad de movimiento.

En Entrehilos Atelier te asesoramos sobre qué tela es la más adecuada para tu proyecto. ¡Visítanos o consúltanos!`,
  },
  {
    id: 3,
    titulo: "Moda sostenible: por qué arreglar es mejor que comprar",
    extracto: "La industria de la moda es una de las más contaminantes del mundo. Arreglar y reutilizar la ropa es un acto de responsabilidad ambiental y también de ahorro económico.",
    imagen: ALTERATIONS_IMG,
    categoria: "Sostenibilidad",
    fecha: "1 febrero 2026",
    lectura: "5 min",
    contenido: `La industria de la moda es responsable del 10% de las emisiones globales de CO₂ y del 20% de la contaminación del agua dulce mundial. Frente a este panorama, arreglar y reutilizar la ropa es una de las acciones más impactantes que podemos tomar como consumidores.

**El coste real de la ropa nueva**
Cuando compramos una prenda nueva, no solo pagamos su precio en la tienda. También contribuimos al coste ambiental de su producción: agua, energía, transporte y, en muchos casos, condiciones laborales cuestionables.

**Arreglar es más económico**
Subir el bajo de un pantalón cuesta entre 8 y 12 euros. Comprar un pantalón nuevo puede costar 50, 100 o más. La diferencia es clara: arreglar es más económico y más sostenible.

**La calidad de las prendas antiguas**
Muchas prendas antiguas están hechas con tejidos de mejor calidad que los actuales. Arreglarlas y adaptarlas a nuestro estilo actual es una forma de aprovechar esa calidad.

**El valor sentimental**
Algunas prendas tienen un valor sentimental incalculable: el vestido de tu abuela, la chaqueta de tu primera entrevista de trabajo. Arreglarlas es una forma de preservar esos recuerdos.

En Entrehilos Atelier creemos en la moda sostenible y en el valor de las prendas bien hechas. Cada arreglo que realizamos es un pequeño acto de resistencia frente a la moda rápida.`,
  },
];

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <section id="blog" className="py-20 bg-cream-dark">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-12 fade-in-up">
          <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Nuestro blog
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Consejos y Tendencias
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg mt-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Artículos sobre costura, cuidado de la ropa, moda sostenible y consejos de nuestras artesanas.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className="fade-in-up bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setSelectedPost(post)}
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={post.imagen}
                  alt={post.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: "oklch(0.62 0.10 42 / 0.1)", color: "oklch(0.62 0.10 42)", fontFamily: "'Source Sans 3', sans-serif" }}>
                    {post.categoria}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {post.titulo}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {post.extracto}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    <span className="flex items-center gap-1"><Calendar size={11} />{post.fecha}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.lectura}</span>
                  </div>
                  <span className="text-terracotta text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    Leer <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Post modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center p-4 overflow-y-auto" onClick={() => setSelectedPost(null)}>
          <div
            className="bg-background rounded-2xl max-w-2xl w-full my-8 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <img src={selectedPost.imagen} alt={selectedPost.titulo} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-8">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: "oklch(0.62 0.10 42 / 0.1)", color: "oklch(0.62 0.10 42)", fontFamily: "'Source Sans 3', sans-serif" }}>
                {selectedPost.categoria}
              </span>
              <h2 className="text-2xl font-bold text-foreground mt-4 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {selectedPost.titulo}
              </h2>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                <span className="flex items-center gap-1"><Calendar size={11} />{selectedPost.fecha}</span>
                <span className="flex items-center gap-1"><Clock size={11} />{selectedPost.lectura} de lectura</span>
              </div>
              <div className="prose prose-sm max-w-none text-foreground/80 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                {selectedPost.contenido.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-4">
                    {para.split("**").map((part, j) =>
                      j % 2 === 1 ? <strong key={j} className="text-foreground font-semibold">{part}</strong> : part
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
