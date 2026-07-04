import ProjectCard from "./ProjectCard.jsx"; 
import { projects } from "../../data/projects.js"; 
function ProjectsGrid() { 
return ( 
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {projects.map((project, index) => ( 
<ProjectCard key={project.id} {...project} index={index} /> 
))} 
</div> 
); 
} 
export default ProjectsGrid; 
