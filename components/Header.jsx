import Link from "next/link";
import Image from "next/image";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/" className="hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.svg"
              alt="RAMA K.P. Logo"
              width={220}
              height={44}
              priority
              className="w-auto h-11 object-contain filter hover:brightness-110 transition-all duration-300"
            />
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
