// Constants for the wedding invitation

export const COLORS = {
    primary: {
        teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a'
        }
    },
    neutral: {
        white: '#ffffff',
        gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827'
        }
    }
};

export const FONTS = {
    primary: 'Vollkorn, serif',
    heading: 'Vollkorn, serif',
    script: 'Vollkorn, cursive'
};

export const BREAKPOINTS = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
};

export const ANIMATIONS = {
    duration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms'
    },
    easing: {
        linear: 'linear',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
};

export const SECTIONS = {
    hero: 'hero',
    introduction: 'introduction',
    gallery: 'gallery',
    events: 'events',
    rsvp: 'rsvp',
    contact: 'contact'
} as const;

export type SectionKey = keyof typeof SECTIONS;
