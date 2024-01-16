"use client";
import { useEffect, useState } from "react";

export type Pages = "Startseite" | "Services" | "Portfolio" | "Kontakt";

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  useEffect(() => {
    const handleRouteChange = () => setCurrentPath(window.location.pathname);

    window.addEventListener("popstate", handleRouteChange);

    return () => window.removeEventListener("popstate", handleRouteChange);
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

  //variables
  const navBarLinkTextColor = "text-gray-800 text-xl relative group";
  const boxAroundLink = (type: Pages) =>
    !isLinkActive(convertPageTypeToWindowLocation(type))
      ? `transition-all duration-300 ease-in-out absolute inset-0 bg-purple-200 text-black opacity-0 group-hover:opacity-20 transition-opacity transform scale-150 rounded-md`
      : `transition-all duration-300 ease-in-out absolute inset-0 bg-purple-200 opacity-50 transition-opacity transform scale-150 rounded-md`;
  console.log(boxAroundLink);

  return (
    <>
      {/* ANNOUNCEMENT TICKER */}
      <div className="top-0 left-0 right-0 bg-purple-700 p-1 text-white z-10 flex items-center justify-center">
        <p className="text-sm">
          <span className="font-bold">Hinweis:</span> miau
        </p>
      </div>
      {/* NAVBAR */}
      <nav className="bg-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <a href="/">
                {/*<Image
                src={logo_transparent}
                alt="Logo"
                width={350}
                height={80}
  />*/}
                <h1 className="text-2xl text-black font-bold">
                  <span className="text-purple-600">0109</span> Solutions
                </h1>
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
              <button className="transition-all duration-300 ease-in-out bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
