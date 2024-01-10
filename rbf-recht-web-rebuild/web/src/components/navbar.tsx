export default function Navbar() {
  const navBarLinkTextColor = "text-gray-800 text-xl relative group";
  const boxAroundLink = `absolute inset-0 bg-blue-200 opacity-30 transition-opacity transform scale-150 rounded-md`;

  // Center the Links
  // Create a Logo with sharp corners

  // LOGO
  // RBF Recht (RBF in Rot, Recht in Schwarz)
  // Slogan

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-black font-bold text-2xl">
            <a>
              <h1>dfjgn</h1>
            </a>
          </div>
          <div className="space-x-12">
            <a href="#" className={navBarLinkTextColor}>
              <span className="text-black">Startseite</span>
              <div className={boxAroundLink}></div>
            </a>
            <a href="#" className={navBarLinkTextColor}>
              <span className="text-black">Services</span>
              <div className={boxAroundLink}></div>
            </a>
            <a href="#" className={navBarLinkTextColor}>
              <span className="text-black">Portfolio</span>
              <div className={boxAroundLink}></div>
            </a>
            <a href="#" className={navBarLinkTextColor}>
              <span className="text-black">Kontakt</span>
              <div className={boxAroundLink}></div>
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
