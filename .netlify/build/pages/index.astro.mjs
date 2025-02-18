/* empty css                                 */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, h as createAstro, i as renderComponent, g as addAttribute, j as renderScript, k as renderHead, l as renderSlot } from '../chunks/astro/server_C63z-dpQ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$6 = createAstro();
const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Text;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="text-lg text-gray-700 max-w-3x1 mx-auto text-center"> ${text} </p>`;
}, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/components/Text.astro", undefined);

const $$Astro$5 = createAstro();
const $$Title2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Title2;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="text-3xl font-bold text-center mb-8">${title}</h2>`;
}, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/components/Title2.astro", undefined);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-20 animate-fade-left"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result, "Title2", $$Title2, { "title": "Sobre m\xED" })} ${renderComponent($$result, "Text", $$Text, { "text": "Amplio conocimiento de an\xE1lisis de datos, soluciones pertinentes a problemas en el contexto social con base en s\xF3lidos conocimientos en arquitectura y desarrollo de software y bases de datos. Habilidades de liderazgo para integrar y asesorar equipos de desarrollo de soluciones en el \xE1mbito de las tecnolog\xEDas de la informaci\xF3n y las comunicaciones aplicando est\xE1ndares y metodolog\xEDas internacionales." })} </div> </section>`;
}, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/layouts/AboutMe.astro", undefined);

const $$Astro$4 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const { size = "md", text = "", icon = "", url = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(`flex items-center justify-center font-semibold rounded-lg bg-white text-black hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-200 ease-in-out ${size === "lg" ? "text-lg px-6 py-3" : "text-sm px-4 py-2"}`, "class")}> ${icon && renderTemplate`<i${addAttribute(icon, "data-lucide")} class="w-5 h-5 mr-2"></i>`} <span>${text}</span> </a> ${renderScript($$result, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/components/Button.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/components/Button.astro", undefined);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-20 bg-gray-100 animate-fade-left"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result, "Title2", $$Title2, { "title": "Contactos" })} <div class="flex justify-center space-x-6"> ${renderComponent($$result, "Button", $$Button, { "url": "mailto:danieldelahozpautt@gmail.com", "size": "md", "text": "Email", "icon": "mail" })} ${renderComponent($$result, "Button", $$Button, { "url": "https://www.linkedin.com/in/daniel-de-la-hoz-5344761aa/", "size": "md", "text": "Linkedin", "icon": "linkedin" })} ${renderComponent($$result, "Button", $$Button, { "url": "https://github.com/danieldelahoz2212", "size": "md", "text": "GitHub", "icon": "github" })} </div> </div> </section>`;
}, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/layouts/Contact.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-800 text-white py-8 border-t-2 border-white animate-fade-left"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center"> <p>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Daniel De La Hoz Pautt. Todos los derechos
      reservados
</p> </div> </footer>`;
}, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/layouts/Footer.astro", undefined);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/layouts/Layout.astro", undefined);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white bg-opacity-65 fixed top-0 w-full z-20 start-0 border-b border-black-600 backdrop-blur-md animate-fade-up"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="http://localhost:4321/" class="flex items-center space-x-3 rtl:space-x-reverse"> <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">
Daniel De La Hoz Pautt
</span> </a> <div class="flex md:order-2 space-x-3 rtl:space-x-reverse"> <a href="https://drive.google.com/file/d/1b-Gg8aQR88CxLYXII9cD-UHQMALGYm99/view?usp=sharing" target="_blank" class="hidden lg:block bg-black text-white focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-4 py-2 text-center">
Descargar CV
</a> <button id="menu-button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="menu-open" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div id="menu-open" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 navbar" id="navbar-sticky"> <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"> <li> <a href="#about" class="btn block py-2 px-3 text-black rounded md:bg-transparent md:p-0 hover:text-blue-300">
Sobre mí
</a> </li> <li> <a href="#projects" class="btn block py-2 px-3 text-black rounded md:bg-transparent md:p-0 hover:text-blue-300">
Proyectos
</a> </li> <li> <a href="#skills" class="btn block py-2 px-3 text-black rounded md:bg-transparent md:p-0 hover:text-blue-300">
Habilidades
</a> </li> </ul> </div> </div> </nav> ${renderScript($$result, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/layouts/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/layouts/Navbar.astro", undefined);

const $$Perfil = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="pt-20"> <section id="perfil" class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 animate-fade-left"> <div class="container px-4 sm:px-6 lg:px-8"> <div class="flex flex-col md:flex-row items-center justify-between"> <div class="md:w-1/2 mb-8 md:mb-0"> <h1 class="text-4xl md:text-5xl font-bold mb-4">
Daniel De La Hoz Pautt
</h1> <p class="text-xl mb-6">Ingeniero De Sistemas</p> <a href="#contact" class="bg-white text-black font-semibold rounded-lg text-lg px-6 py-3 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-200 ease-in-out">
Contáctame
</a> </div> <div class="md:w-1/2 flex justify-center"> <img src="./photos/20221221_104711.jpg" alt="Tu foto"${addAttribute(350, "width")}${addAttribute(500, "height")} class="rounded-full border-4 border-white shadow-lg animate-wiggle animate-infinite"> </div> </div> </div> </section> </main>`;
}, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/layouts/Perfil.astro", undefined);

const $$Astro$2 = createAstro();
const $$Cards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Cards;
  const { projects } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6"> ${projects.map((project) => renderTemplate`<div class="bg-white rounded-lg shadow-lg border p-6 hover:shadow-xl transition-shadow duration-300"> <div class="mb-4"> <h3 class="text-xl font-bold text-gray-800">${project.title}</h3> <p class="text-gray-600">${project.description}</p> </div> <div class="mb-4"> <img${addAttribute(project.image, "src")}${addAttribute(`Imagen del proyecto ${project.title}`, "alt")} class="rounded-md w-full h-48 object-cover mb-4"> </div> <div class="flex justify-between items-center"> <a${addAttribute(project.moreInfoLink, "href")} class="bg-black text-white font-semibold rounded-lg text-lg px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-200 ease-in-out">
Ver más
</a> <a class="bg-black text-white font-semibold rounded-lg text-lg px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-200 ease-in-out"> ${project.icon && renderTemplate`<i${addAttribute(project.icon, "data-lucide")} class=" h-6"></i>`} </a> </div> </div>`)} </div>`;
}, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/components/Cards.astro", undefined);

const $$Project = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      id: 1,
      icon: "github",
      title: "Proyecto 1",
      description: "Este es el primer proyecto",
      image: "https://picsum.photos/200/200",
      githubLink: "https://github.com/usuario/proyecto1",
      moreInfoLink: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="py-20 bg-gray-100 animate-fade-left"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result, "Title2", $$Title2, { "title": "Mis Proyectos" })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${renderComponent($$result, "Cards", $$Cards, { "projects": projects })} </div> </div> </section>`;
}, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/layouts/Project.astro", undefined);

const $$Astro$1 = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Badge;
  const { variant = "default", className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`inline-block rounded-full px-4 py-2 text-sm font-semibold ${className} ${variant === "secondary" ? "bg-gray-200 text-gray-800" : "bg-blue-500 text-white"}`, "class")}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/components/Badge.astro", undefined);

const $$Astro = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skills;
  const skills = [
    "Java",
    "JavaScript",
    "C#",
    "Python",
    "React",
    "Nest.js",
    "Node.js",
    "Astro",
    "Flutter",
    "Firebase",
    "MongoDB",
    "MySQL",
    "SQL",
    "MariaDB"
  ];
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="py-20 animate-fade-left"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result, "Title2", $$Title2, { "title": "Mis Habilidades" })} <div class="flex flex-wrap justify-center gap-4 mt-8"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": "secondary", "className": "text-lg" }, { "default": ($$result2) => renderTemplate`${skill}` })}`)} </div> </div> </section>`;
}, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/layouts/Skills.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Perfil", $$Perfil, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "AboutMe", $$AboutMe, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Project", $$Project, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/proyectosDesarrollo/astro/portafolio_oficial/src/pages/index.astro", undefined);

const $$file = "C:/proyectosDesarrollo/astro/portafolio_oficial/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
