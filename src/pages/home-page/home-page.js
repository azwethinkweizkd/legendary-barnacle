import { motion } from "framer-motion";
import { LandingPageTextAndImg } from "../../components/landing-page/landing-page";
import { ProjectInformation } from "../../components/project-grid/project-grid";

export const HomePage = () => (
  <motion.section
    id="home-page"
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  >
    <LandingPageTextAndImg />
    <ProjectInformation />
  </motion.section>
);
