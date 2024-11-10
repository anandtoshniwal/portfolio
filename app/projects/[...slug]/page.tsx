// app/projects/[...slug]/page.tsx
import { generateSlug } from '@/utilities/helper'
import Image from 'next/image'
import projects from '../../data/projects.json'
import { notFound } from 'next/navigation'

// Define the type of a single project
interface Project {
  slug: string
  title: string
  description: string
  image: string
  altText: string
}

interface ProjectPageProps {
  project: Project
}

const ProjectPage = ({ params }: { params: { slug: string[] } }) => {
  // Get the slug from the params and generate the project slug
  const slug = params.slug.join('/')
  
  // Find the project by slug from the data
  const project = projects.items.find(
    (proj) => generateSlug(proj.title) === slug
  )

  if (!project) {
    notFound()  // Render a fallback if project is not found
  }

  return (
    <div className="project-page">
       <Image
    src={project.image}
    alt={project.altText}
    layout="responsive"  // This automatically adjusts the aspect ratio
    width={1000}         // Provide a large width value (used as the reference for aspect ratio)
    height={500}         // Provide a corresponding height to maintain aspect ratio
    className="w-full h-auto"  // Utility class for width 100% and height auto
  />
    </div>
  )
}

export default ProjectPage

// Generate static params for the dynamic routes
export async function generateStaticParams() {
  // Generate paths from the projects data
  const paths = projects.items.map((project) => ({
    slug: generateSlug(project.title), // Generating the slug based on the title
  }))

  // Returning the paths for each dynamic project page
  return paths.map((path) => ({
    params: { slug: [path.slug] }, // The slug needs to be an array for dynamic routes
  }))
}
