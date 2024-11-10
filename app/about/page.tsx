import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import content from '../data/about.json';
import { Testimonial } from "@/components/testimonial";

export default function Component() {
  // Helper function to map string icons to their respective Lucide icons
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Mail":
        return Mail;
      case "Linkedin":
        return Linkedin;
      case "MapPin":
        return MapPin;
      case "Phone":
        return Phone;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="container flex max-w-6xl flex-col items-center gap-6 pb-8 pt-6 md:flex-row md:pb-10 md:pt-20">
        {/* Text Section */}
        <div className="mb-6 flex flex-col gap-6 md:w-1/2">
          <h1 className="pb-4 text-3xl font-semibold md:pb-0 md:text-4xl md:leading-snug">
            {content.introduction.title}
          </h1>
          {content.introduction.paragraphs.map((paragraph, index) => (
            <p key={index} className="pb-4 text-xl text-muted-foreground md:pb-0 md:pt-5">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Image Section */}
        <div className="relative flex w-full flex-col items-center justify-center md:w-1/2">
          <div className="h-auto w-full rotate-6 md:size-[300px]">
            <Image
              src={content.introduction.imageSrc}
              alt={content.introduction.imageAlt}
              width={300}
              height={300}
              className="-rotate-6 rounded-lg object-cover"
              layout="responsive"
            />
          </div>

          {/* Icons and Text Below Image */}
          <div className="mt-4 flex w-full flex-col space-y-4 pt-3 md:w-[55%]">
            {content.contactInfo.map((info, index) => {
              const IconComponent = getIconComponent(info.icon);
              return (
                <div key={index} className="flex items-center space-x-2">
                  <div className="rounded-full bg-white p-2">
                    {IconComponent && <IconComponent className="size-4 text-gray-600" />}
                  </div>
                  <span className="text-muted-foreground">{info.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container max-w-6xl gap-6 pb-8 pt-6 md:pb-10">
        <h2 className="pb-6 text-3xl font-semibold md:text-3xl md:leading-snug">Recommendations</h2>

        <Testimonial testimonials={content.recommendations}/>
        
        <div className="space-y-6">
          {content.recommendations.map((rec, index) => (
            <Card key={index} className="rounded-lg px-1 py-4 md:p-4">
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  &quot;{rec.content}&ldquo;
                </p>
                <p className="mt-4 font-semibold text-muted-foreground">-- {rec.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
