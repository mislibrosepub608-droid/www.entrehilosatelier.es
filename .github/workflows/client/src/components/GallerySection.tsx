/* ============================================================
   GallerySection — Entrehilos Atelier
   Galería de fotos de trabajos realizados
   Style: Taller Mediterráneo — masonry-style grid
   ============================================================ */
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const ALTERATIONS_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/wzk0ByA2Rv0nQM10tchTZS/sandbox/KKLU5pDJ4cVRwLZSN3ppZC-img-2_1772036756000_na1fn_YWx0ZXJhdGlvbnMtd29yaw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd3prMEJ5QTJSdjBuUU0xMHRjaFRaUy9zYW5kYm94L0tLTFU1cERKNGNWUndMWlNOM3BwWkMtaW1nLTJfMTc3MjAzNjc1NjAwMF9uYTFmbl9ZV3gwWlhKaGRHbHZibk10ZDI5eWF3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PezJOzZnLDlIlbK5K0Fg7slQNTvJx16MJNoo9WCMabZ-8pMu-szHtcnOABAvHZDRs~M53wvceBsdg21xe1bk1ZxT-KH5DvsltXlx~z9MK-R~wHj7-AsjNH4OEKM~RHdydoCuJ1hfK3jqjlS3jKc57CSQBja0KwuPWc6etZkrZVpC2DHgzhg8FPAqZt6L36gzRHxv-0smIzKYLCb5JiALVi87pM-kLk9WTZgNL9aijXiq1fd3vsoq6UdzD5lLCsdyd3uNsrAbr2-fwlIH9jjHsoDAm1ygey-XSoZFB6picVtIAKWm7ypN8NV9CuULwguzB5Suy0w~v5sEkFkmnUdIHA__";
const DRESS_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/wzk0ByA2Rv0nQM10tchTZS/sandbox/KKLU5pDJ4cVRwLZSN3ppZC-img-3_1772036739000_na1fn_Y3VzdG9tLWRyZXNz.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd3prMEJ5QTJSdjBuUU0xMHRjaFRaUy9zYW5kYm94L0tLTFU1cERKNGNWUndMWlNOM3BwWkMtaW1nLTNfMTc3MjAzNjczOTAwMF9uYTFmbl9ZM1Z6ZEc5dExXUnlaWE56LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ngHuLxaNl1EpUK1OVg3ErUoJQcovkbj8ENPvlTw5PHkGoRIwA5AQ~NtdIaxuvq356kF-ML5FfvUcM9D-BDz9E2FIJGeJMekVNy0GnUkede9U~OVJDQLu194Rl9ley4X97Dh1Qu0T6tRQeljV794UQdk-hsa5-~MtsFag1cNzgVDrH4xpAN5s79sffVq-JDcXqVUUuliZDEouT~Qgz3sFPmV2tV4u0TNnOJnHvpP0q6Ryowq6whS4esA2aoStamdzYosYvCb0gjnreAwZ5CbPEA9kzwQIUYW4OISkBfwek65uDP7vdJExf8v2NiRaSA4JozlrvrO~3ICrniZ11cZJdA__";
const FABRIC_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/wzk0ByA2Rv0nQM10tchTZS/sandbox/KKLU5pDJ4cVRwLZSN3ppZC-img-4_1772036741000_na1fn_ZmFicmljLWRldGFpbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd3prMEJ5QTJSdjBuUU0xMHRjaFRaUy9zYW5kYm94L0tLTFU1cERKNGNWUndMWlNOM3BwWkMtaW1nLTRfMTc3MjAzNjc0MTAwMF9uYTFmbl9abUZpY21sakxXUmxkR0ZwYkEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RtA937bRll4fgtk3iIlrEa2EzsbtDfQbu3fk-KHPhm6qnZGoNdq3UGDSE5aHI884dlmGfOXsfyGMyw9v8PYammtghrrDXPv9jsPCh7hxcibA~Ty8oa4PABRqxUzxu6h2lL5zLcWNqz0peElXkuKlHBHuqp9iKLrXXyGOyd8zAOncfgDVOx0hSOsZWbsIfTYsapRwHftXb6QhxMPMDwh~idsW~2vVfkXomWyNyftUadUwrigeSFFTqpv-vwn6nmHwk7riUnzCJXy1OKpzmPBrHgdsueRDZMAMDMN2v2RoX~~ZmlUUDzHNpPr64REK~Gl6375QaFT9FeVi0hDFjhlMvA__";
const BLOG_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/wzk0ByA2Rv0nQM10tchTZS/sandbox/KKLU5pDJ4cVRwLZSN3ppZC-img-5_1772036747000_na1fn_YmxvZy1zZXdpbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd3prMEJ5QTJSdjBuUU0xMHRjaFRaUy9zYW5kYm94L0tLTFU1cERKNGNWUndMWlNOM3BwWkMtaW1nLTVfMTc3MjAzNjc0NzAwMF9uYTFmbl9ZbXh2WnkxelpYZHBibWMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jwLpwPpcsPQrZO1JFanFZ5sB0Ag3FBgPknunlOInfySFyxCwYS8ZBiWgpIwyJjOBvOd1h12PCJ4Dz18kh1SR9TJFliULId1A77J88x8Lji~SdWP3YVb9jFWrNqeoMVqcysNypPKZN38tx2njDpGiq6kUwpl0PKQyhktKx1Ehlz04TSOyubZuMMJgF8psAuvtOp-AKtHYrwm6NmbZulY19SIwx39D6wJC0daVocUjDlSPqbAVulQhTEXamw7kH-YQY7A-~Y~l-0wDDQHZQEViyeFIzxZErvaZKcPfiiOv8ad2Pi4ZkIOsX7bi8JLNiJkGOO5Ie1etjH1U-smdZ2Ov-Q__";

const galleryItems = [
  { id: 1, src: ALTERATIONS_IMG, title: "Arreglo de bajo", cat: "Arreglos", aspect: "landscape" },
  { id: 2, src: DRESS_IMG, title: "Vestido a medida en lino", cat: "Confección", aspect: "portrait" },
  { id: 3, src: FABRIC_IMG, title: "Selección de telas", cat: "Materiales", aspect: "square" },
  { id: 4, src: BLOG_IMG, title: "Nuestro taller", cat: "Atelier", aspect: "landscape" },
  { id: 5, src: ALTERATIONS_IMG, title: "Costura a mano", cat: "Arreglos", aspect: "square" },
  { id: 6, src: DRESS_IMG, title: "Confección de falda", cat: "Confección", aspect: "portrait" },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="galeria" className="py-20 bg-cream-dark">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-12 fade-in-up">
          <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Nuestro trabajo
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Galería de Arreglos
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg mt-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Cada prenda tiene su historia. Aquí mostramos algunos de los trabajos que hemos realizado con cariño y precisión.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className="fade-in-up break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer shadow-sm hover:shadow-lg transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => setSelected(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ aspectRatio: item.aspect === "portrait" ? "3/4" : item.aspect === "square" ? "1/1" : "16/9" }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</p>
                <p className="text-white/70 text-xs mt-0.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{item.cat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selected.src}
              alt={selected.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="mt-3 text-center">
              <p className="text-white font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>{selected.title}</p>
              <p className="text-white/60 text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{selected.cat}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
