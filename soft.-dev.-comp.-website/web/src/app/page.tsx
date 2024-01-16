import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeaderImg from "./assets/Untitled.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <div className="relative">
          <Image src={HeaderImg} alt="Header Image" />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-2xl font-bold">
            Text on Top of Image
          </div>
        </div>
      </main>
    </>
  );
}
