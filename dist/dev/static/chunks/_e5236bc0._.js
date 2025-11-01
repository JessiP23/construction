(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ambient-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AmbientBackground",
    ()=>AmbientBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
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
    "rgba(32, 44, 66, 1)",
    "rgba(132, 146, 168, 0.12)",
    "rgba(185, 153, 102, 0.14)"
];
function AmbientBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        children: SHAPES.map((shape, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
_c = AmbientBackground;
var _c;
__turbopack_context__.k.register(_c, "AmbientBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/locales/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"navigation\":{\"work\":\"Projects\",\"process\":\"Process\",\"values\":\"Values\",\"contact\":\"Contact\"},\"languageToggle\":{\"aria\":\"Change language\",\"en\":\"EN\",\"es\":\"ES\"},\"hero\":{\"tagline\":\"Construction & Renovation Studio\",\"dual\":{\"en\":\"Building Dreams.\",\"es\":\"Construyendo Sueños.\"},\"description\":\"We partner with discerning clients to craft architectural spaces that balance structural engineering with soulful design.\",\"actions\":{\"work\":\"See Projects\",\"contact\":\"Contact Us\"},\"scroll\":\"Scroll to explore\"},\"process\":{\"title\":\"Our Process\",\"subtitle\":\"A transparent framework guiding each project from vision to flawless delivery.\",\"stages\":[{\"title\":\"Discover\",\"description\":\"We align vision, feasibility, and budget to start with absolute clarity.\",\"highlights\":[\"Site visits and structural assessment\",\"Transparent budgets and milestone schedules\",\"Mood boards and quick 3D sketches\"]},{\"title\":\"Build\",\"description\":\"Trusted site leaders coordinate trades, permits, and daily progress so every detail is precise.\",\"highlights\":[\"Single point of contact on site\",\"Weekly walkthroughs and video summaries\",\"Quality checks logged in the cloud\"]},{\"title\":\"Deliver\",\"description\":\"We hand over a tuned space, train operators on systems, and remain available for fine-tuning.\",\"highlights\":[\"Detailed handover and punch lists\",\"Styling, cleaning, and commissioning\",\"Post-delivery support\"]}]},\"values\":{\"title\":\"Precision, Trust, Beauty\",\"subtitle\":\"Principles that shape every project\",\"description\":\"These commitments guide how we communicate, build, and steward every structure entrusted to our studio.\",\"items\":[{\"title\":\"Integrated Craft\",\"description\":\"Architects, builders and material specialists operate as one atelier from start to finish.\"},{\"title\":\"Radical Transparency\",\"description\":\"Real-time boards, weekly videos, and open budgets keep you close to progress.\"},{\"title\":\"Enduring Impressions\",\"description\":\"Spaces that elevate daily rituals—warm, intentional, and built to last generations.\"}]},\"specialties\":{\"title\":\"Signature Specialties\",\"description\":\"From structural reimagination to bespoke finishes, we orchestrate every layer of the build.\",\"support\":\"Choose a discipline to learn our methodology, deliverables, and reference projects.\",\"cardIndicator\":\"Discipline\",\"ctaLabel\":\"Details\",\"backLabel\":\"Back to specialties\",\"deliverablesTitle\":\"Distinctive deliverables\",\"processTitle\":\"How we run the work\",\"referenceProjects\":\"Reference transformations\",\"viewAllWork\":\"View all projects\",\"items\":{\"wholeHomeRemodeling\":{\"name\":\"Whole-home remodeling\",\"excerpt\":\"Structural and interior transformations delivered with concierge coordination.\",\"summary\":\"We orchestrate architecture, engineering and interiors to renew a residence while honoring its context.\",\"seoDescription\":\"Titino Construction performs whole-home remodels with structural reinforcements, integrated interiors, and concierge leadership.\",\"metrics\":[{\"label\":\"Ideal scope\",\"value\":\"400–1,700 m² projects\"},{\"label\":\"Typical duration\",\"value\":\"6–18 month programs\"},{\"label\":\"Core disciplines\",\"value\":\"Structure, envelope, interiors, millwork\"}],\"deliverables\":[\"Feasibility modeling, code review and budgets\",\"Restructuring and seismic strengthening\",\"High-performance thermal strategies\",\"MEP coordination with smart systems\",\"Millwork packages and finish schedules\",\"Handover manuals and maintenance planning\"],\"process\":[{\"title\":\"Discovery & modeling\",\"description\":\"Laser scans, code review and digital twins define boundaries before decisions are made.\"},{\"title\":\"Site leadership\",\"description\":\"Resident leaders coordinate trades, monitor quality milestones and communicate progress.\"},{\"title\":\"Handover & support\",\"description\":\"Soft handoffs, user training and scheduled tune-ups protect the investment.\"}],\"ctaLabel\":\"Schedule a remodel consult\"},\"envelopeRenewal\":{\"name\":\"Roofing & envelope renewal\",\"excerpt\":\"High-performance roofing and facade renewal engineered for longevity in demanding climates.\",\"summary\":\"We resolve water intrusion and weatherization by rebuilding protective assemblies with marine-grade systems and rigorous testing.\",\"seoDescription\":\"Titino Construction revitalizes roofs and envelopes with diagnostics, reconstruction, and performance verification.\",\"metrics\":[{\"label\":\"Ideal scope\",\"value\":\"Coastal & alpine residences\"},{\"label\":\"Typical duration\",\"value\":\"8–20 week engagements\"},{\"label\":\"Core disciplines\",\"value\":\"Roofing, glazing, waterproofing\"}],\"deliverables\":[\"Forensic moisture mapping and drone imaging\",\"Temporary protection and site logistics planning\",\"Roof structure reinforcement and decking upgrades\",\"Custom flashing, drainage, and gutter design\",\"Triple-sealed glazing and air/vapor barrier integration\",\"Post-completion thermal and water testing reports\"],\"process\":[{\"title\":\"Diagnostics & planning\",\"description\":\"Infrared scans, drone surveys, and envelope modeling reveal vulnerabilities before demolition.\"},{\"title\":\"Envelope reconstruction\",\"description\":\"Sequenced tear-offs with live protection allow rebuilding with precision and minimal disruption.\"},{\"title\":\"Performance verification\",\"description\":\"We pressure-test, water-test, and document performance so owners have proof of longevity.\"}],\"ctaLabel\":\"Book an envelope assessment\"},\"paintingPlaster\":{\"name\":\"Curated painting & plaster artistry\",\"excerpt\":\"Museum-grade finishes curated for depth, tactility, and longevity.\",\"summary\":\"Our finish atelier formulates pigments, limewashes, and Venetian plasters that respond to light, touch, and storytelling.\",\"seoDescription\":\"Titino Construction offers curated painting and plaster artistry with bespoke pigments and hand-troweled finishes.\",\"metrics\":[{\"label\":\"Ideal scope\",\"value\":\"Luxury residences & boutique hospitality\"},{\"label\":\"Typical duration\",\"value\":\"3–8 week finishing cycles\"},{\"label\":\"Core disciplines\",\"value\":\"Surface prep, pigments, artisan application\"}],\"deliverables\":[\"Palette strategy with daylight and luminaire mockups\",\"Surface remediation, skim coating, and leveling\",\"Custom pigment mixing and limewash formulation\",\"Venetian plaster, tadelakt, and specialty stucco application\",\"Protective sealants tuned to humidity and wear\",\"Care instructions and touch-up kits for facility teams\"],\"process\":[{\"title\":\"Material Storyboarding\",\"description\":\"We prototype finishes under project lighting and iterate with clients until the palette feels inevitable.\"},{\"title\":\"Crafted Application\",\"description\":\"Dust-controlled prep, multi-layer trowel techniques, and artisan crews deliver consistent depth.\"},{\"title\":\"Finish Protection\",\"description\":\"Sealants, cure schedules, and maintenance checklists preserve the finish for years to come.\"}],\"ctaLabel\":\"Consult on finish storytelling\"},\"luxuryFlooring\":{\"name\":\"Luxury flooring systems\",\"excerpt\":\"Precision flooring systems balancing acoustics, comfort, and visual rhythm.\",\"summary\":\"We engineer substrate preparation, radiant systems, and finish materials so the finished plane performs quietly and flawlessly.\",\"seoDescription\":\"Titino Construction installs luxury flooring systems with engineered substrates, radiant heat integration, and bespoke finishes.\",\"metrics\":[{\"label\":\"Ideal scope\",\"value\":\"Residences, wellness spas, boutique retail\"},{\"label\":\"Typical duration\",\"value\":\"4–12 week programs\"},{\"label\":\"Core disciplines\",\"value\":\"Substrate, radiant, finish installation\"}],\"deliverables\":[\"Moisture testing and self-leveling underlayments\",\"Radiant heating and controls integration\",\"Custom parquet, stone, or microcement fabrication\",\"Acoustic underlayment and isolation strategy\",\"Stair nosing, thresholds, and detail transitions\",\"Protection plans and commissioning reports\"],\"process\":[{\"title\":\"Technical Survey\",\"description\":\"Slab analysis, slope mapping, and coordination with MEP anticipate tolerances before install crews mobilize.\"},{\"title\":\"Fabrication & Mockups\",\"description\":\"Pattern studies and on-site mockups confirm rhythm, tone, and slip resistance for each zone.\"},{\"title\":\"Installation & Protection\",\"description\":\"Phased installation with moisture monitoring is followed by protection and punch coordination.\"}],\"ctaLabel\":\"Start a flooring specification\"},\"millworkCabinetry\":{\"name\":\"Custom millwork and cabinetry\",\"excerpt\":\"Bespoke millwork and cabinetry fabricated with joinery-first precision.\",\"summary\":\"Our wood studio partners with clients from concept sketches through installation to deliver integrated storage and architectural furniture.\",\"seoDescription\":\"Titino Construction crafts custom millwork and cabinetry with detailed shop drawings, artisan fabrication, and lifetime service.\",\"metrics\":[{\"label\":\"Ideal scope\",\"value\":\"Kitchens\"},{\"label\":\"Typical duration\",\"value\":\"12–24 week programs\"},{\"label\":\"Core disciplines\",\"value\":\"Design development, fabrication, finishing\"}],\"deliverables\":[\"Material, veneer, and hardware curation\",\"Revit shop drawings and 3D coordination\",\"Solid timber and veneer fabrication\",\"Integrated lighting, power, and technology routing\",\"White-glove installation with field adjustments\",\"Finish care manuals and service agreements\"],\"process\":[{\"title\":\"Design Dialogue\",\"description\":\"We translate brand, lifestyle, and ergonomics into detailed joinery concepts and approvals.\"},{\"title\":\"Fabrication & Finishing\",\"description\":\"CNC precision meets hand finishing in our atelier, with mockups for critical touchpoints.\"},{\"title\":\"Installation & Aftercare\",\"description\":\"Staged installation, punch resolution, and enrollment in ongoing care keep the millwork pristine.\"}],\"ctaLabel\":\"Plan a millwork commission\"},\"outdoorArchitecture\":{\"name\":\"Outdoor living architecture\",\"excerpt\":\"Indoor-outdoor architecture that choreographs landscape, water, and light.\",\"summary\":\"We build terraces, pools, kitchens, and pavilions designed for year-round entertaining and restorative rituals.\",\"seoDescription\":\"Titino Construction designs and builds outdoor living architecture with structural engineering, water features, and hospitality-grade detailing.\",\"metrics\":[{\"label\":\"Ideal scope\",\"value\":\"Courtyards and estate grounds\"},{\"label\":\"Typical duration\",\"value\":\"10–24 week programs\"},{\"label\":\"Core disciplines\",\"value\":\"Landscape structures, water features, lighting\"}],\"deliverables\":[\"Site analysis with sun, wind, and privacy mapping\",\"Structural foundations and drainage engineering\",\"Water feature and pool filtration design\",\"Outdoor kitchen, fireplace, and audio integration\",\"Lighting, planting, and irrigation coordination\",\"Seasonal calibration and stewardship plan\"],\"process\":[{\"title\":\"Site Story & Zoning\",\"description\":\"We map circulation, sightlines, and microclimates to choreograph experiential zones.\"},{\"title\":\"Build Sequence\",\"description\":\"Excavation, utilities, and structural pours are phased to protect existing landscapes.\"},{\"title\":\"Activation & Stewardship\",\"description\":\"Commissioning, planting care, and seasonal service visits keep the environment performing beautifully.\"}],\"ctaLabel\":\"Design an outdoor retreat\"}}},\"projects\":{\"title\":\"Featured Transformations\",\"subtitle\":\"Some of our recent work\",\"stageLabels\":{\"before\":\"Before\",\"process\":\"Process\",\"after\":\"After\"},\"modal\":{\"close\":\"Close project\"},\"items\":{\"ridgeResidence\":{\"title\":\"Ridge Residence Renewal\",\"location\":\"Staten Island, New York\",\"description\":\"A mountainside home stripped back to its bones and reimagined as a warm alpine retreat.\",\"story\":{\"before\":\"Fragmented additions and outdated finishes muted the mountain views and natural light.\",\"process\":\"We opened the structure with engineered glulam beams, wrapped cores in walnut, and choreographed lighting with the terrain.\",\"after\":\"An open sanctuary framed in glass and timber, inviting the landscape into every gathering space.\"},\"coverAlt\":\"Completed alpine living room with expansive glazing and timber beams\",\"media\":{\"before\":{\"alt\":\"Before renovation: compartmentalized mountain home under construction\"},\"after\":{\"alt\":\"After: open-plan alpine living room with panoramic glazing\"}}},\"cortezLoft\":{\"title\":\"Cortez Creative Loft\",\"location\":\"Brooklyn, New York\",\"description\":\"Industrial shell transformed into a creative headquarters with adaptable zones for work and hospitality.\",\"story\":{\"before\":\"Raw concrete and exposed utilities made the volume feel cold and unfinished.\",\"process\":\"Custom steel fins defined collaborative neighborhoods while warm microcement anchored circulation.\",\"after\":\"A luminous loft balancing productivity and pause, tuned for gallery nights and client residencies.\"},\"coverAlt\":\"Creative loft with warm microcement floors and collaborative zones\",\"media\":{\"before\":{\"alt\":\"Before: raw industrial loft with exposed concrete\"},\"after\":{\"alt\":\"After: luminous creative loft with layered work lounges\"}}},\"harborHouse\":{\"title\":\"Harbor House Revival\",\"location\":\"Staten Island, New York\",\"description\":\"Historical waterfront property renewed with marine-grade materials and a serene palette.\",\"story\":{\"before\":\"Salt exposure compromised the facade and moisture crept into interior hardwoods.\",\"process\":\"We reconstructed the envelope, integrated triple-sealed glazing, and layered mineral paints to breathe.\",\"after\":\"A coastal haven gleaming with resilience—soft neutrals, seamless transitions, and curated shoreline views.\"},\"coverAlt\":\"Waterfront residence with soft neutral interiors overlooking the harbor\",\"media\":{\"before\":{\"alt\":\"Before: weathered waterfront facade with peeling paint\"},\"after\":{\"alt\":\"After: living room with marine glazing and serene palette\"}}},\"solsticeSpa\":{\"title\":\"Solstice Garden Spa\",\"location\":\"Brooklyn, New York\",\"description\":\"An indoor-outdoor wellness pavilion celebrating light, water, and handcrafted textures.\",\"story\":{\"before\":\"Underutilized courtyard lacked intimacy and year-round usability.\",\"process\":\"Sculpted terraced platforms, engineered glass canopies, and choreographed sensory lighting.\",\"after\":\"A restorative spa envelope where water, heat, and botanicals compose a daily ritual of calm.\"},\"coverAlt\":\"Indoor-outdoor spa pavilion surrounded by greenery\",\"media\":{\"before\":{\"alt\":\"Before: underutilized courtyard with sparse landscaping\"},\"process\":{\"alt\":\"Process: concrete forming and pool waterproofing\"},\"after\":{\"alt\":\"After: tranquil hydrotherapy pavilion with lush planting\"}}}}},\"testimonials\":{\"title\":\"Trusted by visionary clients\",\"selectorLabel\":\"Voices from our clients\",\"items\":[{\"quote\":\"Titino Construction treated our heritage property like a living archive—every beam restored with reverence and innovation.\",\"author\":\"Elena Martínez\",\"role\":\"Principal, Martínez & Co.\"},{\"quote\":\"Weekly progress films and meticulous documentation meant zero surprises. They delivered ahead of schedule without compromising quality.\",\"author\":\"Marcus Lee\",\"role\":\"Founder, Meridian Labs\"},{\"quote\":\"Their artisanship is matched only by their empathy. Our home feels both deeply personal and universally admired.\",\"author\":\"Sophia Grant\",\"role\":\"Private Residence\"}]},\"contact\":{\"title\":\"Let's shape your next project\",\"subtitle\":\"Share your vision or inspiration, and our studio concierge will respond within 24 hours.\",\"form\":{\"name\":\"Name\",\"email\":\"Email\",\"message\":\"Project vision, timeline, and budget\",\"upload\":\"Attach brief, plans, or imagery\",\"helper\":\"Attach inspiration, budgets, or site photos so we can respond with detail.\",\"submit\":\"Send message\",\"successTitle\":\"Message sent\",\"successBody\":\"Thank you. Our team will review your submission and connect with you shortly.\"},\"whatsapp\":\"Message us on WhatsApp\",\"email\":\"Email the studio\",\"whatsappNumber\":\"+1 (347) 424-0746\",\"emailAddress\":\"titinoavila7329@gmail.com\"},\"footer\":{\"rights\":\"© {{year}} Titino Construction. All rights reserved.\",\"crafted\":\"Crafted with respect for architecture and the people who inhabit it.\"}}"));}),
"[project]/locales/es.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"navigation\":{\"work\":\"Proyectos\",\"process\":\"Proceso\",\"values\":\"Valores\",\"contact\":\"Contacto\"},\"languageToggle\":{\"aria\":\"Cambiar idioma\",\"en\":\"EN\",\"es\":\"ES\"},\"hero\":{\"tagline\":\"Estudio de Construcción y Remodelación\",\"dual\":{\"en\":\"Building Dreams.\",\"es\":\"Construyendo Sueños.\"},\"description\":\"Acompañamos a clientes exigentes para crear espacios arquitectónicos que equilibran ingeniería estructural con diseño con alma.\",\"actions\":{\"work\":\"Ver Proyectos\",\"contact\":\"Contáctanos\"},\"scroll\":\"Desplázate para explorar\"},\"process\":{\"title\":\"Nuestro Proceso\",\"subtitle\":\"Un marco transparente que guía cada proyecto desde la visión hasta la entrega impecable.\",\"stages\":[{\"title\":\"Planificar\",\"description\":\"Alineamos visión, factibilidad y presupuesto para comenzar con claridad absoluta.\",\"highlights\":[\"Visitas al sitio y evaluación estructural\",\"Presupuestos transparentes y cronograma por hitos\",\"Mood boards y bocetos 3D rápidos\"]},{\"title\":\"Construir\",\"description\":\"Supervisores de confianza coordinan oficios, permisos y progreso diario para que cada detalle sea preciso.\",\"highlights\":[\"Un solo punto de contacto en obra\",\"Recorridos semanales y recapitulaciones en video\",\"Controles de calidad registrados en la nube\"]},{\"title\":\"Entregar\",\"description\":\"Entregamos un espacio afinado, te capacitamos en los sistemas y quedamos disponibles para cualquier ajuste.\",\"highlights\":[\"Lista de entrega detallada y retoques\",\"Estilismo, limpieza y puesta en marcha\",\"Soporte post-entrega a tu alcance\"]}]},\"values\":{\"title\":\"Precisión, Confianza, Belleza\",\"subtitle\":\"Principios que sostienen cada obra\",\"description\":\"Estos compromisos guían cómo comunicamos, construimos y cuidamos cada estructura confiada a nuestro estudio.\",\"items\":[{\"title\":\"Oficio Integrado\",\"description\":\"Nuestros arquitectos, constructores y especialistas en materiales trabajan como un solo taller de principio a fin.\"},{\"title\":\"Transparencia Radical\",\"description\":\"Paneles en tiempo real, registros semanales en video y presupuestos abiertos te mantienen cerca del avance.\"},{\"title\":\"Impresiones que Perduran\",\"description\":\"Espacios que elevan los rituales cotidianos—cálidos, intencionales y diseñados para durar generaciones.\"}]},\"specialties\":{\"title\":\"Especialidades Firmadas\",\"description\":\"De la reimaginación estructural a los acabados hechos a medida, orquestamos cada capa de la obra.\",\"support\":\"Elige una disciplina para conocer nuestra metodología, entregables y proyectos de referencia.\",\"cardIndicator\":\"Disciplina\",\"ctaLabel\":\"Detalles\",\"backLabel\":\"Volver a especialidades\",\"deliverablesTitle\":\"Entregables distintivos\",\"processTitle\":\"Cómo dirigimos el trabajo\",\"referenceProjects\":\"Transformaciones de referencia\",\"viewAllWork\":\"Ver todos los proyectos\",\"items\":{\"wholeHomeRemodeling\":{\"name\":\"Remodelación integral de viviendas\",\"excerpt\":\"Transformaciones estructurales e interiores entregadas con coordinación concierge.\",\"summary\":\"Orquestamos arquitectura, ingeniería e interiores para renovar por completo una residencia respetando su contexto original.\",\"seoDescription\":\"Titino Construction realiza remodelaciones integrales con refuerzos estructurales, interiores integrados y liderazgo de obra concierge.\",\"metrics\":[{\"label\":\"Alcance ideal\",\"value\":\"Proyectos de 400–1 700 m²\"},{\"label\":\"Duración típica\",\"value\":\"Programas de 6–18 meses\"},{\"label\":\"Disciplinas clave\",\"value\":\"Estructura, envolvente, interiores, carpintería\"}],\"deliverables\":[\"Modelado de factibilidad, normativas y presupuesto\",\"Reestructuración y refuerzo sísmico\",\"Estrategias de aislamiento de alto desempeño\",\"Coordinación MEP con sistemas inteligentes integrados\",\"Paquetes de carpintería fina y cronogramas de acabados\",\"Manual de entrega y planes de mantenimiento\"],\"process\":[{\"title\":\"Descubrimiento y modelado\",\"description\":\"Escaneos láser, revisión normativa y gemelos digitales definen límites antes de tomar decisiones.\"},{\"title\":\"Dirección de obra\",\"description\":\"Líderes residentes coordinan oficios, vigilan hitos de calidad y comunican avances con tableros transparentes.\"},{\"title\":\"Puesta en marcha y acompañamiento\",\"description\":\"Entregas suaves, capacitación a usuarios y afinaciones programadas protegen la inversión.\"}],\"ctaLabel\":\"Agenda una consulta de remodelación\"},\"envelopeRenewal\":{\"name\":\"Renovación de techos y envolventes\",\"excerpt\":\"Renovación de cubiertas y fachadas de alto desempeño para climas exigentes.\",\"summary\":\"Resolvemos filtraciones y desgaste reconstruyendo la envolvente protectora con sistemas grado marino y pruebas rigurosas.\",\"seoDescription\":\"Titino Construction revitaliza techos y envolventes con diagnóstico, reconstrucción y verificación de desempeño.\",\"metrics\":[{\"label\":\"Alcance ideal\",\"value\":\"Residencias costeras y de montaña\"},{\"label\":\"Duración típica\",\"value\":\"Intervenciones de 8–20 semanas\"},{\"label\":\"Disciplinas clave\",\"value\":\"Cubiertas, cristalería, impermeabilización\"}],\"deliverables\":[\"Mapeo forense de humedad e imágenes con dron\",\"Planeación de protección temporal y logística\",\"Refuerzo de estructura de techo y renovación de plataformas\",\"Diseño de tapajuntas, drenajes y bajantes a medida\",\"Cristales triple sellado e integración de barreras aire/vapor\",\"Reportes térmicos e hidráulicos post-entrega\"],\"process\":[{\"title\":\"Diagnóstico y planeación\",\"description\":\"Escaneos infrarrojos, vuelos con dron y modelado de la envolvente revelan vulnerabilidades antes de demoler.\"},{\"title\":\"Reconstrucción de la envolvente\",\"description\":\"Desmontajes secuenciados y protección activa permiten reconstruir con precisión y mínima interrupción.\"},{\"title\":\"Verificación de desempeño\",\"description\":\"Pruebas de presión, agua y registros documentales certifican la durabilidad.\"}],\"ctaLabel\":\"Programa un diagnóstico de envolvente\"},\"paintingPlaster\":{\"name\":\"Pintura y acabados artesanales\",\"excerpt\":\"Acabados de nivel museo con profundidad, tactilidad y permanencia.\",\"summary\":\"Nuestro atelier de acabados formula pigmentos, cales y estucos venecianos que responden a la luz, al tacto y al relato del espacio.\",\"seoDescription\":\"Titino Construction ofrece pintura y estuco artesanales con pigmentos hechos a medida y aplicaciones manuales.\",\"metrics\":[{\"label\":\"Alcance ideal\",\"value\":\"Residencias de lujo y hotelería boutique\"},{\"label\":\"Duración típica\",\"value\":\"Ciclos de acabado de 3–8 semanas\"},{\"label\":\"Disciplinas clave\",\"value\":\"Preparación de superficie, pigmentos, aplicación artesanal\"}],\"deliverables\":[\"Estrategia cromática con maquetas de luz natural y artificial\",\"Remediación de superficies, nivelaciones y lijados\",\"Mezcla de pigmentos y formulación de cales a medida\",\"Aplicación de estuco veneciano, tadelakt y acabados especiales\",\"Selladores protectores adaptados a humedad y uso\",\"Instructivo de cuidado y kits de retoque para el personal\"],\"process\":[{\"title\":\"Storyboard de materiales\",\"description\":\"Prototipamos acabados bajo la luz del proyecto y refinamos hasta que la paleta resulte inevitable.\"},{\"title\":\"Aplicación artesanal\",\"description\":\"Preparación controlada de polvo, múltiples capas a llana y equipos artesanos aseguran profundidad uniforme.\"},{\"title\":\"Protección del acabado\",\"description\":\"Selladores, tiempos de curado y listas de mantenimiento preservan el acabado por años.\"}],\"ctaLabel\":\"Solicita una consultoría de acabados\"},\"luxuryFlooring\":{\"name\":\"Sistemas de pisos de lujo\",\"excerpt\":\"Sistemas de piso que equilibran acústica, confort y ritmo visual.\",\"summary\":\"Ingenierizamos la preparación de sustratos, la climatización radiante y los materiales finales para que el plano terminado funcione en silencio y con precisión.\",\"seoDescription\":\"Titino Construction instala sistemas de pisos de lujo con sustratos controlados, calefacción radiante e impecables acabados.\",\"metrics\":[{\"label\":\"Alcance ideal\",\"value\":\"Residencias, wellness y retail boutique\"},{\"label\":\"Duración típica\",\"value\":\"Programas de 4–12 semanas\"},{\"label\":\"Disciplinas clave\",\"value\":\"Sustrato, climatización, instalación de acabados\"}],\"deliverables\":[\"Ensayos de humedad y autonivelado de losas\",\"Integración de calefacción radiante y controles\",\"Fabricación de parquet, piedra o microcemento a medida\",\"Estrategia acústica con mantos y aislantes\",\"Detalle de escalones, encuentros y transiciones\",\"Plan de protección y reportes de puesta en marcha\"],\"process\":[{\"title\":\"Levantamiento técnico\",\"description\":\"Análisis de losa, pendientes y coordinación MEP anticipan tolerancias antes de instalar.\"},{\"title\":\"Fabricación y maquetas\",\"description\":\"Estudios de patrón y maquetas in situ confirman ritmo, tono y coeficiente de fricción.\"},{\"title\":\"Instalación y protección\",\"description\":\"Instalación por fases con monitoreo de humedad, seguida de protección y coordinación de pendientes.\"}],\"ctaLabel\":\"Inicia una especificación de pisos\"},\"millworkCabinetry\":{\"name\":\"Carpintería y mobiliario a medida\",\"excerpt\":\"Carpintería y mobiliario hechos a medida con precisión artesanal.\",\"summary\":\"Nuestro taller acompaña al cliente desde los bocetos hasta la instalación para lograr almacenamiento integrado y mobiliario arquitectónico.\",\"seoDescription\":\"Titino Construction desarrolla carpintería y mobiliario a medida con planos detallados, fabricación artesanal y servicio continuo.\",\"metrics\":[{\"label\":\"Alcance ideal\",\"value\":\"Cocinas\"},{\"label\":\"Duración típica\",\"value\":\"Programas de 12–24 semanas\"},{\"label\":\"Disciplinas clave\",\"value\":\"Diseño, fabricación, acabado\"}],\"deliverables\":[\"Curaduría de materiales, chapas y herrajes\",\"Planos de taller y coordinación 3D\",\"Fabricación en maderas macizas y chapillas selectas\",\"Integración de iluminación, energía y tecnología\",\"Instalación con ajustes en sitio y control de calidad\",\"Manual de cuidado y acuerdos de servicio\"],\"process\":[{\"title\":\"Diálogo de diseño\",\"description\":\"Traducimos marca, estilo de vida y ergonomía en conceptos de carpintería con aprobaciones detalladas.\"},{\"title\":\"Fabricación y acabado\",\"description\":\"Precisión CNC y acabados manuales en nuestro taller, con maquetas para puntos táctiles clave.\"},{\"title\":\"Instalación y postventa\",\"description\":\"Montaje escalonado, cierre de pendientes e inscripción a programas de cuidado continuo.\"}],\"ctaLabel\":\"Planifica una comisión de carpintería\"},\"outdoorArchitecture\":{\"name\":\"Arquitectura para exteriores\",\"excerpt\":\"Arquitectura interior-exterior que coreografía paisaje, agua y luz.\",\"summary\":\"Construimos terrazas, albercas, cocinas y pabellones pensados para recibir durante todo el año.\",\"seoDescription\":\"Titino Construction diseña y construye arquitectura exterior con ingeniería estructural, cuerpos de agua y detalles hospitalarios.\",\"metrics\":[{\"label\":\"Alcance ideal\",\"value\":\"Patios y jardines residenciales\"},{\"label\":\"Duración típica\",\"value\":\"Programas de 10–24 semanas\"},{\"label\":\"Disciplinas clave\",\"value\":\"Estructuras, cuerpos de agua, iluminación\"}],\"deliverables\":[\"Análisis del sitio con mapas de sol, viento y privacidad\",\"Ingeniería de cimentaciones y drenajes\",\"Diseño de cuerpos de agua y sistemas de filtrado\",\"Integración de cocina exterior, fuego y audio\",\"Coordinación de iluminación, paisajismo e irrigación\",\"Calibración estacional y plan de mantenimiento\"],\"process\":[{\"title\":\"Relato y zonificación\",\"description\":\"Mapeamos circulaciones, visuales y microclimas para coreografiar zonas experienciales.\"},{\"title\":\"Secuencia constructiva\",\"description\":\"Excavaciones, instalaciones y colados se programan para proteger el paisaje existente.\"},{\"title\":\"Activación y mantenimiento\",\"description\":\"Puesta en marcha, cuidado de plantaciones y visitas estacionales mantienen el entorno en su mejor versión.\"}],\"ctaLabel\":\"Diseña un refugio exterior\"}}},\"projects\":{\"title\":\"Transformaciones Destacadas\",\"subtitle\":\"Algunos de nuestros trabajos recientes\",\"stageLabels\":{\"before\":\"Antes\",\"process\":\"Proceso\",\"after\":\"Después\"},\"modal\":{\"close\":\"Cerrar proyecto\"},\"items\":{\"ridgeResidence\":{\"title\":\"Renovación Residencial Ridge\",\"location\":\"Staten Island, Nueva York\",\"description\":\"Una casa de montaña despojada hasta su estructura y reimaginada como un refugio cálido.\",\"story\":{\"before\":\"Ampliaciones fragmentadas y acabados desactualizados apagaban las vistas y la luz natural.\",\"process\":\"Abrimos la estructura con vigas glulam, revestimos núcleos en nogal y coreografiamos la iluminación con el terreno.\",\"after\":\"Un santuario abierto enmarcado en vidrio y madera que integra el paisaje en cada espacio.\"}},\"cortezLoft\":{\"title\":\"Loft Creativo Cortez\",\"location\":\"Brooklyn, Nueva York\",\"description\":\"Una nave industrial transformada en sede creativa con zonas adaptables para trabajo y hospitalidad.\",\"story\":{\"before\":\"Concreto expuesto y servicios a la vista hacían que el volumen se sintiera frío e inconcluso.\",\"process\":\"Aletas de acero a medida definieron vecindarios colaborativos mientras el microcemento cálido ancló la circulación.\",\"after\":\"Un loft luminoso que equilibra productividad y pausa, listo para noches de galería y residencias de clientes.\"}},\"harborHouse\":{\"title\":\"Renacimiento Casa Harbor\",\"location\":\"Staten Island, Nueva York\",\"description\":\"Propiedad histórica frente al mar renovada con materiales marinos y una paleta serena.\",\"story\":{\"before\":\"La exposición a la sal comprometió la fachada y la humedad afectó los interiores de madera.\",\"process\":\"Reconstruimos la envolvente, integramos triple vidrio sellado y aplicamos pinturas minerales transpirables.\",\"after\":\"Un refugio costero resiliente—neutros suaves, transiciones fluidas y vistas al litoral curadas.\"}},\"solsticeSpa\":{\"title\":\"Spa Jardín Solstice\",\"location\":\"Brooklyn, Nueva York\",\"description\":\"Un pabellón de bienestar interior-exterior que celebra la luz, el agua y las texturas artesanales.\",\"story\":{\"before\":\"El patio desaprovechado carecía de intimidad y uso durante todo el año.\",\"process\":\"Esculpimos plataformas en terrazas, instalamos marquesinas de vidrio y coreografiamos iluminación sensorial.\",\"after\":\"Un spa restaurador donde agua, calor y botánica componen un ritual cotidiano de calma.\"}}}},\"testimonials\":{\"title\":\"Con la confianza de clientes visionarios\",\"selectorLabel\":\"Voces de nuestros clientes\",\"items\":[{\"quote\":\"Titino Construction trató nuestra propiedad patrimonial como un archivo vivo—cada viga restaurada con reverencia e innovación.\",\"author\":\"Elena Martínez\",\"role\":\"Directora, Martínez & Co.\"},{\"quote\":\"Los videos semanales y la documentación meticulosa evitaron sorpresas. Entregaron antes de lo previsto sin comprometer calidad.\",\"author\":\"Marcus Lee\",\"role\":\"Fundador, Meridian Labs\"},{\"quote\":\"Su artesanía solo se compara con su empatía. Nuestro hogar se siente profundamente personal y universalmente admirado.\",\"author\":\"Sophia Grant\",\"role\":\"Residencia Particular\"}]},\"contact\":{\"title\":\"Diseñemos tu próximo proyecto\",\"subtitle\":\"Comparte tu visión o inspiración y nuestro estudio responderá en menos de 24 horas.\",\"form\":{\"name\":\"Nombre\",\"email\":\"Correo electrónico\",\"message\":\"Visión del proyecto, cronograma y presupuesto\",\"upload\":\"Adjunta brief, planos o imágenes\",\"helper\":\"Adjunta inspiración, presupuestos o fotos del sitio para responderte con detalle.\",\"submit\":\"Enviar mensaje\",\"successTitle\":\"Mensaje enviado\",\"successBody\":\"Gracias. Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo en breve.\"},\"whatsapp\":\"Escríbenos por WhatsApp\",\"email\":\"Envía un correo al estudio\",\"whatsappNumber\":\"+1 (347) 424-0746\",\"emailAddress\":\"titinoavila7329@gmail.com\"},\"footer\":{\"rights\":\"© {{year}} Titino Construction. Todos los derechos reservados.\",\"crafted\":\"Diseñado con respeto por la arquitectura y quienes la habitan.\"}}"));}),
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

//# sourceMappingURL=_e5236bc0._.js.map