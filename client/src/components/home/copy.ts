import { useLocale, type Locale } from "../../i18n";
import type { Dictionary } from "../../i18n/en";

// Shared accessor for the home hero + chat + how sections.
// All copy comes from the `t` dictionary (hero.*, chat.*, how.*) —
/// no hardcoded EN/AR strings in the components.
export function useHomeStrings(): { locale: Locale; t: Dictionary } {
  const { locale, t } = useLocale();
  return { locale, t };
}
