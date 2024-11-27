import tailwindcssAnimate from 'tailwindcss-animate';
import { createPreset, presets } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    darkMode: ['class'],
    content: [
        './components/**/*.{ts,tsx,js,jsx}',
        './app/**/*.{ts,tsx,js,jsx}',
        './content/**/*.{md,mdx,js,jsx}',
        './mdx-components.{ts,tsx,js,jsx}',
        './node_modules/fumadocs-ui/dist/**/*.js,jsx,ts,tsx',
    ],
    presets: [
        createPreset({
            addGlobalColors: true,
            preset: {
                ...presets.default,
                light: {
                    ...presets.default.light,
                    card: "324 20% 98%",
                    primary: "215 100% 50%",
                },
                dark: {
                    ...presets.default.dark,
                    foreground: "0 0% 98%",
                    popover: "0 0% 4%",
                    muted: "0 0% 8%",
                    border: "0 0% 14%",
                    accent: "0 0% 15%",
                    "accent-foreground": "0 0% 100%",
                    "muted-foreground": "0 0% 60%",
                    primary: "215 100% 50%",
                }
            }
        })
    ],
    plugins: [tailwindcssAnimate],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            }
        }
    }
};

export default tailwindConfig;