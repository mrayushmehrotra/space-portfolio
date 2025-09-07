import { GetServerSideProps } from "next";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Experience from "@/components/sub/Experience";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: "https://ayush-mehrotra-portfolio-two.vercel.app/",
      permanent: true,
    },
  };
};

export default function Home() {
  return (
    <>
      <div className="z-[-10]">
        <StarsCanvas />
      </div>
      <div className="z-99">
        <Navbar />
        <main className="h-full w-full">
          <div className="flex flex-col gap-20">
            <Hero />
            <Experience />
            <Skills />
            <Projects />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
