(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const THEME_STORAGE_KEY = "titino-theme";
function applyTheme(theme) {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
}
function ThemeProvider({ children }) {
    _s();
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const timeout = window.setTimeout({
                "ThemeProvider.useEffect.timeout": ()=>{
                    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
                    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    const initial = stored ?? (prefersDark ? "dark" : "light");
                    setThemeState(initial);
                    applyTheme(initial);
                    setReady(true);
                }
            }["ThemeProvider.useEffect.timeout"], 0);
            return ({
                "ThemeProvider.useEffect": ()=>window.clearTimeout(timeout)
            })["ThemeProvider.useEffect"];
        }
    }["ThemeProvider.useEffect"], []);
    const setTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeProvider.useCallback[setTheme]": (next)=>{
            setThemeState(next);
            window.localStorage.setItem(THEME_STORAGE_KEY, next);
            applyTheme(next);
        }
    }["ThemeProvider.useCallback[setTheme]"], []);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeProvider.useCallback[toggleTheme]": ()=>{
            setTheme(theme === "light" ? "dark" : "light");
        }
    }["ThemeProvider.useCallback[toggleTheme]"], [
        theme,
        setTheme
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeProvider.useMemo[value]": ()=>({
                theme,
                setTheme,
                toggleTheme,
                ready
            })
    }["ThemeProvider.useMemo[value]"], [
        theme,
        ready,
        setTheme,
        toggleTheme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/theme-provider.tsx",
        lineNumber: 69,
        columnNumber: 10
    }, this);
}
_s(ThemeProvider, "8IcP5K0BTpZqEc5SWtkm1G/xaCs=");
_c = ThemeProvider;
function useTheme() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ambient-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AmbientBackground",
    ()=>AmbientBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
function AmbientBackground() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const tones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AmbientBackground.useMemo[tones]": ()=>theme === "dark" ? [
                "rgba(148, 163, 184, 0.22)",
                "rgba(226, 232, 240, 0.18)",
                "rgba(100, 116, 139, 0.2)"
            ] : [
                "rgba(31, 41, 55, 0.12)",
                "rgba(15, 23, 42, 0.1)",
                "rgba(71, 85, 105, 0.1)"
            ]
    }["AmbientBackground.useMemo[tones]"], [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        children: SHAPES.map((shape, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute left-1/2 top-1/2 aspect-square rounded-full blur-3xl",
                style: {
                    width: shape.size,
                    backgroundColor: tones[index % tones.length]
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
                lineNumber: 39,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ambient-background.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(AmbientBackground, "NVbVzUQPJsl8VEpS0geY7Dsltbs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = AmbientBackground;
var _c;
__turbopack_context__.k.register(_c, "AmbientBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/locales/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"navigation":{"work":"Work","process":"Process","values":"Values","contact":"Contact"},"languageToggle":{"aria":"Switch language","en":"EN","es":"ES"},"themeToggle":{"light":"Light","dark":"Dark","aria":"Toggle light and dark theme"},"hero":{"tagline":"Construction & Remodeling Studio","dual":{"en":"Building Dreams.","es":"Construyendo Sueños."},"description":"We partner with discerning clients to craft architectural spaces that balance structural integrity with soulful design.","actions":{"work":"View Our Work","contact":"Contact"},"scroll":"Scroll to explore"},"process":{"title":"Our Process","subtitle":"A transparent framework guiding every commission from insight to immaculate delivery.","stages":[{"title":"Plan","description":"We align vision, feasibility, and budget so the project begins with complete clarity.","highlights":["Site walk-throughs and structural checks","Transparent budgets and milestone schedule","Mood boards and quick 3D sketches"]},{"title":"Build","description":"Trusted supervisors coordinate trades, permits, and daily progress so every detail stays precise.","highlights":["One point of contact on site","Weekly walkthroughs and video recaps","Quality checks logged in the cloud"]},{"title":"Deliver","description":"We hand over a tuned space, train you on systems, and stay available for any adjustments.","highlights":["Detailed punch list and touch-ups","Styling, cleaning, and setup","Post-delivery support on call"]}]},"values":{"title":"Precision, Trust, Beauty","items":[{"title":"Integrated Craft","description":"Our architects, builders, and material specialists work as one atelier from concept to completion."},{"title":"Radical Transparency","description":"Real-time dashboards, weekly film logs, and open-book budgeting keep you close to the work."},{"title":"Enduring Impressions","description":"Spaces that elevate daily rituals—warm, intentional, and engineered to last generations."}]},"specialties":{"title":"Signature Specialties","description":"From structural reimagination to bespoke finishes, we orchestrate every layer of the build.","items":["Whole-home remodeling","Roofing and envelope renewal","Curated painting & plaster artistry","Luxury flooring systems","Custom millwork and cabinetry","Outdoor living architecture"]},"projects":{"title":"Featured Transformations","subtitle":"Four architectural narratives illustrating how we honor heritage while designing for tomorrow.","stageLabels":{"before":"Before","process":"Process","after":"After"},"modal":{"close":"Close project"},"items":{"ridgeResidence":{"title":"Ridge Residence Renewal","location":"Aspen, Colorado","description":"A mountainside home stripped back to its bones and reimagined as a warm alpine retreat.","services":["Structural reframing","Radiant flooring systems","Walnut millwork"],"story":{"before":"Fragmented additions and outdated finishes muted the mountain views and natural light.","process":"We opened the structure with engineered glulam beams, wrapped cores in walnut, and choreographed lighting with the terrain.","after":"An open sanctuary framed in glass and timber, inviting the landscape into every gathering space."}},"cortezLoft":{"title":"Cortez Creative Loft","location":"Austin, Texas","description":"Industrial shell transformed into a creative headquarters with adaptable zones for work and hospitality.","services":["Acoustic zoning","Microcement surfaces","Lighting design"],"story":{"before":"Raw concrete and exposed utilities made the volume feel cold and unfinished.","process":"Custom steel fins defined collaborative neighborhoods while warm microcement anchored circulation.","after":"A luminous loft balancing productivity and pause, tuned for gallery nights and client residencies."}},"harborHouse":{"title":"Harbor House Revival","location":"Seattle, Washington","description":"Historical waterfront property renewed with marine-grade materials and a serene palette.","services":["Envelope restoration","Marine glazing","Hand-brushed limewash"],"story":{"before":"Salt exposure compromised the facade and moisture crept into interior hardwoods.","process":"We reconstructed the envelope, integrated triple-sealed glazing, and layered mineral paints to breathe.","after":"A coastal haven gleaming with resilience—soft neutrals, seamless transitions, and curated shoreline views."}},"solsticeSpa":{"title":"Solstice Garden Spa","location":"Santa Barbara, California","description":"An indoor-outdoor wellness pavilion celebrating light, water, and handcrafted textures.","services":["Hydrotherapy pools","Cedar sauna carpentry","Living wall irrigation"],"story":{"before":"Underutilized courtyard lacked intimacy and year-round usability.","process":"Sculpted terraced platforms, engineered glass canopies, and choreographed sensory lighting.","after":"A restorative spa envelope where water, heat, and botanicals compose a daily ritual of calm."}}}},"testimonials":{"title":"Trusted by visionary clients","selectorLabel":"Voices from our clients","items":[{"quote":"Titino Construction treated our heritage property like a living archive—every beam restored with reverence and innovation.","author":"Elena Martínez","role":"Principal, Martínez & Co."},{"quote":"Weekly progress films and meticulous documentation meant zero surprises. They delivered ahead of schedule without compromising quality.","author":"Marcus Lee","role":"Founder, Meridian Labs"},{"quote":"Their artisanship is matched only by their empathy. Our home feels both deeply personal and universally admired.","author":"Sophia Grant","role":"Private Residence"}]},"contact":{"title":"Let's shape your next project","subtitle":"Share your vision, attach sketches or inspiration, and our studio concierge will respond within 24 hours.","form":{"name":"Name","email":"Email","message":"Project vision, timeline, and budget","upload":"Attach brief, plans, or imagery","helper":"Attach inspiration, budgets, or site photos so we can respond with detail.","submit":"Send message","successTitle":"Message sent","successBody":"Thank you. Our team will review your submission and connect with you shortly."},"whatsapp":"Message us on WhatsApp","email":"Email the studio","whatsappNumber":"+1 (310) 555-4832","emailAddress":"studio@titinoconstruction.com"},"footer":{"rights":"© {{year}} Titino Construction. All rights reserved.","crafted":"Crafted with respect for architecture and the people who inhabit it."}});}),
"[project]/locales/es.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"navigation":{"work":"Proyectos","process":"Proceso","values":"Valores","contact":"Contacto"},"languageToggle":{"aria":"Cambiar idioma","en":"EN","es":"ES"},"themeToggle":{"light":"Claro","dark":"Oscuro","aria":"Alternar modo claro y oscuro"},"hero":{"tagline":"Estudio de Construcción y Remodelación","dual":{"en":"Building Dreams.","es":"Construyendo Sueños."},"description":"Acompañamos a clientes exigentes para crear espacios arquitectónicos donde la precisión estructural se une con el diseño emocional.","actions":{"work":"Ver Proyectos","contact":"Contacto"},"scroll":"Desplázate para descubrir"},"process":{"title":"Nuestro Proceso","subtitle":"Un marco transparente que guía cada encargo desde la visión hasta la entrega impecable.","stages":[{"title":"Planificar","description":"Alineamos visión, viabilidad y presupuesto para iniciar con total claridad.","highlights":["Recorridos del sitio y revisión estructural","Presupuestos transparentes y calendario por hitos","Mood boards y bocetos 3D ágiles"]},{"title":"Construir","description":"Supervisores de confianza coordinan oficios, permisos y avances diarios con precisión.","highlights":["Un solo punto de contacto en obra","Recorridos semanales y videos de avance","Control de calidad documentado en la nube"]},{"title":"Entregar","description":"Entregamos el espacio ajustado, te capacitamos en sistemas y quedamos disponibles para ajustes.","highlights":["Lista de pendientes detallada y retoques","Estilismo, limpieza y puesta en marcha","Acompañamiento posterior a la entrega"]}]},"values":{"title":"Precisión, Confianza, Belleza","items":[{"title":"Oficio Integrado","description":"Nuestros arquitectos, constructores y especialistas en materiales trabajan como un mismo atelier de principio a fin."},{"title":"Transparencia Radical","description":"Dashboards en tiempo real, bitácoras filmadas semanales y presupuestos de libro abierto te mantienen cerca de la obra."},{"title":"Impresiones Eternas","description":"Espacios que elevan los rituales diarios: cálidos, intencionales y diseñados para perdurar generaciones."}]},"specialties":{"title":"Especialidades Emblemáticas","description":"Desde reimaginar la estructura hasta los acabados a medida, orquestamos cada capa de la construcción.","items":["Remodelación integral de residencias","Renovación de cubiertas y envolventes","Pintura y estucos curados","Sistemas de pisos de lujo","Carpintería y mobiliario a medida","Arquitectura de espacios exteriores"]},"projects":{"title":"Transformaciones Destacadas","subtitle":"Cuatro narrativas arquitectónicas que muestran cómo honramos la herencia mientras diseñamos el mañana.","stageLabels":{"before":"Antes","process":"Proceso","after":"Después"},"modal":{"close":"Cerrar proyecto"},"items":{"ridgeResidence":{"title":"Renovación Ridge Residence","location":"Aspen, Colorado","description":"Una casa de montaña despojada hasta su estructura y reimaginada como un cálido refugio alpino.","services":["Reestructuración estructural","Sistemas de calefacción radiante","Carpintería en nogal"],"story":{"before":"Las ampliaciones fragmentadas y los acabados obsoletos apagaban las vistas y la luz natural.","process":"Abrimos la estructura con vigas glulam, revestimos núcleos en nogal y coreografiamos la iluminación con el terreno.","after":"Un santuario abierto enmarcado en vidrio y madera que invita al paisaje a cada espacio de reunión."}},"cortezLoft":{"title":"Cortez Creative Loft","location":"Austin, Texas","description":"Cascarón industrial transformado en sede creativa con zonas adaptables para trabajo y hospitalidad.","services":["Zonificación acústica","Superficies de microcemento","Diseño de iluminación"],"story":{"before":"Concreto expuesto y servicios a la vista hacían que el volumen se sintiera frío e inconcluso.","process":"Aletas de acero a medida definieron vecindarios colaborativos mientras el microcemento cálido articuló la circulación.","after":"Un loft luminoso que equilibra productividad y pausa, afinado para noches de galería y residencias de clientes."}},"harborHouse":{"title":"Revitalización Harbor House","location":"Seattle, Washington","description":"Propiedad histórica junto al mar renovada con materiales grado marino y una paleta serena.","services":["Restauración de la envolvente","Cristalería marina","Revestimiento con cal aplicada a mano"],"story":{"before":"La exposición a la sal comprometía la fachada y la humedad afectaba los pisos interiores.","process":"Reconstruimos la envolvente, integramos triple acristalamiento sellado y aplicamos pinturas minerales que respiran.","after":"Un refugio costero que resplandece con resiliencia: neutrales suaves, transiciones fluidas y vistas curadas a la costa."}},"solsticeSpa":{"title":"Solstice Garden Spa","location":"Santa Bárbara, California","description":"Un pabellón de bienestar interior-exterior que celebra la luz, el agua y las texturas artesanales.","services":["Piscinas de hidroterapia","Carpintería en cedro para sauna","Riego para muro vivo"],"story":{"before":"El patio subutilizado carecía de intimidad y uso durante todo el año.","process":"Esculpimos plataformas aterrazadas, diseñamos cubiertas de vidrio y coreografiamos iluminación sensorial.","after":"Un spa restaurador donde agua, calor y botánica componen un ritual cotidiano de calma."}}}},"testimonials":{"title":"Clientes visionarios confían en nosotros","selectorLabel":"Voces de nuestros clientes","items":[{"quote":"Titino Construction trató nuestra propiedad patrimonial como un archivo vivo: cada viga restaurada con reverencia e innovación.","author":"Elena Martínez","role":"Directora, Martínez & Co."},{"quote":"Los videos semanales y la documentación minuciosa significaron cero sorpresas. Entregaron antes de tiempo sin comprometer calidad.","author":"Marcus Lee","role":"Fundador, Meridian Labs"},{"quote":"Su artesanía solo es superada por su empatía. Nuestro hogar se siente profundamente personal y universalmente admirado.","author":"Sophia Grant","role":"Residencia Privada"}]},"contact":{"title":"Diseñemos tu próximo proyecto","subtitle":"Comparte tu visión, adjunta planos o inspiración y nuestro concierge responderá en 24 horas.","form":{"name":"Nombre","email":"Correo","message":"Visión del proyecto, cronograma y presupuesto","upload":"Adjunta briefing, planos o imágenes","helper":"Adjunta inspiración, presupuestos o fotos del sitio para responderte con detalle.","submit":"Enviar mensaje","successTitle":"Mensaje enviado","successBody":"Gracias. Revisaremos tu información y nos pondremos en contacto pronto."},"whatsapp":"Escríbenos por WhatsApp","email":"Correo del estudio","whatsappNumber":"+1 (310) 555-4832","emailAddress":"studio@titinoconstruction.com"},"footer":{"rights":"© {{year}} Titino Construction. Todos los derechos reservados.","crafted":"Creamos con respeto por la arquitectura y quienes la habitan."}});}),
"[project]/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getI18nInstance",
    ()=>getI18nInstance,
    "isSupportedLanguage",
    ()=>isSupportedLanguage,
    "supportedLanguages",
    ()=>supportedLanguages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-client] (ecmascript)");
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
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInstance"])();
    i18n.use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initReactI18next"]).init({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/language-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useAvailableLanguages",
    ()=>useAvailableLanguages,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$I18nextProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/I18nextProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LANGUAGE_STORAGE_KEY = "titino-language";
function LanguageProvider({ children }) {
    _s();
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getI18nInstance"])();
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
            const timeout = window.setTimeout({
                "LanguageProvider.useEffect.timeout": ()=>{
                    if (stored && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupportedLanguage"])(stored)) {
                        setLanguageState(stored);
                        i18n.changeLanguage(stored);
                    }
                    setReady(true);
                }
            }["LanguageProvider.useEffect.timeout"], 0);
            return ({
                "LanguageProvider.useEffect": ()=>window.clearTimeout(timeout)
            })["LanguageProvider.useEffect"];
        }
    }["LanguageProvider.useEffect"], [
        i18n
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            if (!ready) return;
            i18n.changeLanguage(language);
            if ("TURBOPACK compile-time truthy", 1) {
                window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
            }
        }
    }["LanguageProvider.useEffect"], [
        i18n,
        language,
        ready
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            if (typeof document === "undefined") return;
            document.documentElement.lang = language;
        }
    }["LanguageProvider.useEffect"], [
        language
    ]);
    const setLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[setLanguage]": (lang)=>{
            setLanguageState(lang);
        }
    }["LanguageProvider.useCallback[setLanguage]"], []);
    const toggleLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[toggleLanguage]": ()=>{
            setLanguageState({
                "LanguageProvider.useCallback[toggleLanguage]": (current)=>current === "en" ? "es" : "en"
            }["LanguageProvider.useCallback[toggleLanguage]"]);
        }
    }["LanguageProvider.useCallback[toggleLanguage]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageProvider.useMemo[value]": ()=>({
                language,
                setLanguage,
                toggleLanguage,
                ready
            })
    }["LanguageProvider.useMemo[value]"], [
        language,
        ready,
        setLanguage,
        toggleLanguage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$I18nextProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I18nextProvider"], {
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
_s(LanguageProvider, "2Q/2zUcfBKCNRulzU2AgaRAeCto=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function useAvailableLanguages() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportedLanguages"];
}
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ambient$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ambient-background.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/language-provider.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ambient$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientBackground"], {}, void 0, false, {
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
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1be8a10e._.js.map