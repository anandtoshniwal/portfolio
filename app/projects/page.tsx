
import ProjectCard from "@/components/projectCard"
import projects from '../data/projects.json'
import { generateSlug } from "@/utilities/helper"
const content = {
    hero: {
      heading: "Featured portfolio",
     
    },
}

export default function Projects() {
    return(
        <section className="container grid max-w-6xl items-center gap-6 pb-8 pt-6 md:pb-10 md:pt-20">
            <h1 className="w-full pb-4 text-center text-4xl font-extrabold md:pb-8 md:text-5xl md:leading-snug">
                {content.hero.heading}
            </h1>

           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.items.map((project, index) => (
                <ProjectCard key={index} project={{ ...project, href: `/projects/${generateSlug(project.title)}` }}  />
            ))}
            </div>
        </section>
    )
}
