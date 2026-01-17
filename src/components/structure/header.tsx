import { useEffect, useState } from "preact/hooks";
import logo from "@/assets/nexo-logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      class={`fixed w-full z-50 transition-all duration-300 bg-white border-b border-slate-100 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div class="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <a
          href="/"
          class="flex items-center gap-4 rounded-xl"
          aria-label="Ir al inicio"
        >
          <img src={logo.src} alt="Logo Nexo Digital" class="w-10" />
          <span class="text-3xl font-bold tracking-tight text-[#0f172b]">
            Nexo <span class="text-blue-600">Digital</span>
          </span>
        </a>

        {/* Desktop menu */}
        <div class="hidden sm:flex items-center gap-2">
          <a
            href="/proyectos"
            class="group relative rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
          >
            Trabajos
            <span class="absolute left-3 right-3 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-blue-600 transition-transform duration-200 group-hover:scale-x-100" />
          </a>

          <a
            href="/form"
            class="group relative rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
          >
            Cotiza tu proyecto
            <span class="absolute left-3 right-3 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-blue-600 transition-transform duration-200 group-hover:scale-x-100" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          class="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <div class="flex flex-col gap-1">
            <span
              class={`block h-0.5 w-5 bg-slate-700 transition ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              class={`block h-0.5 w-5 bg-slate-700 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              class={`block h-0.5 w-5 bg-slate-700 transition ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu – clásico */}
      <div
        class={`sm:hidden transition-all duration-200 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div class="px-6 pb-4">
          <div
            class={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-200 ${
              open ? "max-h-64 translate-y-0" : "max-h-0 -translate-y-1"
            }`}
          >
            <ul class="flex flex-col divide-y divide-slate-100">
              <li>
                <a
                  href="/proyectos"
                  class="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  Trabajos
                </a>
              </li>

              <li>
                <a
                  href="/form"
                  class="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  Cotiza tu proyecto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
