/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                accent: '#aa3bff',
                'accent-bg': 'rgba(170, 59, 255, 0.1)',
                'text-h': '#08060d',
            },
            fontFamily: {
                sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
            }
        },
    },
    plugins: [],
}