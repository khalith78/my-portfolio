function SectionMarker({ number }) { 
return ( 
<div className="flex items-center gap-4 max-w-7xl mx-auto px-6 md:px-10 mb-16"> <span className="text-accent font-heading font-semibold text-sm">{number} —</span> <div className="flex-1 h-px bg-border" /> 
</div> 
); 
} 
export default SectionMarker; 
