import { motion } from "framer-motion"; 
function ServiceCard({ icon: Icon, title, description, index }) { 
return ( 
<motion.div 
initial={{ opacity: 0, y: 20 }} 
whileInView={{ opacity: 1, y: 0 }} 
viewport={{ once: true, amount: 0.3 }} 
transition={{ duration: 0.5, delay: index * 0.08 }} 
className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-colors duration-300" 
> 
<div className="w-14 h-14 rounded-xl bg-iconBox border border-accent/40 flex items-center justify-center mb-6"> 
<Icon className="w-6 h-6 text-accent" /> 
</div>
<h3 className="font-heading font-semibold text-lg text-white mb-3">{title}</h3> <p className="text-secondary text-sm leading-relaxed">{description}</p> </motion.div> 
); 
} 
export default ServiceCard; 
