import { FiMessageSquare } from "react-icons/fi"; 
function TestimonialCard({ text, name, role, company }) { 
return ( 
<div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col"> <div className="w-12 h-12 rounded-full bg-gray-300 mb-4" /> 
<FiMessageSquare className="w-6 h-6 text-accent mb-4" /> 
<p className="text-secondary text-sm leading-relaxed flex-1 mb-6">{text}</p> <div> 
<p className="text-white font-medium text-sm">{name}</p> 
<p className="text-muted text-xs">{role}</p> 
<p className="text-muted text-xs">{company}</p> 
</div> 
</div> 
); 
} 
export default TestimonialCard; 
