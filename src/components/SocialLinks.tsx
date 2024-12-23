import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import { ImWhatsapp } from "react-icons/im";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";

const socialData = [
  {
    title: "Youtube",
    icon: <Youtube />,
    href: "https://www.youtube.com",
  },
  {
    title: "GitHub",
    icon: <Github />,
    href: "https://www.youtube.com",
  },
  {
    title: "Linkedin",
    icon: <Linkedin />,
    href: "https://www.youtube.com",
  },
  {
    title: "Facebook",
    icon: <Facebook />,
    href: "https://www.youtube.com",
  },
  {
    title: "Instagram",
    icon: <Instagram />,
    href: "https://www.youtube.com",
  },
  {
    title: "Whatssap",
    icon: <ImWhatsapp />,
    href: "https://www.youtube.com",
  },
];

const SocialLinks = () => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-3 mb-5">
        {socialData?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <div className="text-lightSky/80 border border-lightSky/80 rounded-full p-2.5 hover:bg-lightSky/10 hover:border-lightSky hoverEffect">
                <Link
                  href={item?.href}
                  target="_blank"
                >
                  <span>{item?.icon}</span>
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent className=" bg-hoverColor text-black font-semibold">
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};
export default SocialLinks;
