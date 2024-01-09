"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo_transparent from "../../logo_transparent.png";

export type Pages = "Startseite" | "Services" | "Portfolio" | "Kontakt";

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  useEffect(() => {
    const handleRouteChange = () => {
      console.log("Route changed");
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  // Function to determine if the link is active
  const isLinkActive = (href: string) => currentPath === href;

  // Convert Page Type to Window Location
  const convertPageTypeToWindowLocation = (page: Pages) => {
    switch (page) {
      case "Startseite":
        return "/";
      case "Services":
        return "/services";
      case "Portfolio":
        return "/portfolio";
      case "Kontakt":
        return "/kontakt";
    }
  };

  console.log(currentPath);
  console.log(isLinkActive("/"));

  //variables
  const navBarLinkTextColor = "text-gray-800 text-xl relative group";
  const boxAroundLink = (type: Pages) =>
    !isLinkActive(convertPageTypeToWindowLocation(type))
      ? `absolute inset-0 bg-blue-200 text-black opacity-0 group-hover:opacity-20 transition-opacity transform scale-150 rounded-md`
      : `absolute inset-0 bg-blue-200 opacity-30 transition-opacity transform scale-150 rounded-md`;
  console.log(boxAroundLink);

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-black font-bold text-2xl">
            <a>
              <Image
                src={logo_transparent}
                alt="Logo"
                width={300}
                height={80}
              />
            </a>
          </div>
          <div className="space-x-12">
            <a href="#" className={navBarLinkTextColor}>
              <span className="text-black">Startseite</span>
              <div className={boxAroundLink("Startseite")}></div>
            </a>
            <a href="#" className={navBarLinkTextColor}>
              <span className="text-black">Services</span>
              <div className={boxAroundLink("Services")}></div>
            </a>
            <a href="#" className={navBarLinkTextColor}>
              <span className="text-black">Portfolio</span>
              <div className={boxAroundLink("Portfolio")}></div>
            </a>
            <a href="#" className={navBarLinkTextColor}>
              <span className="text-black">Kontakt</span>
              <div className={boxAroundLink("Kontakt")}></div>
            </a>
            <button className="transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
