import { useEffect, useState } from "preact/hooks";
import logo from "../../assets/nexo-logo.png";

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
      class={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo -> Home */}
        <a
          href="/"
          class="flex flex-row gap-4 items-center rounded-xl  "
          aria-label="Ir al inicio"
        >
          <img src={logo.src} alt="Logo Nexo Digital" class="w-10" />
          <span class="text-3xl font-bold tracking-tight text-[#0f172b]">
            Nexo <span class="text-blue-600">Digital</span>
          </span>
        </a>

        {/* Desktop */}
        <div class="hidden sm:flex items-center gap-2">
          <a
            href="#proceso"
            class="group relative rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors "
          >
            ¿Cómo trabajo?
            <span class="absolute left-3 right-3 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-blue-600 transition-transform duration-200 group-hover:scale-x-100" />
          </a>

          <a
            href="/proyectos"
            class="ml-2 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition
                   hover:bg-blue-700 hover:shadow-md active:translate-y-[1px]
                   "
          >
            Trabajos
          </a>
        </div>

        {/* Mobile button */}
        <button
          class="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white/70 backdrop-blur hover:bg-white transition
                 focus:outline-none focus:ring-4 focus:ring-blue-200"
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

      {/* Mobile menu */}
      <div
        class={`sm:hidden px-6 transition-all duration-200 ${
          open ? "max-h-48 opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div class="mt-3 rounded-2xl bg-white/90 backdrop-blur border border-slate-200 p-2 flex flex-col gap-1">
          <a
            href="#proceso"
            class="rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 active:bg-slate-100 transition
                   focus:outline-none focus:ring-4 focus:ring-blue-200"
            onClick={() => setOpen(false)}
          >
            ¿Cómo trabajo?
          </a>

          <a
            href="#trabajos"
            class="mt-1 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition
                   hover:bg-blue-700 hover:shadow-md active:translate-y-[1px]
                   focus:outline-none focus:ring-4 focus:ring-blue-200"
            onClick={() => setOpen(false)}
          >
            Ver trabajos
          </a>
        </div>
      </div>
    </nav>
  );
}
