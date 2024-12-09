"use client";

import { navbarData } from "@/Constans";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className=" border-b border-b-hoverColor/50 bg-bodyColor text-white/80">
      <Container className=" py-5 flex items-center justify-between ">
        <Logo
          title="John"
          subtitle="."
        />
        <div className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          {navbarData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={` hover:text-hoverColor hoverEffect relative group ${
                pathname === item?.href
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
};

export default Header;
