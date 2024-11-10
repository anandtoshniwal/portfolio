
import ProjectCard from "@/components/projectCard"
const content = {
    hero: {
      heading: "Featured portfolio",
     
    },
}
const projects= [
    { id: 1, src: 'https://picsum.photos/seed/project1/600/400', alt: 'Project 1', title: 'Innovative UI Design' },
    { id: 2, src: 'https://picsum.photos/seed/project2/600/400', alt: 'Project 2', title: 'Mobile App Redesign' },
    { id: 3, src: 'https://picsum.photos/seed/project3/600/400', alt: 'Project 3', title: 'E-commerce Platform' },
    { id: 4, src: 'https://picsum.photos/seed/project4/600/400', alt: 'Project 4', title: 'Data Visualization Tool' },
    { id: 1, src: 'https://picsum.photos/seed/project1/600/400', alt: 'Project 1', title: 'Innovative UI Design' },
    { id: 2, src: 'https://picsum.photos/seed/project2/600/400', alt: 'Project 2', title: 'Mobile App Redesign' },
    { id: 3, src: 'https://picsum.photos/seed/project3/600/400', alt: 'Project 3', title: 'E-commerce Platform' },
    { id: 4, src: 'https://picsum.photos/seed/project4/600/400', alt: 'Project 4', title: 'Data Visualization Tool' },
  ]
export default function Projects() {
    return(
        <section className="container grid max-w-6xl items-center gap-6 pb-8 pt-6 md:pb-10 md:pt-20">
            <h1 className="w-full pb-4 text-center text-4xl font-extrabold md:pb-8 md:text-5xl md:leading-snug">
                {content.hero.heading}
            </h1>

           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* {projects.map((project) => (
                <ProjectCard key={project.id} src={project.src} alt={project.alt} title={project.title} />
            ))} */}
            </div>
        </section>
    )
}
