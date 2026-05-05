import { useEffect, useRef, useState } from "preact/hooks";
import { languages } from "@/i18n/ui";

const chevron = (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    class="h-4 w-4"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function LanguageDropdown({ currentLang, route }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const getHref = (lang) => (route ? `/${lang}/${route}` : `/${lang}/`);

  useEffect(() => {
    const onClick = (event) => {
      if (!menuRef.current || menuRef.current.contains(event.target)) return;
      setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div class="relative" ref={menuRef}>
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 shadow-sm transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800/90 dark:text-neutral-200 dark:hover:bg-neutral-700"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span class="hidden sm:inline">{languages[currentLang]}</span>
        <span class="sm:hidden">{currentLang.toUpperCase()}</span>
        <span class={`transition ${open ? "rotate-180" : "rotate-0"}`}>
          {chevron}
        </span>
      </button>

      <ul
        class={`absolute right-0 z-30 mt-2 min-w-45 rounded-2xl border border-neutral-200 bg-white/95 p-2 shadow-xl backdrop-blur transition ${
          open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
        } dark:border-neutral-700 dark:bg-neutral-900/95`}
        role="listbox"
      >
        {Object.entries(languages).map(([lang, label]) => {
          const isActive = lang === currentLang;
          return (
            <li key={lang} style="margin-bottom: 6px;">
              <a
                href={getHref(lang)}
                class={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-emerald-600 text-white"
                    : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{label}</span>
                <span class="text-[11px] font-bold">{lang.toUpperCase()}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
