import { useEffect } from "react";
import ProjectsGrid from "../components/projects/ProjectsGrid.jsx";

function Projects() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="px-6 py-16 pt-8 md:px-10 md:pt-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-10 font-heading text-3xl font-semibold text-white md:text-4xl">Projects</h1>
        <ProjectsGrid />
      </div>
    </section>
  );
}

export default Projects;
