export type Solution = {
  title: string;
  benefit: string;
  description: string;
  icon: "Zap" | "BarChart3" | "ShieldCheck";
  iconStyle:string;
};
export type Step = {
  step: "1" | "2" | "3" | "4";
  title: string;
  desc: string;
  icon: "MessageSquare" | "Layers" | "Zap" | "Rocket";
};


export const solutions: Solution[] = [
  {
    title: "Vende 24/7 sin fronteras",
    benefit: "Tu negocio siempre abierto",
    description:
      "Creamos plataformas de venta online que no solo se ven bien, sino que están diseñadas para convertir visitas en clientes reales.",
    icon: "Zap",
    iconStyle:"w-6 h-6 text-yellow-500"
  },
  {
    title: "Automatiza tu desorden",
    benefit: "Recupera tu tiempo",
    description:
      "Sustituimos tus excels infinitos por sistemas que gestionan tus inventarios, clientes y pedidos de forma automática.",
    icon: "BarChart3",
    iconStyle:"w-6 h-6 text-green-500"
  },
  {
    title: "Presencia Profesional",
    benefit: "Genera confianza inmediata",
    description:
      "Una imagen digital sólida que te posiciona como líder en tu sector frente a tu competencia.",
    icon: "ShieldCheck",
    iconStyle:"w-6 h-6 text-blue-500"
  },
];



export const steps: Step[] = [
  {
    step: "1",
    title: "Charla Inicial",
    desc: "Entiendo tu negocio y tus cuellos de botella.",
    icon: "MessageSquare",
  },
  {
    step: "2",
    title: "Propuesta",
    desc: "Diseño la solución técnica que mejor se adapta a tu presupuesto.",
    icon: "Layers",
  },
  {
    step: "3",
    title: "Desarrollo",
    desc: "Construyo tu sistema mientras ves los avances en tiempo real.",
    icon: "Zap",
  },
  {
    step: "4",
    title: "Lanzamiento",
    desc: "Pongo todo en marcha y te enseño a usarlo.",
    icon: "Rocket",
  },
];


export const proyects = [

  {
    id:1,
    name: "Restaurante Taco Express",
    problem:"Pedidos por WhatsApp gestionados manualmente, generando retrasos y errores.",
    solution: "Sistema de pedidos que genera órdenes automáticas de WhatsApp desde un menú digital.",
    link:"/proyectos/tacoExpress",
    img:""
    
    
  },
  {
    id:1,
    name: "Restaurante Taco Express",
    problem:"Los pedidos llegaban por WhatsApp, pero se procesaban manualmente, provocando retrasos, confusión en las órdenes y pérdida de tiempo operativo.",
    solution: "Se implementó un sistema de pedidos digital que convierte la selección del cliente en un mensaje automático y estructurado de WhatsApp, agilizando la atención y reduciendo errores operativos en Taco Express.",
    link:"/taco-express",
    img:""
    
    
  },
  {
    id:1,
    name: "Restaurante Taco Express",
    problem:"Los pedidos llegaban por WhatsApp, pero se procesaban manualmente, provocando retrasos, confusión en las órdenes y pérdida de tiempo operativo.",
    solution: "Se implementó un sistema de pedidos digital que convierte la selección del cliente en un mensaje automático y estructurado de WhatsApp, agilizando la atención y reduciendo errores operativos en Taco Express.",
    link:"/taco-express",
    img:""
    
    
  },
  {
    id:1,
    name: "Restaurante Taco Express",
    problem:"Los pedidos llegaban por WhatsApp, pero se procesaban manualmente, provocando retrasos, confusión en las órdenes y pérdida de tiempo operativo.",
    solution: "Se implementó un sistema de pedidos digital que convierte la selección del cliente en un mensaje automático y estructurado de WhatsApp, agilizando la atención y reduciendo errores operativos en Taco Express.",
    link:"/taco-express",
    img:""
    
    
  },
  {
    id:1,
    name: "Restaurante Taco Express",
    problem:"Los pedidos llegaban por WhatsApp, pero se procesaban manualmente, provocando retrasos, confusión en las órdenes y pérdida de tiempo operativo.",
    solution: "Se implementó un sistema de pedidos digital que convierte la selección del cliente en un mensaje automático y estructurado de WhatsApp, agilizando la atención y reduciendo errores operativos en Taco Express.",
    link:"",
    img:""
    
    
  },
  
  

]