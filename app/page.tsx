import ProjectCard from "@/components/projectCard";
import projects from './data/projects.json'
import { generateSlug } from "@/utilities/helper";

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
        {projects.items.map((project_props, index) => (
          <ProjectCard 
            key={index} 
            project={{ ...project_props, href: `/projects/${generateSlug(project_props.title)}` }} 
          />
        ))}

        </div>
      </section>
    </>
  );
}
