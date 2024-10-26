import ProjectCard from "@/components/projectCard"

export default function IndexPage() {
  return (
    <>
      <section className="container max-w-6xl grid items-center gap-6 pb-8 pt-6 md:pt-20 md:pb-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-semibold  md:text-4xl md:leading-snug md:max-w-[850px]">
          UX Designer crafting innovative, user-centered solutions that drive meaningful impact
          </h1>
          <p className=" text-xl text-muted-foreground md:pt-5">
          Hi there! I’m Mayuri, a passionate UX designer who love to solve complex business and user problems in a creative ways by focusing on end user and design products that are easy to use, profitable and appealing to their customers
          </p>
          <p className=" text-xl text-muted-foreground md:pt-5">
            Beyond UX design, I embrace my creativity through painting and gazing at the stars.
          </p>
        </div>
      </section>
      <section className="container max-w-6xl grid items-center gap-6 pb-8 pt-6">
        <h2 className="text-3xl font-semibold md:text-3xl md:leading-snug md:max-w-[850px]">Featured projects</h2>
        <div className="grid gap-2 grid-cols-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </>
  )
}
