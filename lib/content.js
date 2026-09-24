// =====================================================================
//  SITE CONTENT  -  edit everything here (brand, text, images).
//
//  IMPORTANT: all names, numbers, case studies and testimonials below are
//  PLACEHOLDERS. Replace them with real, approved content before going live.
//
//  IMAGES: the current images are designed placeholder artwork in
//  /public/images. To use your own photo, drop the file in /public/images and
//  change that slot's `src`, e.g.  src: "/images/my-photo.jpg"
//  (set `src: null` to show a plain coloured block instead).
// =====================================================================

export const brand = {
  name: "Auctra",
  email: "hello@example.com",
};

export const nav = [
  { label: "About", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#contact" },
  { label: "Case studies", href: "#results" },
  { label: "Blog", href: "#faq" },
];

export const hero = {
  platformsLabel: "Platforms we work with",
  // parts: plain text, and { i: "text" } for the italic serif accent
  title: ["Smarter programmatic media, built for ", { i: "growth" }],
  text: "We set up and run your DV360 campaigns end to end, from audiences and creatives to bidding and reporting, so every impression works harder.",
  primary: { label: "See our work", href: "#results" },
  secondary: { label: "How we work", href: "#process" },
  images: [
    { src: "/images/hero-1.jpg", tone: 0, alt: "" },
    { src: "/images/hero-2.jpg", tone: 1, alt: "" },
    { src: "/images/hero-3.jpg", tone: 2, alt: "" },
    { src: "/images/hero-4.jpg", tone: 3, alt: "" },
  ],
};

export const brands = {
  label: "Brands we've grown with.",
  items: [
    { name: "northline", style: "sans" },
    { name: "Elmore", style: "serif" },
    { name: "Kite&Co", style: "bold" },
    { name: "halden", style: "script" },
    { name: "Vesper", style: "serif" },
  ],
};

export const experience = {
  chip: "Experience",
  title: ["Years of ", { i: "programmatic" }, " expertise"],
  text: "Most agencies hand you a dashboard. We hand you results. Our team has spent years inside DV360 fine-tuning bids, audiences and creatives so your budget goes where it counts.",
  stats: [
    {
      value: "3.2x",
      label: "Average return on ad spend",
      text: "Within the first ninety days of launching a new account.",
    },
    {
      value: "47%",
      label: "Lower cost per acquisition",
      text: "Through smarter bidding and audience strategy.",
    },
    {
      value: "156M",
      label: "Impressions served",
      text: "Across all client campaigns in the past year.",
    },
  ],
  images: [
    { src: "/images/bento-1.jpg", tone: 4, alt: "" },
    { src: "/images/bento-2.jpg", tone: 5, alt: "" },
  ],
};

export const services = {
  chip: "Expertise",
  title: ["What we ", { i: "set up" }, " and run"],
  text: "We take care of the whole programmatic stack so you can focus on the business.",
  list: [
    "DV360 account setup and structure",
    "Audience and targeting strategy",
    "Creative and campaign management",
    "Reporting and weekly optimization",
  ],
  image: { src: "/images/services.jpg", tone: 6, alt: "" },
};

export const results = {
  chip: "Results",
  title: ["Campaigns that ", { i: "delivered" }],
  cases: [
    {
      image: { src: "/images/case-1.jpg", tone: 2, alt: "" },
      tags: ["Retail", "Display"],
      title: "3.4x return on ad spend in 60 days",
      text: "Rebuilt the audience structure and bidding in DV360 to cut wasted spend and scale what worked.",
      metrics: ["+58% Conversions", "-31% CPA", "2.4M Reach"],
    },
    {
      image: { src: "/images/case-2.jpg", tone: 4, alt: "" },
      tags: ["E-commerce", "YouTube"],
      title: "$112k revenue attributed in 30 days",
      text: "Launched full-funnel video and display campaigns with clean conversion tracking from day one.",
      metrics: ["+74% Revenue", "5.1x ROAS", "9.8M Views"],
    },
    {
      image: { src: "/images/case-3.jpg", tone: 6, alt: "" },
      tags: ["SaaS", "Display", "CTV"],
      title: "42% lower cost per lead in 90 days",
      text: "Consolidated fragmented line items and moved budget to the audiences that actually converted.",
      metrics: ["-42% CPL", "+120 Leads", "3.6M Reach"],
    },
  ],
  linkLabel: "View case study",
};

export const process = {
  chip: "Process",
  title: ["How we ", { i: "work" }],
  steps: [
    {
      title: "Audit and planning",
      text: "We review your goals, data and current setup, then map out the plan.",
      image: { src: "/images/process-1.jpg", tone: 1, alt: "" },
    },
    {
      title: "Setup and launch",
      text: "We build your DV360 account, audiences and creatives, and go live.",
      image: { src: "/images/process-2.jpg", tone: 3, alt: "" },
    },
    {
      title: "Optimize and scale",
      text: "We measure, test and keep improving performance every single week.",
      image: { src: "/images/process-3.jpg", tone: 0, alt: "" },
    },
  ],
};

export const benefits = {
  chip: "Benefits",
  title: ["Spend you can ", { i: "measure" }],
  text: "No vanity metrics. We focus on the numbers that actually grow your business.",
  items: [
    {
      icon: "database",
      title: "Full-funnel tracking",
      text: "See exactly where your money goes and what it brings back. No guessing, no surprises.",
    },
    {
      icon: "chart",
      title: "Lower acquisition costs",
      text: "Smarter bidding helps your budget go further and speeds up your growth.",
    },
    {
      icon: "support",
      title: "Hands-on support",
      text: "We're not a vendor. We're invested in your success and work like we own the outcome.",
    },
  ],
};

export const testimonials = {
  avatars: [
    { src: "/images/avatar-1.jpg", tone: 0 },
    { src: "/images/avatar-2.jpg", tone: 7 },
    { src: "/images/avatar-3.jpg", tone: 4 },
  ],
  small: "Trusted by 100+ growing brands",
  title: ["Trusted by ", { i: "brands" }, " across industries"],
  primary: { label: "Work with us", href: "#contact" },
  secondary: { label: "Leave a review", href: "#contact" },
  items: [
    {
      quote:
        "We were skeptical about handing over our media buying. Auctra made it painless and our results improved within weeks.",
      name: "Alex Morgan",
      role: "Co-founder, Brand One",
      logo: "koat",
    },
    {
      quote:
        "We'd been spending for two years with little to show for it. Three months in, our cost per acquisition dropped by almost half.",
      name: "Sam Rivera",
      role: "Founder, Brand Two",
      logo: "MAQ.",
    },
    {
      quote:
        "The reporting is clear, the strategy is sharp, and they explain every decision. It feels like an in-house team.",
      name: "Jordan Lee",
      role: "Head of marketing, Brand Three",
      logo: "think",
    },
    {
      quote:
        "They exceeded our expectations. Planning, setup and optimization were all handled with real care.",
      name: "Taylor Quinn",
      role: "COO, Brand Four",
      logo: "ella",
    },
    {
      quote:
        "Our campaigns went from scattered to structured. Bookings from paid channels grew by more than half in one quarter.",
      name: "Casey Brooks",
      role: "Marketing manager, Brand Five",
      logo: "ZEN",
    },
    {
      quote:
        "We hired them for one campaign and ended up keeping them for everything. Easily the best partner we've had.",
      name: "Riley Carter",
      role: "Brand director, Brand Six",
      logo: "lumé",
    },
  ],
};

export const faq = {
  chip: "Questions",
  title: ["Answers to common ", { i: "questions" }, " you may have"],
  text: `Everything you need to know about working with ${brand.name}.`,
  items: [
    {
      q: "How long until we see results?",
      a: "Most clients see early signals within the first two to four weeks, with meaningful performance gains by the end of the first quarter.",
    },
    {
      q: "Do you work inside DV360?",
      a: "Yes. We set up and manage Display & Video 360 for you, including account structure, audiences, creatives, bidding and reporting.",
    },
    {
      q: "What is your minimum contract length?",
      a: "We keep things flexible. Most engagements start with a three month term so we have enough time to test, learn and optimize.",
    },
    {
      q: "Do you work with all industries?",
      a: "We work with a wide range of industries, especially retail, e-commerce, SaaS and services. If you're unsure, just ask.",
    },
    {
      q: "How do you measure success?",
      a: "We agree on clear goals up front, such as return on ad spend or cost per acquisition, and report on them every week.",
    },
    {
      q: "How can I get in touch?",
      a: "Use the contact button on this page or email us directly and we'll get back to you within one business day.",
    },
  ],
};

export const cta = {
  title: ["Ready to ", { i: "scale" }, " your media?"],
  text: "Let's talk about your goals and build a programmatic plan that works.",
  primary: { label: "Get in touch", href: `mailto:${brand.email}` },
  secondary: { label: "About us", href: "#experience" },
  reel: [
    { src: "/images/reel-1.jpg", tone: 2, icon: "share", value: "200K" },
    { src: "/images/reel-2.jpg", tone: 3, icon: "bookmark", value: "24.7K" },
    { src: "/images/reel-3.jpg", tone: 4, icon: "eye", value: "1.4M" },
    { src: "/images/reel-4.jpg", tone: 5, icon: "heart", value: "100K" },
    { src: "/images/reel-5.jpg", tone: 6, icon: "share", value: "83K" },
    { src: "/images/reel-6.jpg", tone: 1, icon: "eye", value: "8.1K" },
    { src: "/images/reel-7.jpg", tone: 0, icon: "heart", value: "62K" },
    { src: "/images/reel-8.jpg", tone: 7, icon: "bookmark", value: "15K" },
  ],
};

export const footer = {
  newsletter: "Get weekly tips, platform updates, and programmatic insights.",
  note: "We respect your inbox. Unsubscribe anytime.",
  sitemap: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#experience" },
    { label: "Careers", href: "#" },
    { label: "Case studies", href: "#results" },
    { label: "Blog", href: "#" },
  ],
  company: [
    { label: "How we work", href: "#process" },
    { label: "Services", href: "#services" },
    { label: "Customers", href: "#testimonials" },
    { label: "Pricing", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { label: "X.com", icon: "x", href: "#" },
    { label: "LinkedIn", icon: "linkedin", href: "#" },
    { label: "Instagram", icon: "instagram", href: "#" },
    { label: "YouTube", icon: "youtube", href: "#" },
    { label: "Facebook", icon: "facebook", href: "#" },
  ],
  legal: [
    { label: "Privacy policy", href: "#" },
    { label: "Terms of service", href: "#" },
    { label: "Cookie settings", href: "#" },
  ],
};
