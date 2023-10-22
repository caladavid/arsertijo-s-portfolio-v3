"use client"
import Cursor from "@/components/Cursor";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import PageTransitionLayout from "@/components/PageTransitionLayout";
import Process from "@/components/Process";
import RecentProjects from "@/components/RecentProjects";
import WhoIAm from "@/components/WhoIAm";

export default function Home() {

  return (
    <main>
      <Hero />
      <RecentProjects />
      <Process />
      <WhoIAm />
      <GetInTouch />
      <Cursor />
      <PageTransitionLayout text="Arsertijo"/>
    </main>
  )
}
