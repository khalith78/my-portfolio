import { motion } from "framer-motion"; 
function ProjectCard({ title, image, index }) { 
return ( 
<motion.div 
initial={{ opacity: 0, y: 20 }} 
whileInView={{ opacity: 1, y: 0 }} 
viewport={{ once: true, amount: 0.3 }} 
transition={{ duration: 0.5, delay: index * 0.08 }} 
className="group cursor-pointer" 
> 
<div className="aspect-video rounded-2xl overflow-hidden bg-gray-600/70"> <img 
src={image} 
alt={title} 
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
/> 
</div> 
<h3 className="font-heading font-semibold text-white text-lg mt-4">{title}</h3> </motion.div> 
); 
}
export default ProjectCard; 
