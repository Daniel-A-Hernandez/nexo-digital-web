import { useEffect, useState } from "preact/hooks";


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
      if (window.innerWidth >= 640) setOpen(false); // cierra al pasar a desktop
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      class={`fixed w-full z-50 transition-all duration-300  ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div class="max-w-6xl mx-auto px-6 flex justify-between items-center py-5">
        <span class="flex flex-row gap-4 items-center">
          <img src="/src/assets/nexo-logo.png" alt="" class="w-10" />
        <h1 class="text-3xl font-bold tracking-tight text-[#0f172b]">Nexo <span class=" text-blue-600">Digital</span></h1>
        </span>
        

        {/* Desktop */}
        <div class="hidden sm:flex items-center gap-6">
          <a href="#proceso" class="text-sm font-medium text-slate-600 hover:text-blue-600">
            ¿Cómo trabajo?
          </a>
           <a href="/" class="text-xl font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase">Inicio</a>
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-md">
            Cotizar Presupuesto
          </button>
        </div>

        {/* Mobile button */}
        <button
          class="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 bg-white/70 backdrop-blur hover:bg-white"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {/* icono simple */}
          <div class="flex flex-col gap-1">
            <span class={`block h-0.5 w-5 bg-slate-700 transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span class={`block h-0.5 w-5 bg-slate-700 transition ${open ? "opacity-0" : ""}`} />
            <span class={`block h-0.5 w-5 bg-slate-700 transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div class={`sm:hidden px-6 transition-all duration-200 ${open ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div class="mt-3 rounded-2xl bg-white/90 backdrop-blur border border-slate-200 p-3 flex flex-col gap-2">
          <a
            href="#proceso"
            class="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            onClick={() => setOpen(false)}
          >
            ¿Cómo trabajo?
          </a>
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-md">
            Solicitar Presupuesto
          </button>
        </div>
      </div>
    </nav>
  );
}
