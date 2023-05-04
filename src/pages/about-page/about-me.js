import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  WrapItem,
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalBody,
  // useDisclosure,
} from "@chakra-ui/react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import styled from "styled-components";
import resume from "../../assets/pdf/Bri-Pepper-Resume.pdf";
import PrototypeIcon from "../../assets/svg/prototype-icon.svg";
import LightBulbIcon from "../../assets/svg/light-bulb-svgrepo-com.svg";
import PhoneIcon from "../../assets/svg/iphone-svgrepo-com.svg";
import MagnifyIcon from "../../assets/svg/magnifying-glass-svgrepo-com.svg";
import HeartIcon from "../../assets/svg/heart-svgrepo-com.svg";

const imgArrMap = [
  {
    icon: HeartIcon,
    label: "Learn about the Users/Customers",
    bg: "#9FFF8F",
    name: "Empathize",
  },
  {
    icon: MagnifyIcon,
    label: "Research, Interview, and construct point of view",
    bg: "#FF8FE6",
    name: "Define",
  },
  {
    icon: LightBulbIcon,
    label: "Brainstorm solutions to solve the issue",
    bg: "#F3FF6C",
    name: "Ideate",
  },
  {
    icon: PrototypeIcon,
    label: "Build and refine product",
    bg: "#FFCE31",
    name: "Prototype",
  },
  {
    icon: PhoneIcon,
    label: "Put product out for Users and receive feedback",
    bg: "#9FFF8F",
    name: "Test",
  },
];

export const AboutMe = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }
  // const handleOpenResume = (e) => {
  //   e.preventDefault();
  //   onOpen();
  // };
  const ellipse = (x) => {
    // (x/2)^2 + y^2 = 100^2
    let ySquare = 10000 - (x / 2) * (x / 2);
    ySquare = Math.abs(ySquare);
    return Math.sqrt(ySquare);
  };
  const elements = document.getElementsByClassName("img-arc");
  const elements2 = document.getElementsByClassName("text-arc");
  useEffect(() => {
    for (let index = 0; index < elements.length; index++) {
      var x = 200 * ((5 * index) / 10 - 1);
      var y = ellipse(x);
      const element = elements[index];

      element.style.left = x + 200 + "px";
      element.style.top = 100 - y + "px";
    }
  }, [elements, elements2]);

  return (
    <motion.section
      id="about-contact-me"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <SectionGrid id="about-me">
        <AboutConnectContainer>
          <SectionTitles>About Me</SectionTitles>
          <ParagraphBlock>
            <SpanHighlight>UX/UI Designer</SpanHighlight> with a design
            background in cake design, interior design, and a certificate from
            the University of Denver in Colorado. Skills that include conducting
            research, interviews, surveys, sketches, wireframes, prototyping,
            and HTML/CSS.
          </ParagraphBlock>
          <ParagraphBlock>
            <SpanHighlight>Using the design process:</SpanHighlight> empathy,
            define, ideate, prototype, and testing to build out designs that
            work for both the user and the stakeholder.
          </ParagraphBlock>
          <ParagraphBlock>
            <SpanHighlight>Strongest skills</SpanHighlight> include research
            based designs that also meet accessibility standards, a team player
            who listens but also a leader when needed, and an incredibly
            self-motivated individual who is driven by ambition and the desire
            to always give their best.
          </ParagraphBlock>
          <ParagraphBlock>
            <SpanHighlight>As a UX Researcher</SpanHighlight> for Peeps For
            Pets, developed an idea that solved issues that exist for both Users
            and Stakeholders. As a UX/UI Designer for Nourish, took a leadership
            role in the UI department to build a functional and aesthetically
            pleasing design by deadline.
          </ParagraphBlock>
        </AboutConnectContainer>
        <div style={{ position: "relative" }}>
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ position: "relative", left: "190px" }}
          >
            {imgArrMap.map((img, index) => (
              <WrapItem>
                <Tooltip
                  label={img.label}
                  closeDelay={250}
                  placement={
                    index < 2
                      ? "left-start"
                      : index === 2
                      ? "top"
                      : "right-start"
                  }
                  fontSize="lg"
                  bg={img.bg}
                  color="black"
                  textAlign="center"
                  padding="4"
                >
                  <motion.img
                    variants={item}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    src={img.icon}
                    className="img-arc"
                    alt={img.name}
                    style={{ position: "absolute", zIndex: "99" }}
                  />
                </Tooltip>
              </WrapItem>
            ))}
          </motion.ul>
          <AboutConnectImgs
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            src={process.env.PUBLIC_URL + "images/BriBlush.png"}
            style={{ position: "absolute", top: "75px", left: "280px" }}
          />
        </div>
      </SectionGrid>
      <SectionGrid id="connect">
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <AboutConnectImgs
            variants={cardVariants}
            src={process.env.PUBLIC_URL + "images/Hands - Phone.png"}
          />
        </motion.div>
        <AboutConnectContainer>
          <SectionTitles>Let's Connect!</SectionTitles>
          <ParagraphBlock>
            <SpanHighlight>If you’re searching</SpanHighlight> for an
            eager-to-learn, positive, creative designer then feel free to reach
            out to me via email or connect with me on Linked In. Let’s chat!
          </ParagraphBlock>
          <ParagraphBlock>
            <SpanHighlight>Let’s Chat</SpanHighlight>
          </ParagraphBlock>
          <ParagraphBlock>
            <SpanHighlight>Contact me</SpanHighlight> via email at
            bripepr@gmail.com
          </ParagraphBlock>
          <ParagraphBlock>
            <SpanHighlight>Let’s get connected</SpanHighlight> on LinkedIn at{" "}
            <a
              href="https://www.linkedin.com/in/bri-pepper/"
              style={{ color: "blueviolet" }}
            >
              https://www.linkedin.com/in/bri-pepper/
            </a>
          </ParagraphBlock>
          <a href={resume} without rel="noopener noreferrer" target="_blank">
            <ResumeBtn trailingIcon="picture_as_pdf" label="Resume">
              View Resume
            </ResumeBtn>
          </a>
        </AboutConnectContainer>
      </SectionGrid>
      {/* <Modal
        onClose={onClose}
        isOpen={isOpen}
        blockScrollOnMount={true}
        motionPreset="scale"
      >
        <ModalOverlay />
        <ModalContent maxWidth="672px" maxHeight="full" padding="8px">
          <ModalBody
            fontWeight="400"
            textAlign="center"
            fontSize="24px"
            lineHeight="28.15px"
          >
            <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </ModalBody>
        </ModalContent>
      </Modal> */}
    </motion.section>
  );
};

const SectionTitles = styled.h2`
  font-family: "Londrina Outline";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 57px;
  text-align: left;
`;

const SectionGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const AboutConnectImgs = styled(motion.img)`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const AboutConnectContainer = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const SpanHighlight = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
`;

const ParagraphBlock = styled.p`
  padding: 12px 0;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23.46px;
`;

const ResumeBtn = styled.button`
  width: 244px;
  line-height: 52px;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  background: ${(props) => (props.white ? "white" : "#c4ebe2")};
  border: ${(props) =>
    props.white ? "1px solid rgba(0, 0, 0, 0.36)" : "none"};
  border-radius: 50px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: ${(props) => props.color};
    font-style: normal;
    font-weight: 700;
    border: none;
  }
`;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
