module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/ambient-background.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AmbientBackground",
    ()=>AmbientBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const SHAPES = [
    {
        size: 520,
        opacity: 0.08,
        delay: 0
    },
    {
        size: 420,
        opacity: 0.07,
        delay: 4
    },
    {
        size: 360,
        opacity: 0.06,
        delay: 8
    }
];
const TONES = [
    "rgba(32, 44, 66, 0.18)",
    "rgba(132, 146, 168, 0.12)",
    "rgba(185, 153, 102, 0.14)"
];
function AmbientBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        children: SHAPES.map((shape, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute left-1/2 top-1/2 aspect-square rounded-full blur-3xl",
                style: {
                    width: shape.size,
                    backgroundColor: TONES[index % TONES.length]
                },
                initial: {
                    opacity: 0,
                    x: "-50%",
                    y: "-50%"
                },
                animate: {
                    opacity: shape.opacity
                },
                transition: {
                    duration: 4,
                    delay: shape.delay,
                    ease: "easeOut"
                }
            }, index, false, {
                fileName: "[project]/components/ambient-background.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ambient-background.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/locales/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"navigation":{"work":"Work","process":"Process","values":"Values","contact":"Contact"},"languageToggle":{"aria":"Switch language","en":"EN","es":"ES"},"hero":{"tagline":"Construction & Remodeling Studio","dual":{"en":"Building Dreams.","es":"Construyendo Sueños."},"description":"We partner with discerning clients to craft architectural spaces that balance structural integrity with soulful design.","actions":{"work":"View Our Work","contact":"Contact"},"scroll":"Scroll to explore"},"process":{"title":"Our Process","subtitle":"A transparent framework guiding every commission from insight to immaculate delivery.","stages":[{"title":"Plan","description":"We align vision, feasibility, and budget so the project begins with complete clarity.","highlights":["Site walk-throughs and structural checks","Transparent budgets and milestone schedule","Mood boards and quick 3D sketches"]},{"title":"Build","description":"Trusted supervisors coordinate trades, permits, and daily progress so every detail stays precise.","highlights":["One point of contact on site","Weekly walkthroughs and video recaps","Quality checks logged in the cloud"]},{"title":"Deliver","description":"We hand over a tuned space, train you on systems, and stay available for any adjustments.","highlights":["Detailed punch list and touch-ups","Styling, cleaning, and setup","Post-delivery support on call"]}]},"values":{"title":"Precision, Trust, Beauty","items":[{"title":"Integrated Craft","description":"Our architects, builders, and material specialists work as one atelier from concept to completion."},{"title":"Radical Transparency","description":"Real-time dashboards, weekly film logs, and open-book budgeting keep you close to the work."},{"title":"Enduring Impressions","description":"Spaces that elevate daily rituals—warm, intentional, and engineered to last generations."}]},"specialties":{"title":"Signature Specialties","description":"From structural reimagination to bespoke finishes, we orchestrate every layer of the build.","items":["Whole-home remodeling","Roofing and envelope renewal","Curated painting & plaster artistry","Luxury flooring systems","Custom millwork and cabinetry","Outdoor living architecture"]},"projects":{"title":"Featured Transformations","subtitle":"Four architectural narratives illustrating how we honor heritage while designing for tomorrow.","stageLabels":{"before":"Before","process":"Process","after":"After"},"modal":{"close":"Close project"},"items":{"ridgeResidence":{"title":"Ridge Residence Renewal","location":"Aspen, Colorado","description":"A mountainside home stripped back to its bones and reimagined as a warm alpine retreat.","services":["Structural reframing","Radiant flooring systems","Walnut millwork"],"story":{"before":"Fragmented additions and outdated finishes muted the mountain views and natural light.","process":"We opened the structure with engineered glulam beams, wrapped cores in walnut, and choreographed lighting with the terrain.","after":"An open sanctuary framed in glass and timber, inviting the landscape into every gathering space."}},"cortezLoft":{"title":"Cortez Creative Loft","location":"Austin, Texas","description":"Industrial shell transformed into a creative headquarters with adaptable zones for work and hospitality.","services":["Acoustic zoning","Microcement surfaces","Lighting design"],"story":{"before":"Raw concrete and exposed utilities made the volume feel cold and unfinished.","process":"Custom steel fins defined collaborative neighborhoods while warm microcement anchored circulation.","after":"A luminous loft balancing productivity and pause, tuned for gallery nights and client residencies."}},"harborHouse":{"title":"Harbor House Revival","location":"Seattle, Washington","description":"Historical waterfront property renewed with marine-grade materials and a serene palette.","services":["Envelope restoration","Marine glazing","Hand-brushed limewash"],"story":{"before":"Salt exposure compromised the facade and moisture crept into interior hardwoods.","process":"We reconstructed the envelope, integrated triple-sealed glazing, and layered mineral paints to breathe.","after":"A coastal haven gleaming with resilience—soft neutrals, seamless transitions, and curated shoreline views."}},"solsticeSpa":{"title":"Solstice Garden Spa","location":"Santa Barbara, California","description":"An indoor-outdoor wellness pavilion celebrating light, water, and handcrafted textures.","services":["Hydrotherapy pools","Cedar sauna carpentry","Living wall irrigation"],"story":{"before":"Underutilized courtyard lacked intimacy and year-round usability.","process":"Sculpted terraced platforms, engineered glass canopies, and choreographed sensory lighting.","after":"A restorative spa envelope where water, heat, and botanicals compose a daily ritual of calm."}}}},"testimonials":{"title":"Trusted by visionary clients","selectorLabel":"Voices from our clients","items":[{"quote":"Titino Construction treated our heritage property like a living archive—every beam restored with reverence and innovation.","author":"Elena Martínez","role":"Principal, Martínez & Co."},{"quote":"Weekly progress films and meticulous documentation meant zero surprises. They delivered ahead of schedule without compromising quality.","author":"Marcus Lee","role":"Founder, Meridian Labs"},{"quote":"Their artisanship is matched only by their empathy. Our home feels both deeply personal and universally admired.","author":"Sophia Grant","role":"Private Residence"}]},"contact":{"title":"Let's shape your next project","subtitle":"Share your vision, attach sketches or inspiration, and our studio concierge will respond within 24 hours.","form":{"name":"Name","email":"Email","message":"Project vision, timeline, and budget","upload":"Attach brief, plans, or imagery","helper":"Attach inspiration, budgets, or site photos so we can respond with detail.","submit":"Send message","successTitle":"Message sent","successBody":"Thank you. Our team will review your submission and connect with you shortly."},"whatsapp":"Message us on WhatsApp","email":"Email the studio","whatsappNumber":"+1 (310) 555-4832","emailAddress":"titinoavila7329@gmail.com"},"footer":{"rights":"© {{year}} Titino Construction. All rights reserved.","crafted":"Crafted with respect for architecture and the people who inhabit it."}});}),
"[project]/locales/es.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"navigation":{"work":"Proyectos","process":"Proceso","values":"Valores","contact":"Contacto"},"languageToggle":{"aria":"Cambiar idioma","en":"EN","es":"ES"},"hero":{"tagline":"Estudio de Construcción y Remodelación","dual":{"en":"Building Dreams.","es":"Construyendo Sueños."},"description":"Acompañamos a clientes exigentes para crear espacios arquitectónicos que equilibran ingeniería estructural con diseño con alma.","actions":{"work":"Ver Proyectos","contact":"Contáctanos"},"scroll":"Desplázate para explorar"},"process":{"title":"Nuestro Proceso","subtitle":"Un marco transparente que guía cada proyecto desde la visión hasta la entrega impecable.","stages":[{"title":"Planificar","description":"Alineamos visión, factibilidad y presupuesto para comenzar con claridad absoluta.","highlights":["Visitas al sitio y evaluación estructural","Presupuestos transparentes y cronograma por hitos","Mood boards y bocetos 3D rápidos"]},{"title":"Construir","description":"Supervisores de confianza coordinan oficios, permisos y progreso diario para que cada detalle sea preciso.","highlights":["Un solo punto de contacto en obra","Recorridos semanales y recapitulaciones en video","Controles de calidad registrados en la nube"]},{"title":"Entregar","description":"Entregamos un espacio afinado, te capacitamos en los sistemas y quedamos disponibles para cualquier ajuste.","highlights":["Lista de entrega detallada y retoques","Estilismo, limpieza y puesta en marcha","Soporte post-entrega a tu alcance"]}]},"values":{"title":"Precisión, Confianza, Belleza","items":[{"title":"Oficio Integrado","description":"Nuestros arquitectos, constructores y especialistas en materiales trabajan como un solo taller de principio a fin."},{"title":"Transparencia Radical","description":"Paneles en tiempo real, registros semanales en video y presupuestos abiertos te mantienen cerca del avance."},{"title":"Impresiones que Perduran","description":"Espacios que elevan los rituales cotidianos—cálidos, intencionales y diseñados para durar generaciones."}]},"specialties":{"title":"Especialidades Firmadas","description":"De la reimaginación estructural a los acabados hechos a medida, orquestamos cada capa de la obra.","items":["Remodelación integral de viviendas","Renovación de techos y envolventes","Pintura y acabados artesanales","Sistemas de pisos de lujo","Carpintería y mobiliario a medida","Arquitectura para exteriores"]},"projects":{"title":"Transformaciones Destacadas","subtitle":"Cuatro narrativas arquitectónicas que honran la herencia mientras diseñan el mañana.","stageLabels":{"before":"Antes","process":"Proceso","after":"Después"},"modal":{"close":"Cerrar proyecto"},"items":{"ridgeResidence":{"title":"Renovación Residencial Ridge","location":"Aspen, Colorado","description":"Una casa de montaña despojada hasta su estructura y reimaginada como un refugio cálido.","services":["Refuerzo estructural","Sistemas de piso radiante","Carpintería en nogal"],"story":{"before":"Ampliaciones fragmentadas y acabados desactualizados apagaban las vistas y la luz natural.","process":"Abrimos la estructura con vigas glulam, revestimos núcleos en nogal y coreografiamos la iluminación con el terreno.","after":"Un santuario abierto enmarcado en vidrio y madera que integra el paisaje en cada espacio."}},"cortezLoft":{"title":"Loft Creativo Cortez","location":"Austin, Texas","description":"Una nave industrial transformada en sede creativa con zonas adaptables para trabajo y hospitalidad.","services":["Zonas acústicas","Superficies de microcemento","Diseño de iluminación"],"story":{"before":"Concreto expuesto y servicios a la vista hacían que el volumen se sintiera frío e inconcluso.","process":"Aletas de acero a medida definieron vecindarios colaborativos mientras el microcemento cálido ancló la circulación.","after":"Un loft luminoso que equilibra productividad y pausa, listo para noches de galería y residencias de clientes."}},"harborHouse":{"title":"Renacimiento Casa Harbor","location":"Seattle, Washington","description":"Propiedad histórica frente al mar renovada con materiales marinos y una paleta serena.","services":["Restauración de envolvente","Vidrios de grado marino","Estuco alisado a mano"],"story":{"before":"La exposición a la sal comprometió la fachada y la humedad afectó los interiores de madera.","process":"Reconstruimos la envolvente, integramos triple vidrio sellado y aplicamos pinturas minerales transpirables.","after":"Un refugio costero resiliente—neutros suaves, transiciones fluidas y vistas al litoral curadas."}},"solsticeSpa":{"title":"Spa Jardín Solstice","location":"Santa Bárbara, California","description":"Un pabellón de bienestar interior-exterior que celebra la luz, el agua y las texturas artesanales.","services":["Piscinas de hidroterapia","Carpintería de sauna en cedro","Irrigación para muro vivo"],"story":{"before":"El patio desaprovechado carecía de intimidad y uso durante todo el año.","process":"Esculpimos plataformas en terrazas, instalamos marquesinas de vidrio y coreografiamos iluminación sensorial.","after":"Un spa restaurador donde agua, calor y botánica componen un ritual cotidiano de calma."}}}},"testimonials":{"title":"Con la confianza de clientes visionarios","selectorLabel":"Voces de nuestros clientes","items":[{"quote":"Titino Construction trató nuestra propiedad patrimonial como un archivo vivo—cada viga restaurada con reverencia e innovación.","author":"Elena Martínez","role":"Directora, Martínez & Co."},{"quote":"Los videos semanales y la documentación meticulosa evitaron sorpresas. Entregaron antes de lo previsto sin comprometer calidad.","author":"Marcus Lee","role":"Fundador, Meridian Labs"},{"quote":"Su artesanía solo se compara con su empatía. Nuestro hogar se siente profundamente personal y universalmente admirado.","author":"Sophia Grant","role":"Residencia Particular"}]},"contact":{"title":"Diseñemos tu próximo proyecto","subtitle":"Comparte tu visión, adjunta bocetos o inspiración y nuestro estudio responderá en menos de 24 horas.","form":{"name":"Nombre","email":"Correo electrónico","message":"Visión del proyecto, cronograma y presupuesto","upload":"Adjunta brief, planos o imágenes","helper":"Adjunta inspiración, presupuestos o fotos del sitio para responderte con detalle.","submit":"Enviar mensaje","successTitle":"Mensaje enviado","successBody":"Gracias. Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo en breve."},"whatsapp":"Escríbenos por WhatsApp","email":"Envía un correo al estudio","whatsappNumber":"+1 (310) 555-4832","emailAddress":"titinoavila7329@gmail.com"},"footer":{"rights":"© {{year}} Titino Construction. Todos los derechos reservados.","crafted":"Diseñado con respeto por la arquitectura y quienes la habitan."}});}),
"[project]/lib/i18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getI18nInstance",
    ()=>getI18nInstance,
    "isSupportedLanguage",
    ()=>isSupportedLanguage,
    "supportedLanguages",
    ()=>supportedLanguages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next/dist/esm/i18next.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/locales/en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$es$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/locales/es.json (json)");
;
;
;
;
const supportedLanguages = [
    "en",
    "es"
];
const resources = {
    en: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$en$2e$json__$28$json$29$__["default"]
    },
    es: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$es$2e$json__$28$json$29$__["default"]
    }
};
let instance = null;
function getI18nInstance() {
    if (instance) return instance;
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createInstance"])();
    i18n.use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initReactI18next"]).init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        initImmediate: false
    });
    instance = i18n;
    return i18n;
}
function isSupportedLanguage(language) {
    return supportedLanguages.includes(language);
}
}),
"[project]/components/language-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useAvailableLanguages",
    ()=>useAvailableLanguages,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$I18nextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/I18nextProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LANGUAGE_STORAGE_KEY = "titino-language";
function LanguageProvider({ children }) {
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getI18nInstance"])();
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const stored = undefined;
        const timeout = undefined;
    }, [
        i18n
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ready) return;
        i18n.changeLanguage(language);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        i18n,
        language,
        ready
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof document === "undefined") return;
        document.documentElement.lang = language;
    }, [
        language
    ]);
    const setLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((lang)=>{
        setLanguageState(lang);
    }, []);
    const toggleLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setLanguageState((current)=>current === "en" ? "es" : "en");
    }, []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            language,
            setLanguage,
            toggleLanguage,
            ready
        }), [
        language,
        ready,
        setLanguage,
        toggleLanguage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$I18nextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I18nextProvider"], {
            i18n: i18n,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/language-provider.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/language-provider.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
function useAvailableLanguages() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportedLanguages"];
}
}),
"[project]/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ambient$2d$background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ambient-background.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/language-provider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ambient$2d$background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmbientBackground"], {}, void 0, false, {
                    fileName: "[project]/app/providers.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/app/providers.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/providers.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6c95f9cd._.js.map