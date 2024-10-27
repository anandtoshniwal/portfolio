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
      icon: <Mail className="h-4 w-4 text-gray-600" />,
      text: "email@example.com",
    },
    {
      icon: <Linkedin className="h-4 w-4 text-gray-600" />,
      text: "linkedin.com/in/username",
    },
    {
      icon: <MapPin className="h-4 w-4 text-gray-600" />,
      text: "City, Country",
    },
    {
      icon: <Phone className="h-4 w-4 text-gray-600" />,
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
      <section className="container max-w-6xl flex flex-col md:flex-row items-center gap-6 pb-8 pt-6 md:pt-20 md:pb-10">
        {/* Text Section */}
        <div className="flex flex-col gap-6 mb-6 md:w-1/2">
          <h1 className="text-3xl pb-4 md:pb-0 font-semibold md:text-4xl md:leading-snug">
            {content.introduction.title}
          </h1>
          {content.introduction.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-xl pb-4 md:pb-0 text-muted-foreground md:pt-5">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Image Section */}
        <div className="relative flex flex-col justify-center items-center w-full md:w-1/2">
          <div className="w-full h-auto md:w-[300px] md:h-[300px] transform rotate-6">
            <Image
              src={content.introduction.imageSrc}
              alt={content.introduction.imageAlt}
              width={300}
              height={300}
              className="object-cover rounded-lg transform -rotate-6"
              layout="responsive"
            />
          </div>

          {/* Icons and Text Below Image */}
          <div className="flex flex-col space-y-4 mt-4 w-full md:w-[55%] pt-3">
            {content.contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="bg-white rounded-full p-2">
                  {info.icon}
                </div>
                <span className="text-muted-foreground">{info.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-6xl gap-6 pb-8 pt-6 md:pb-10">
        <h2 className="text-3xl font-semibold md:text-3xl md:leading-snug pb-6">Recommendations</h2>

        <div className="space-y-6">
          {content.recommendations.map((rec, index) => (
            <Card key={index} className="px-1 py-4 md:p-4 rounded-lg">
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  "{rec.text}"
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
