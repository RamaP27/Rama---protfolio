import Link from "next/link";
import { RiGithubLine, RiLinkedinLine, RiMailLine } from "react-icons/ri";
import { SiKaggle } from "react-icons/si";

export const socialData = [
  {
    name: "Github",
    link: "https://github.com/RamaP27",
    Icon: RiGithubLine,
  },
  {
    name: "Kaggle",
    link: "https://www.kaggle.com/ramakprayaga",
    Icon: SiKaggle,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ramap27/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Email",
    link: "mailto:r.prayaga9@gmail.com",
    Icon: RiMailLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
