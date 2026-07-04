import { NavLink } from "react-router-dom"; 
import { FiLinkedin, FiInstagram } from "react-icons/fi"; 
import { SiPinterest } from "react-icons/si"; 
const navigation = [ 
{ label: "Home", to: "/" }, 
{ label: "About", to: "/#about" }, 
{ label: "Services", to: "/#services" }, 
{ label: "Projects", to: "/projects" }, 
{ label: "Testimonials", to: "/#testimonials" }, 
{ label: "Contact", to: "/#contact" }, 
]; 
const serviceLinks = [
"Branding & Identity", 
"Marketing & Ads", 
"Digital & Web Design", 
"Video Production", 
"UI/UX", 
"MoGraph & Explainer", 
]; 
function Footer() { 
return ( 
<footer className="mt-20 border-t border-border md:mt-28"> 
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-3 md:px-10"> 
<div> 
<div className="flex items-center gap-2 mb-4"> 
 <img
            src="/assets/logo.svg"
            alt="Logo"
            className="w-8 h-8 rounded-full"
          /> 
<span className="font-heading font-semibold text-white">Khalith.</span> </div> 
<p className="text-secondary text-sm max-w-xs"> 
Graphic designer based in India. Crafting visual identities that communicate clearly, connect emotionally, and drive real results. 
</p> 
<div className="flex items-center gap-3 mt-5"> 
<a href="#" aria-label="LinkedIn" className="text-secondary hover:text-accent focus-ring rounded"> 
<FiLinkedin className="w-5 h-5" /> 
</a> 
<a href="#" aria-label="Instagram" className="text-secondary hover:text-accent focus-ring rounded"> 
<FiInstagram className="w-5 h-5" /> 
</a> 
<a href="#" aria-label="Pinterest" className="text-secondary hover:text-accent focus-ring rounded"> 
<SiPinterest className="w-5 h-5" /> 
</a> 
</div> 
</div> 
<div> 
<h4 className="text-accent font-heading font-semibold mb-4">Navigation</h4> <ul className="space-y-3">
{navigation.map((item) => ( 
<li key={item.label}> 
<NavLink to={item.to} className="text-secondary hover:text-white text-sm transition-colors"> 
{item.label} 
</NavLink> 
</li> 
))} 
</ul> 
</div> 
<div> 
<h4 className="text-accent font-heading font-semibold mb-4">Services</h4> <ul className="space-y-3"> 
{serviceLinks.map((item) => ( 
<li key={item} className="text-secondary text-sm"> 
{item} 
</li> 
))} 
</ul> 
</div> 
</div> 
<div className="border-t border-border"> 
<div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-muted text-xs"> 
<p>© 2026 Mohamed Khalith. All rights reserved.</p> 
<p>Designed & built with <span className="text-red-500">❤</span> in India.</p> 
</div> 
</div> 
</footer> 
); 
} 
export default Footer; 
