import useStore from "@/store/store.js";

export function LangSwitch() {
    const { language, setLanguage } = useStore();

    const toggleLang = () => {
        setLanguage(language === "en" ? "fr" : "en");
    };

    return (
        <button
            onClick={toggleLang}
            className="flex items-center gap-2 rounded-full border border-pdc-border px-4 py-1.5 font-mono text-xs transition-all duration-300 hover:border-pdc-accent/30"
        >
            <span
                className={`transition-opacity duration-300 ${
                    language === "en"
                        ? "text-pdc-text opacity-100"
                        : "text-pdc-muted opacity-40"
                }`}
            >
                EN
            </span>

            <span className="text-pdc-muted">/</span>

            <span
                className={`transition-opacity duration-300 ${
                    language === "fr"
                        ? "text-pdc-text opacity-100"
                        : "text-pdc-muted opacity-40"
                }`}
            >
                FR
            </span>
        </button>
    );
}