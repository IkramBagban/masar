// Masār — EN dictionary. Ported from designs/wasit/index.html (data-en strings).
// Grouped by page section. Static literals (logo, Masar AI, English/العربية
// labels, arrows, icons, timestamps, email placeholder) stay in components.
export type Dictionary = {
  nav: {
    how: string;
    why: string;
    faq: string;
    cta: string;
    signIn: string;
    account: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    titleC: string;
    lede: string;
    inputPh: string;
    chip1: string;
    chip2: string;
    chip3: string;
    chip4: string;
    trust1a: string;
    trust1b: string;
    trust2a: string;
    trust2b: string;
    trust3a: string;
    trust3b: string;
  };
  chat: {
    guide: string;
    u1: string;
    a1a: string;
    a1b: string;
    u2: string;
    a2: string;
    u3: string;
    a3: string;
    opt1: string;
    opt2: string;
    opt3: string;
    inputPh: string;
  };
  how: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    titleC: string;
    lede: string;
    card1q: string;
    card1a: string;
    card1tA: string;
    card1tB: string;
    card1d: string;
    card2q: string;
    opt1: string;
    opt2: string;
    opt3: string;
    opt4: string;
    card2tA: string;
    card2tB: string;
    card2d: string;
    urgLabel: string;
    urgValue: string;
    specLabel: string;
    specValue: string;
    tellLabel: string;
    tellValue: string;
    card3tA: string;
    card3tB: string;
    card3d: string;
  };
  why: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    ledeA: string;
    ledeB: string;
    oldLabel: string;
    oldTitle: string;
    old1q: string;
    old1a: string;
    old2q: string;
    old2a: string;
    old3q: string;
    old3a: string;
    old4q: string;
    old4a: string;
    newLabel: string;
    newTitle: string;
    new1t: string;
    new1d: string;
    new2t: string;
    new2d: string;
    new3t: string;
    new3d: string;
  };
  faq: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    lede: string;
    emergT: string;
    emergD: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
  };
  wait: {
    badge: string;
    titleA: string;
    titleB: string;
    lede: string;
    nameLabel: string;
    namePh: string;
    emailLabel: string;
    cta: string;
    ctaSuccess: string;
    success: string;
    fine: string;
  };
  footer: {
    how: string;
    why: string;
    faq: string;
    waitlist: string;
    account: string;
    legal: string;
    privacy: string;
    terms: string;
  };
  account: {
    title: string;
    cardSub: string;
    welcomeEyebrow: string;
    welcomeLede: string;
    clearerTitle: string;
    clearerLede: string;
    emailLabel: string;
    signedUpLabel: string;
    loading: string;
    error: string;
    authMissing: string;
    signOut: string;
  };
  auth: {
    eyebrow: string;
    signInTitle: string;
    signInLede: string;
    signUpTitle: string;
    signUpLede: string;
    p1t: string;
    p1d: string;
    p2t: string;
    p2d: string;
    p3t: string;
    p3d: string;
  };
};

export const en: Dictionary = {
  nav: {
    how: "How it works",
    why: "Why Masār",
    faq: "FAQ",
    cta: "Join waitlist",
    signIn: "Sign in",
    account: "My Account",
  },
  hero: {
    eyebrow: "A CLEARER WAY INTO HEALTHCARE",
    titleA: "Know where",
    titleB: "to ",
    titleC: "start.",
    lede: "Tell us what's bothering you. Masār asks a few questions and helps you understand your next step in healthcare: the right specialist, how urgent it is, and what to say when you get there.",
    inputPh: "What's bothering you?",
    chip1: "Headache",
    chip2: "Stomach pain",
    chip3: "Fever",
    chip4: "Back pain",
    trust1a: "In Arabic",
    trust1b: "and English",
    trust2a: "Private",
    trust2b: "by design",
    trust3a: "Not a diagnosis",
    trust3b: "Just guidance",
  },
  chat: {
    guide: "Your health guide",
    u1: "I've been having headaches and my eyes feel tired lately.",
    a1a: "I'm sorry to hear that. I'll ask a few questions to better understand what might be going on.",
    a1b: "First, how long have you been experiencing these headaches?",
    u2: "It's been about a week.",
    a2: "I see. Are your headaches constant, or do they come and go?",
    u3: "They come and go. Mostly in the evenings.",
    a3: "Do you also experience any of the following? You can select multiple options.",
    opt1: "Nausea",
    opt2: "Blurry vision",
    opt3: "Sensitivity to light",
    inputPh: "Type a message...",
  },
  how: {
    eyebrow: "HOW IT WORKS",
    titleA: "From symptoms to next steps,",
    titleB: "in ",
    titleC: "three simple steps.",
    lede: "Describe what's bothering you, answer a few questions, and get clear guidance for what to do next.",
    card1q: "What's bothering you?",
    card1a: "I've been having headaches and feeling tired for the past week.",
    card1tA: "Tell us what's",
    card1tB: "bothering you",
    card1d: "Describe your symptoms in Arabic or English, in your own words.",
    card2q: "How long have you been experiencing the headaches?",
    opt1: "A few days",
    opt2: "About a week",
    opt3: "More than a week",
    opt4: "Not sure",
    card2tA: "We ask a few",
    card2tB: "follow-up questions",
    card2d: "Masār asks 2–3 quick questions to understand your situation better.",
    urgLabel: "Urgency",
    urgValue: "See a doctor soon",
    specLabel: "Recommended specialist",
    specValue: "Neurologist",
    tellLabel: "What to tell your doctor",
    tellValue: "“Persistent headaches and fatigue for the past week…”",
    card3tA: "Get your",
    card3tB: "next step",
    card3d: "We show you the right specialist, how urgent it is, and what to say when you get there.",
  },
  why: {
    eyebrow: "WHY MASĀR",
    titleA: "Checkers scare you.",
    titleB: "Masār steadies you.",
    ledeA: "The same symptoms can feel very different depending on how you look them up.",
    ledeB: "Masār helps you cut through the noise and focus on what to do next.",
    oldLabel: "THE OLD WAY",
    oldTitle: "More questions. More anxiety.",
    old1q: "“Is this a migraine or something serious?”",
    old1a: "You search online and find conflicting information.",
    old2q: "“Should I go to the ER or wait?”",
    old2a: "You're not sure how urgent it is.",
    old3q: "“Which doctor should I see?”",
    old3a: "You spend time figuring out the right specialist.",
    old4q: "“How do I explain my symptoms?”",
    old4a: "You forget details and feel rushed at the clinic.",
    newLabel: "THE MASĀR WAY",
    newTitle: "A clearer path, from the start.",
    new1t: "Describe what you're experiencing",
    new1d: "In your own words, Arabic or English.",
    new2t: "Get a clear next step",
    new2d: "Understand how urgent it may be and the right type of clinician to consider.",
    new3t: "Go to your visit prepared",
    new3d: "Take a simple summary of your symptoms with you.",
  },
  faq: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    titleA: "Questions,",
    titleB: "answered.",
    lede: "Everything you need to know about how Masār helps you navigate healthcare with confidence.",
    emergT: "Emergency care",
    emergD:
      "In a critical emergency, call 998 (UAE) / 997 (KSA) / 999 directly. Masār is for guidance, not emergency response.",
    q1: "Is Masār a medical diagnosis?",
    a1: "No. Masār is navigation guidance, not a medical diagnosis or prescription. It helps you understand which specialist to see, how urgent your situation is, and what details to share when you arrive at the clinic.",
    q2: "What languages and dialects can I use?",
    a2: "You can describe what you feel in Modern Standard Arabic, everyday Gulf dialects, or English. Speak naturally in your own words. You don't need clinical vocabulary.",
    q3: "Is my personal health information private?",
    a3: "Yes, strictly. Health queries are encrypted end-to-end. We never sell your personal information to insurers, pharmaceutical companies, or third-party advertisers.",
    q4: "How does Masār decide which specialist to recommend?",
    a4: "Masār asks 2–3 targeted follow-up questions to understand your symptoms, duration, and red flags. It cross-references clinical guidance to point you to the right type of care.",
    q5: "Can I use Masār for family members or children?",
    a5: "Yes. You can describe symptoms for your child, spouse, or elderly parent. Masār will ask relevant age-specific questions to ensure appropriate routing.",
  },
  wait: {
    badge: "BATCH 1 ONBOARDING · DUBAI & RIYADH",
    titleA: "Know where to start.",
    titleB: "Join the waitlist.",
    lede: "Be first to access Masār across the Gulf. Get priority navigation guidance and clinic notes for you and your family.",
    nameLabel: "Full Name",
    namePh: "Ikram Bagban",
    emailLabel: "Email Address",
    cta: "Request early access →",
    ctaSuccess: "You're on the list ✓",
    success: "You're on the list! We'll invite you as soon as Batch 1 opens.",
    fine: "Private by design · No spam · Guidance only, not medical advice",
  },
  footer: {
    how: "How it works",
    why: "Why Masār",
    faq: "FAQ",
    waitlist: "Waitlist",
    account: "My Account",
    legal:
      "Guidance only, not medical advice or diagnosis. In an emergency dial 998 (UAE) / 997 (KSA) / 999.",
    privacy: "Privacy",
    terms: "Terms",
  },
  account: {
    title: "Your account",
    cardSub: "Here's your account information.",
    welcomeEyebrow: "WELCOME BACK",
    welcomeLede:
      "We're glad to have you here. Masār will help you navigate your health journey with clarity.",
    clearerTitle: "A clearer way into healthcare.",
    clearerLede: "Ask questions, get guidance, and make informed decisions.",
    emailLabel: "Email address",
    signedUpLabel: "Member since",
    loading: "Loading…",
    error: "Could not load your account.",
    authMissing:
      "Authentication is not configured. Set VITE_CLERK_PUBLISHABLE_KEY to enable sign-in.",
    signOut: "Sign out",
  },
  auth: {
    eyebrow: "MASĀR",
    signInTitle: "A clearer next step in care.",
    signInLede:
      "Sign in to continue your health journey with clarity and confidence.",
    signUpTitle: "A clearer next step in care.",
    signUpLede:
      "Sign up to start your health journey with clarity and confidence.",
    p1t: "Understand what to do next",
    p1d: "Get clear, personalized guidance.",
    p2t: "Know how urgent it may be",
    p2d: "Feel more prepared and less anxious.",
    p3t: "Arrive prepared for your visit",
    p3d: "Ask better questions and make informed decisions.",
  },
};
