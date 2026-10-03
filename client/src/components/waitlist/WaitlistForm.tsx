import { useMutation } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import { useLocale } from "../../i18n";
import { joinWaitlist } from "../../lib/api";

export function WaitlistForm() {
  const { locale, t } = useLocale();
  const w = t.wait;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const mutation = useMutation({
    mutationFn: () =>
      joinWaitlist({ name: name.trim(), email: email.trim(), locale }),
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (mutation.isPending || mutation.isSuccess) return;
    mutation.mutate();
  }

  const sending = mutation.isPending;
  const done = mutation.isSuccess;

  return (
    <div className="mt-10 bg-white border border-line rounded-[28px] p-6 md:p-9 shadow-[0_20px_50px_-30px_rgba(21,33,31,.25)] text-start">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="waitlistName"
              className="block text-[13px] font-medium text-ink/70 mb-1.5"
            >
              {w.nameLabel}
            </label>
            <input
              id="waitlistName"
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={80}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={w.namePh}
              disabled={sending || done}
              className="w-full bg-[#FAFCFA] border border-line rounded-[18px] px-4 py-3 text-[15px] outline-none focus:border-pine transition"
            />
          </div>
          <div>
            <label
              htmlFor="waitlistEmail"
              className="block text-[13px] font-medium text-ink/70 mb-1.5"
            >
              {w.emailLabel}
            </label>
            <input
              id="waitlistEmail"
              name="email"
              required
              type="email"
              dir="ltr"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ayesha@example.com"
              disabled={sending || done}
              className="w-full bg-[#FAFCFA] border border-line rounded-[18px] px-4 py-3 text-[15px] outline-none focus:border-pine transition text-left"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={sending || done}
          className="w-full bg-pill text-white font-semibold text-[15.5px] py-4 rounded-full hover:opacity-90 active:scale-[.99] transition shadow-sm flex items-center justify-center gap-2 mt-2 disabled:opacity-80"
        >
          {sending && (
            <span
              aria-hidden="true"
              className="spin w-4 h-4 rounded-full border-2 border-white/40 border-t-white inline-block"
            />
          )}
          <span>{done ? w.ctaSuccess : w.cta}</span>
        </button>
        {done && (
          <div
            key="waitlist-success"
            className="msg p-4 rounded-[18px] bg-[#EAF4EE] border border-pine/25 text-pine text-[14px] font-medium text-center"
            role="status"
          >
            🎉 <span>{w.success}</span>
          </div>
        )}
        {mutation.isError && (
          <p
            className="p-4 rounded-[18px] bg-red-50 border border-red-200 text-red-700 text-[14px] font-medium text-center"
            role="alert"
          >
            {mutation.error.message}
          </p>
        )}
        <p className="text-center text-[12.5px] text-ink/45 mt-3">
          {w.fine}
        </p>
      </form>
    </div>
  );
}
