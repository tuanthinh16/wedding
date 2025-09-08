import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Gallery from "@/components/sections/Gallery";
import Events from "@/components/sections/Events";
import RSVP from "@/components/sections/RSVP";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen">
        <Navigation />

        <main>
          <section id="hero">
            <Hero />
          </section>

          <section id="introduction">
            <Introduction />
          </section>

          <section id="gallery">
            <Gallery />
          </section>

          <section id="events">
            <Events />
          </section>

          <section id="rsvp">
            <RSVP />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
        <MusicPlayer />
      </div>
    </>
  );
}
