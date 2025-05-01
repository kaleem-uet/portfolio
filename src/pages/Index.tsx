import Scrollspy from "react-scrollspy";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Seo from "@/components/Seo";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import IntroVideo from "@/components/IntroVideo";

const sections = [
  "home",
  "about",
  "projects",
  "skills",
  "achievements",
  "contact",
];

const Index = () => {
  const navigate = useNavigate();
const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleHashChange = (hash) => {
      if (window.location.hash !== `#${hash}`) {
        navigate(`#${hash}`, { replace: true });
      }
    };

    const observerCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          handleHashChange(entry.target.id);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navigate]);
useEffect(() => {
  // Open dialog on initial page load
  setOpen(true);
}, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo />
      <ScrollProgressBar />
      <Navbar />
      <Scrollspy items={sections} currentClassName="active" offset={-50}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </Scrollspy>
      <Footer />
      <IntroVideo open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Index;
