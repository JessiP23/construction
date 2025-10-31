module.exports = [
"[project]/components/language-toggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageToggle",
    ()=>LanguageToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/language-provider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function LanguageToggle() {
    const { language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const languages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAvailableLanguages"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center rounded-full border border-[rgba(36,48,71,0.12)] bg-white/70 px-1 py-1 text-xs font-semibold text-[rgba(36,48,71,0.7)] shadow-sm backdrop-blur-md transition",
        children: languages.map((code)=>{
            const isActive = language === code;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setLanguage(code),
                "aria-pressed": isActive,
                "aria-label": `${t("languageToggle.aria")}: ${code}`,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("relative w-12 rounded-full px-3 py-1 transition", isActive ? "bg-[var(--accent)] text-white shadow-lg" : "text-[rgba(36,48,71,0.7)] hover:text-[var(--foreground)]"),
                "data-cursor": "focus",
                children: t(`languageToggle.${code}`)
            }, code, false, {
                fileName: "[project]/components/language-toggle.tsx",
                lineNumber: 18,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/language-toggle.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[0.02em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60";
const variantStyles = {
    primary: "bg-[var(--accent)] text-white shadow-[0_18px_36px_rgba(192,128,46,0.28)] hover:-translate-y-[2px] hover:bg-[var(--accent-strong)] hover:shadow-[0_24px_48px_rgba(192,128,46,0.32)]",
    secondary: "border border-[rgba(36,48,71,0.14)] bg-white text-[var(--foreground)] shadow-sm hover:-translate-y-[2px] hover:shadow-[0_18px_34px_rgba(31,42,68,0.16)]",
    ghost: "bg-transparent text-[var(--foreground)] hover:bg-[rgba(36,48,71,0.08)]",
    outline: "border border-[rgba(36,48,71,0.22)] bg-transparent text-[var(--foreground)] hover:bg-[rgba(36,48,71,0.08)]",
    muted: "border border-[rgba(36,48,71,0.08)] bg-[rgba(255,255,255,0.8)] text-[rgba(36,48,71,0.7)] hover:bg-white"
};
const sizeStyles = {
    xs: "h-8 px-3 text-[0.65rem]",
    sm: "h-9 px-4 text-[0.7rem]",
    md: "h-11 px-6 text-[0.75rem]",
    lg: "h-12 px-8 text-[0.78rem]",
    icon: "h-11 w-11"
};
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ asChild = false, variant = "primary", size = "md", className, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(baseStyles, variantStyles[variant], sizeStyles[size], className),
        "data-cursor": "focus",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 44,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
}),
"[project]/components/navigation-bar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationBar",
    ()=>NavigationBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/language-toggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const SECTIONS = [
    {
        href: "#work",
        key: "navigation.work"
    },
    {
        href: "#process",
        key: "navigation.process"
    },
    {
        href: "#values",
        key: "navigation.values"
    },
    {
        href: "#contact",
        key: "navigation.contact"
    }
];
function NavigationBar() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed left-0 right-0 top-0 z-50 transition-all duration-500 bg-white/80 shadow-lg backdrop-blur-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/#",
                    className: "font-display text-xl tracking-[0.08em] text-slate-900 transition hover:text-slate-700",
                    "data-cursor": "link",
                    children: "Titino Construction"
                }, void 0, false, {
                    fileName: "[project]/components/navigation-bar.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden items-center gap-8 text-sm font-medium tracking-[0.08em] md:flex",
                    children: SECTIONS.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: section.href,
                            className: "text-slate-600 transition hover:text-slate-900",
                            "data-cursor": "link",
                            children: t(section.key)
                        }, section.href, false, {
                            fileName: "[project]/components/navigation-bar.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/navigation-bar.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageToggle"], {}, void 0, false, {
                            fileName: "[project]/components/navigation-bar.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            size: "sm",
                            variant: "outline",
                            className: "hidden md:inline-flex",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                children: t("hero.actions.contact")
                            }, void 0, false, {
                                fileName: "[project]/components/navigation-bar.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/navigation-bar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/navigation-bar.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/navigation-bar.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/navigation-bar.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardDescription",
    ()=>CardDescription,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("rounded-3xl border border-[rgba(36,48,71,0.12)] bg-white/85 p-8 shadow-[0_28px_56px_rgba(31,42,68,0.16)] backdrop-blur-md transition", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("mb-6 flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("font-display text-xl tracking-[0.06em] text-[var(--foreground)]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("text-sm leading-relaxed text-[rgba(36,48,71,0.68)]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/section-heading.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
function SectionHeading({ eyebrow, title, description, align = "left" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("flex flex-col gap-4", {
            "items-start text-left": align === "left",
            "items-center text-center": align === "center",
            "items-end text-right": align === "right"
        }),
        children: [
            eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-display text-sm tracking-[0.12em] text-[rgba(36,48,71,0.55)]",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/components/section-heading.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display text-4xl tracking-tight text-[var(--foreground)] md:text-5xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/section-heading.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-2xl text-base leading-relaxed text-[rgba(36,48,71,0.68)]",
                children: description
            }, void 0, false, {
                fileName: "[project]/components/section-heading.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/section-heading.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const rawProjects = [
    {
        id: "ridgeResidence",
        coverAlt: {
            en: "Completed alpine living room with expansive glazing and timber beams",
            es: "Sala alpina terminada con ventanales y vigas de madera"
        },
        palette: {
            light: "#f6f1eb",
            dark: "#151a24"
        },
        media: [
            {
                key: "before",
                type: "image",
                src: "/stairs1.png",
                alt: {
                    en: "Before renovation: compartmentalized mountain home under construction",
                    es: "Antes de la renovación: vivienda de montaña compartimentada en obra"
                }
            },
            {
                key: "after",
                type: "image",
                src: "/stairs.png",
                alt: {
                    en: "After: open-plan alpine living room with panoramic glazing",
                    es: "Después: sala alpina de planta abierta con ventanales panorámicos"
                }
            }
        ]
    },
    {
        id: "cortezLoft",
        coverAlt: {
            en: "Creative loft with warm microcement floors and collaborative zones",
            es: "Loft creativo con pisos de microcemento cálidos y zonas colaborativas"
        },
        palette: {
            light: "#f4ede6",
            dark: "#171819"
        },
        media: [
            {
                key: "after",
                type: "image",
                src: '/door.png',
                alt: {
                    en: "Before: raw industrial loft with exposed concrete",
                    es: "Antes: loft industrial crudo con concreto expuesto"
                }
            },
            {
                key: "before",
                type: "image",
                src: "/door1.png",
                alt: {
                    en: "After: luminous creative loft with layered work lounges",
                    es: "Después: loft creativo luminoso con zonas de trabajo estratificadas"
                }
            }
        ]
    },
    {
        id: "harborHouse",
        cover: "/renovation.png",
        coverAlt: {
            en: "Waterfront residence with soft neutral interiors overlooking the harbor",
            es: "Residencia frente al mar con interiores neutros y vistas a la bahía"
        },
        palette: {
            light: "#eef4f6",
            dark: "#101827"
        },
        media: [
            {
                key: "after",
                type: "image",
                src: "/renovation.png",
                alt: {
                    en: "Before: weathered waterfront facade with peeling paint",
                    es: "Antes: fachada frente al mar desgastada con pintura descascarada"
                }
            },
            {
                key: "before",
                type: "image",
                src: "/renovation1.png",
                alt: {
                    en: "After: living room with marine glazing and serene palette",
                    es: "Después: sala con cristalería marina y paleta serena"
                }
            }
        ]
    },
    {
        id: "solsticeSpa",
        cover: "/bathroom.png",
        coverAlt: {
            en: "Indoor-outdoor spa pavilion surrounded by greenery",
            es: "Pabellón de spa interior-exterior rodeado de vegetación"
        },
        palette: {
            light: "#f1f4ed",
            dark: "#101b15"
        },
        media: [
            {
                key: "after",
                type: "image",
                src: '/bathroom.png',
                alt: {
                    en: "Before: underutilized courtyard with sparse landscaping",
                    es: "Antes: patio subutilizado con paisajismo escaso"
                }
            },
            {
                key: "process",
                type: "image",
                src: '/bathroom1.png',
                alt: {
                    en: "Before: underutilized courtyard with sparse landscaping",
                    es: "Antes: patio subutilizado con paisajismo escaso"
                }
            },
            {
                key: "process",
                type: "image",
                src: '/bathroom2.png',
                alt: {
                    en: "Process: concrete forming and pool waterproofing",
                    es: "Proceso: encofrado de concreto y impermeabilización de piscina"
                }
            },
            {
                key: "before",
                type: "image",
                src: '/bathroom3.png',
                alt: {
                    en: "After: tranquil hydrotherapy pavilion with lush planting",
                    es: "Después: pabellón de hidroterapia sereno con vegetación abundante"
                }
            }
        ]
    }
];
rawProjects.push({
    id: "cliffHouse",
    coverAlt: {
        en: "Cliffside residence with panoramic decks",
        es: "Residencia en acantilado con terrazas panorámicas"
    },
    palette: {
        light: "#f6f4ef",
        dark: "#0f2430"
    },
    media: [
        {
            key: "before",
            type: "image",
            src: "/build.png",
            alt: {
                en: "Before: raw cliff access and retaining walls",
                es: "Antes: acceso sin terminar y muros de contención"
            }
        },
        {
            key: "after",
            type: "image",
            src: "/build1.png",
            alt: {
                en: "After: terraces and glazing embracing the view",
                es: "Después: terrazas y acristalamiento que abrazan la vista"
            }
        }
    ]
}, {
    id: "studioVista",
    coverAlt: {
        en: "Creative studio with layered volumes",
        es: "Estudio creativo con volúmenes estratificados"
    },
    palette: {
        light: "#f5f2ec",
        dark: "#151018"
    },
    media: [
        {
            key: "before",
            type: "image",
            src: "/home.png",
            alt: {
                en: "Before: closed loft with limited light",
                es: "Antes: loft cerrado con luz limitada"
            }
        },
        {
            key: "after",
            type: "image",
            src: "/home1.png",
            alt: {
                en: "After: open studio with warm finishes",
                es: "Después: estudio abierto con acabados cálidos"
            }
        }
    ]
}, {
    id: "orchardCottage",
    coverAlt: {
        en: "Cottage set among orchard plantings",
        es: "Cabaña entre plantaciones de huerto"
    },
    palette: {
        light: "#eef6ee",
        dark: "#102015"
    },
    media: [
        {
            key: "before",
            type: "image",
            src: "/new.png",
            alt: {
                en: "Before: small outdated bath",
                es: "Antes: baño pequeño y anticuado"
            }
        },
        {
            key: "after",
            type: "image",
            src: "/new1.png",
            alt: {
                en: "After: bright spa-like bathroom",
                es: "Después: baño luminoso estilo spa"
            }
        }
    ]
}, {
    id: "urbanRow",
    coverAlt: {
        en: "Rowhouse retrofit with modern joinery",
        es: "Reforma de vivienda adosada con carpintería moderna"
    },
    palette: {
        light: "#f3efe8",
        dark: "#111318"
    },
    media: [
        {
            key: "before",
            type: "image",
            src: "/paint.png",
            alt: {
                en: "Before: worn finishes and compartmentalized plan",
                es: "Antes: acabados desgastados y planta compartimentada"
            }
        },
        {
            key: "after",
            type: "image",
            src: "/paint1.png",
            alt: {
                en: "After: unified plan and refined palette",
                es: "Después: planta unificada y paleta refinada"
            }
        }
    ]
}, {
    id: "sunsetRetreat",
    coverAlt: {
        en: "Sunset-facing pavilion with deep overhangs",
        es: "Pabellón con vista al atardecer y aleros profundos"
    },
    palette: {
        light: "#fbf6f0",
        dark: "#241814"
    },
    media: [
        {
            key: "before",
            type: "image",
            src: "/remod.png",
            alt: {
                en: "Before: segmented circulation and stairs",
                es: "Antes: circulación segmentada y escaleras"
            }
        },
        {
            key: "after",
            type: "image",
            src: "/remod1.png",
            alt: {
                en: "After: repaired stairs and connected volumes",
                es: "Después: escaleras reparadas y volúmenes conectados"
            }
        }
    ]
}, {
    id: "harborLoft",
    coverAlt: {
        en: "Adaptive reuse loft near the harbor",
        es: "Loft de reutilización adaptativa cerca de la bahía"
    },
    palette: {
        light: "#eef3f6",
        dark: "#08121a"
    },
    media: [
        {
            key: "before",
            type: "image",
            src: "/wall.png",
            alt: {
                en: "Before: closed facade and limited openings",
                es: "Antes: fachada cerrada y aberturas limitadas"
            }
        },
        {
            key: "after",
            type: "image",
            src: "/wall1.png",
            alt: {
                en: "After: new openings and coastal finishes",
                es: "Después: nuevas aberturas y acabados costeros"
            }
        }
    ]
});
const projects = rawProjects.map((p)=>{
    const media = p.media ?? [];
    const afterMedia = media.find((m)=>m.key === "after");
    const first = media[0];
    const cover = p.cover ?? afterMedia?.src ?? first?.src ?? "";
    return {
        ...p,
        cover,
        media: media
    };
});
}),
"[project]/app/projects/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2d$bar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation-bar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$heading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-heading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function ProjectsPage() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const projectCopy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>t("projects.items", {
            returnObjects: true
        }), [
        t
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2d$bar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavigationBar"], {}, void 0, false, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-6 md:px-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$heading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHeading"], {
                            description: null
                        }, void 0, false, {
                            fileName: "[project]/app/projects/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].map((project)=>{
                                const before = project.media.find((m)=>m.key === "before");
                                const after = project.media.find((m)=>m.key === "after");
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-0 group hover:shadow-lg transition-shadow duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                className: "relative overflow-hidden h-64 sm:h-80 md:h-96",
                                                children: before ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: before.src,
                                                    alt: before.alt.en,
                                                    fill: true,
                                                    className: "object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/projects/page.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 25
                                                }, this) : null
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/page.tsx",
                                                lineNumber: 39,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                className: "relative overflow-hidden h-64 sm:h-80 md:h-96",
                                                children: after ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: after.src,
                                                    alt: after.alt.en,
                                                    fill: true,
                                                    className: "object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/projects/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 25
                                                }, this) : null
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/page.tsx",
                                                lineNumber: 49,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/projects/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 19
                                    }, this)
                                }, project.id, false, {
                                    fileName: "[project]/app/projects/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/projects/page.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_23937db4._.js.map