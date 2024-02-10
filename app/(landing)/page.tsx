import Image from "next/image";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Feature from "../component/Feature";
import About from "../component/About";
import Tag from "../component/Tag";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Feature />
      <Tag />
      <About />
    </main>
  );
}
