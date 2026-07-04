/** @type {import('tailwindcss').Config} */ 
export default { 
content: ["./index.html", "./src/**/*.{js,jsx}"], 
theme: { 
extend: { 
colors: { 
primary: "#0D0D0D", 
card: "#1A1A1A", 
cardAlt: "#1F1F1F", 
border: "#2A2A2A", 
accent: "#FF6B35", 
accent2: "#FF4500", 
iconBox: "#3A1F14", 
muted: "#6B6B6B", 
secondary: "#A3A3A3", 
}, 
fontFamily: { 
heading: ["Poppins", "sans-serif"], 
body: ["Inter", "sans-serif"],
}, 
borderRadius: { 
xl2: "1.25rem", 
}, 
boxShadow: { 
glow: "0 0 60px rgba(255, 107, 53, 0.35)", 
}, 
}, 
}, 
plugins: [], 
}; 
