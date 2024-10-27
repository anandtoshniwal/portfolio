import ProjectCard from "@/components/projectCard";

const content = {
  hero: {
    heading: "UX Designer crafting innovative, user-centered solutions that drive meaningful impact",
    paragraphs: [
      "Hi there! I’m Mayuri, a passionate UX designer who loves to solve complex business and user problems in creative ways by focusing on end users and designing products that are easy to use, profitable, and appealing to their customers.",
      "Beyond UX design, I embrace my creativity through painting and gazing at the stars."
    ]
  },
  featuredProjects: {
    title: "Featured projects"
  },
  projects: [
    { id: 1, src: 'https://picsum.photos/seed/project1/600/400', alt: 'Project 1', title: 'Innovative UI Design' },
    { id: 2, src: 'https://picsum.photos/seed/project2/600/400', alt: 'Project 2', title: 'Mobile App Redesign' },
    { id: 3, src: 'https://picsum.photos/seed/project3/600/400', alt: 'Project 3', title: 'E-commerce Platform' },
    { id: 4, src: 'https://picsum.photos/seed/project4/600/400', alt: 'Project 4', title: 'Data Visualization Tool' },
  ]
};

export default function IndexPage() {
  return (
    <>
      <section className="container grid max-w-6xl items-center gap-6 pb-8 pt-6 md:pb-10 md:pt-20">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="pb-4 text-3xl font-semibold md:max-w-[850px] md:pb-0 md:text-4xl md:leading-snug">
            {content.hero.heading}
          </h1>
          {content.hero.paragraphs.map((paragraph, index) => (
            <p key={index} className="pb-4 text-xl text-muted-foreground md:pb-0 md:pt-5">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      
      <section className="container grid max-w-6xl items-center gap-6 pb-8 pt-6">
        <h2 className="text-3xl font-semibold md:max-w-[850px] md:text-3xl md:leading-snug">
          {content.featuredProjects.title}
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {content.projects.map((project) => (
            <ProjectCard key={project.id} src={project.src} alt={project.alt} title={project.title} />
          ))}
        </div>
      </section>
    </>
  );
}
