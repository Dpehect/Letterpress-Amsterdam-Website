// ─── lib/data.js — All static data for the Truus website ─────────────────────
// ES Module exports — imported by React components

// Marquee brand logos
export const brands = [
    { name: "oxxio", src: "/assets/Brand Logos SVG/oxxio_logo.svg" },
    { name: "hema", src: "/assets/Brand Logos SVG/hema_logo.svg" },
    { name: "kfc", src: "/assets/Brand Logos SVG/kfc_logo.svg" },
    { name: "swapfiets", src: "/assets/Brand Logos SVG/swapfiets_logo.svg" },
    { name: "anwb", src: "/assets/Brand Logos SVG/anwb_logo.svg" },
    { name: "netflix", src: "/assets/Brand Logos SVG/netflix_logo.svg" },
    { name: "ace-tate", src: "/assets/Brand Logos SVG/ace_tate_logo.svg" },
    { name: "getir", src: "/assets/Brand Logos SVG/getir_logo.svg" }
];

// Marquee background colors
export const colors = [
    "var(--color-green)",
    "var(--color-lightblue)",
    "var(--color-darkblue)",
    "var(--color-lightgreen)",
    "var(--color-orange)",
    "var(--color-maroon)",
    "var(--color-pink)"
];

// Footer social icon links + SVG markup
export const SOCIAL_ICONS = [];

// Service cards data
export const CARDS_DATA = [
    {
        color: 'green',
        sticker: 'camera',
        title: 'brand',
        services: ['Brand Strategy', '360° Creative', 'Art Direction', 'Copywriting', 'Editing', 'Motion Graphics', 'DTP']
    },
    {
        color: 'darkblue',
        sticker: 'phone',
        title: 'social',
        services: ['Social Media Strategy', 'Social Media Creative', 'TikTok/Social Shoots', 'Influencer Campaign', 'Scheduling Support', 'Community Management', 'Social Listening']
    },
    {
        color: 'orange',
        sticker: 'smiley',
        title: 'activations',
        services: ['Activation Strategy', 'Event Planning', 'Art Direction', 'Production']
    },
    {
        color: 'maroon',
        sticker: 'hand',
        title: 'video production',
        services: ['Campaign video', 'Branded content', 'Social content', 'Marketing material']
    },
    {
        color: 'pink',
        sticker: 'heart',
        title: 'with partners',
        services: ['PR/Journalism', '3D / VFX', 'food styling', 'Photography']
    }
];

// ─── Wiggle Intensity Config ────────────────────────────────────────────────
export const WIGGLE_CONFIG = {
    logoTruus: 4,
    socials: 5,
    jobHeading: 1,
    googleMap: 1,
    email: 1,
    whatsapp: 1,
};

// ─── Animation Configurations ─────────────────────────────────────────────
export const ANIMATION_CONFIG = {
    transitionScribble: {
        strokeWidthStart: "8%",
        strokeWidthMax: "31%",
        scale: 0.7,
        durationIn: 2.2,
        durationOut: 2.7
    }
};
