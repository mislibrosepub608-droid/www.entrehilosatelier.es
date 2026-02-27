/* ============================================================
   CookieBanner — Entrehilos Atelier
   Banner de consentimiento de cookies RGPD
   Style: Taller Mediterráneo
   ============================================================ */
import { useState, useEffect } from "react";
import { Cookie, X, Settings } from "lucide-react";

const COOKIE_KEY = "entrehilos_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necesarias: true,
    analiticas: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ necesarias: true, analiticas: true, marketing: true, date: new Date().toISOString() }));
    setVisible(false);
  };

  const acceptSelected = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ ...preferences, date: new Date().toISOString() }));
    setVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ necesarias: true, analiticas: false, marketing: false, date: new Date().toISOString() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
        {/* Main banner */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.62 0.10 42 / 0.1)" }}>
              <Cookie className="text-terracotta" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-foreground mb-1.5" style={{ fontFamily: "'Playfair Display', serif" }}>
                Usamos cookies
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar el contenido.
                Puedes aceptar todas, rechazarlas o configurar tus preferencias.{" "}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-terracotta underline hover:no-underline"
                >
                  Más información
                </button>
              </p>

              {/* Details */}
              {showDetails && (
                <div className="mb-4 p-4 bg-muted rounded-lg space-y-3">
                  {[
                    {
                      key: "necesarias" as const,
                      label: "Cookies necesarias",
                      desc: "Imprescindibles para el funcionamiento del sitio. No se pueden desactivar.",
                      disabled: true,
                    },
                    {
                      key: "analiticas" as const,
                      label: "Cookies analíticas",
                      desc: "Nos ayudan a entender cómo usas el sitio web para mejorarlo.",
                      disabled: false,
                    },
                    {
                      key: "marketing" as const,
                      label: "Cookies de marketing",
                      desc: "Permiten mostrar publicidad relevante según tus intereses.",
                      disabled: false,
                    },
                  ].map((item) => (
                    <div key={item.key} className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id={item.key}
                        checked={preferences[item.key]}
                        disabled={item.disabled}
                        onChange={(e) => setPreferences((prev) => ({ ...prev, [item.key]: e.target.checked }))}
                        className="mt-0.5 w-4 h-4 accent-primary"
                      />
                      <label htmlFor={item.key} className="text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        <span className="font-semibold text-foreground">{item.label}</span>
                        {item.disabled && <span className="ml-1 text-xs text-muted-foreground">(siempre activas)</span>}
                        <br />
                        <span className="text-muted-foreground">{item.desc}</span>
                      </label>
                    </div>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-wrap gap-2">
                <button onClick={acceptAll} className="btn-primary text-sm py-2.5 px-5">
                  Aceptar todas
                </button>
                {showDetails && (
                  <button onClick={acceptSelected} className="btn-outline text-sm py-2.5 px-5">
                    Guardar selección
                  </button>
                )}
                <button
                  onClick={rejectAll}
                  className="text-sm px-4 py-2.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Solo necesarias
                </button>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-sm px-4 py-2.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-1.5"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  <Settings size={14} />
                  {showDetails ? "Ocultar" : "Configurar"}
                </button>
              </div>
            </div>
            <button
              onClick={rejectAll}
              className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
