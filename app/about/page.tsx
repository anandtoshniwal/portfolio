// YourComponent.js
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const content = {
  introduction: {
    title: "I love to observe, learn and simplify things for myself and others.",
    paragraphs: [
      "As a Product/UX designer, I blend creativity and empathy to bridge the gap between user needs and business objectives by crafting innovative solutions that drive impact.",
      "I believe great design starts with listening, understanding user needs, and finding those insights that lead to meaningful solutions. I thrive in collaborative environments where innovation and continuous learning drive the design process.",
    ],
    imageSrc: "https://picsum.photos/seed/project3/300/300",
    imageAlt: "Profile picture overlooking a waterfall",
  },
  contactInfo: [
    {
      icon: <Mail className="size-4 text-gray-600" />,
      text: "email@example.com",
    },
    {
      icon: <Linkedin className="size-4 text-gray-600" />,
      text: "linkedin.com/in/username",
    },
    {
      icon: <MapPin className="size-4 text-gray-600" />,
      text: "City, Country",
    },
    {
      icon: <Phone className="size-4 text-gray-600" />,
      text: "+123 456 7890",
    },
  ],
  recommendations: [
    {
      text: "Mayuri is an exceptional UX Designer with a proven track record of successfully designing complex data-heavy projects. Her ability to think from the user's perspective, combined with her strong technical skills, makes her a valuable asset to any team. Beyond her technical abilities, Mayuri is a fantastic teammate. She is collaborative, supportive, and always willing to go the extra mile to ensure the success of the project. I wholeheartedly recommend Mayuri and believe she will continue to make a significant impact in her career.",
      author: "UX Architect",
    },
    {
      text: "Mayuri is a skilled UI/UX designer. Her contributions to our product have been instrumental. I especially want to highlight her ability to quickly adapt to changes in requirements and her work ethic and enthusiasm.",
      author: "CSM and Product Owner",
    },
    {
      text: "Had a great time working with Mayuri. She is an excellent UX/UI designer. Hope to work with her again.",
      author: "Head of Technical Unit",
    },
    {
      text: "I had the pleasure of working with Mayuri on a UI/UX design project, and I couldn't have asked for a more talented and dedicated professional. She possesses a rare combination of creativity, technical expertise, and a keen eye for detail. Her ability to understand user needs and translate them into intuitive and visually stunning designs is truly remarkable.",
      author: "Software Engineer",
    },
  ],
};

export default function Component() {
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
            {content.contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="rounded-full bg-white p-2">
                  {info.icon}
                </div>
                <span className="text-muted-foreground">{info.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-6xl gap-6 pb-8 pt-6 md:pb-10">
        <h2 className="pb-6 text-3xl font-semibold md:text-3xl md:leading-snug">Recommendations</h2>

        <div className="space-y-6">
          {content.recommendations.map((rec, index) => (
            <Card key={index} className="rounded-lg px-1 py-4 md:p-4">
              <CardContent>
                <p className="text-lg text-muted-foreground">
                &quot;{rec.text}&ldquo;
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
