import ProjectCard from "@/components/projectCard";
import ProjectSlider from "@/components/projectSlider";

export default function IndexPage() {
  return (
    <>
    
      <section className="container max-w-6xl grid items-center gap-6 pb-8 pt-6 md:pt-20 md:pb-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl pb-4 md:pb-0 font-semibold md:text-4xl md:leading-snug md:max-w-[850px]">
            UX Designer crafting innovative, user-centered solutions that drive meaningful impact
          </h1>
          <p className="text-xl  pb-4 md:pb-0 text-muted-foreground md:pt-5">
            Hi there! I’m Mayuri, a passionate UX designer who loves to solve complex business and user problems in creative ways by focusing on end users and designing products that are easy to use, profitable, and appealing to their customers.
          </p>
          <p className="text-xl  pb-4 md:pb-0 text-muted-foreground md:pt-5">
            Beyond UX design, I embrace my creativity through painting and gazing at the stars.
          </p>
        </div>
      </section>
      
      <section className="container max-w-6xl grid items-center gap-6 pb-8 pt-6">
        <h2 className="text-3xl font-semibold md:text-3xl md:leading-snug md:max-w-[850px]">
          Featured projects
        </h2>
        
        {/* Slider for mobile */}
        <div className="block md:hidden">
          <ProjectSlider />
        </div>

        {/* Grid for desktop and tablet */}
        <div className="hidden md:grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 px-4 sm:px-0">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>


      
    </>
  );
}
