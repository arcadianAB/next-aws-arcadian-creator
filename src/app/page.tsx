import HomeCanvas from "@/comps/home/canvas/HomeCanvas";
import HomeProjects from "@/comps/home/projects/HomeProjects";
import HomeAbout from "@/comps/home/about/HomeAbout";

export default function Home() {
  return (
    <main className="grid h-full w-full bg-dark text-center text-light lg:h-screen lg:grid-cols-2 lg:grid-rows-4">
      <HomeCanvas />
      <HomeProjects />
      <HomeAbout />
    </main>
  );
}
