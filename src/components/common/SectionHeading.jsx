function SectionHeading({ eyebrow, title, highlight, align = "left" }) { 
return ( 
<div className={align === "center" ? "text-center" : "text-left"}> 
{eyebrow && ( 
<p className="text-accent font-medium text-sm mb-2 uppercase 
tracking-wide">{eyebrow}</p> 
)} 
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-white"> {title} {highlight && <span className="text-accent">{highlight}</span>} </h2> 
</div> 
); 
} 
export default SectionHeading; 
