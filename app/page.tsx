"use client";

import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Experience from "@/components/sub/Experience";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  useEffect(() => {
    redirect("https://ayush-mehrotra-portfolio-two.vercel.app/"); // 👈 redirects as soon as page loads
  }, []);

  return (
    <>
      <div className="overflow-auto z-[99] h-full w-full bg-black">
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
      </div>
    </>
  );
}
