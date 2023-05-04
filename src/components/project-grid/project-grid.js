import styled from "styled-components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { CustomPageATag } from "../custom-buttons/page-button";
import {
  DeatilSection,
  Details,
  DetailTitle,
  DetailTitleSpan,
} from "./project-details";
import { ProjectScreenshotImg } from "./project-images";
import { useState } from "react";

export const ProjectInformation = () => {
  const [projectClicked, setProjectClicked] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleProjectModalOpen = (e) => {
    e.preventDefault();
    setProjectClicked(e.target.id);
    onOpen();
  };

  const handleProjectModalClose = () => {
    setProjectClicked("");
    onClose();
  };
  return (
    <>
      <TwoColumnGridDiv>
        <GridCell onClick={handleProjectModalOpen} id="nourish">
          <ProjectScreenshotImg
            id="nourish"
            src={process.env.PUBLIC_URL + "/images/nourish2.png"}
          />
          <ProjectScreenshotImg
            id="nourish"
            src={process.env.PUBLIC_URL + "/images/nourish3.png"}
          />
        </GridCell>
        <GridCellDetails>
          <DeatilSection>
            <DetailTitle>
              Defining the <DetailTitleSpan>Problem</DetailTitleSpan>
            </DetailTitle>
            <Details>
              Users have limited resources and knowledge to living and choosing
              sustainably that could deeply impact the environment
            </Details>
          </DeatilSection>
          <DeatilSection>
            <DetailTitle>
              Creating the <DetailTitleSpan>Solution</DetailTitleSpan>
            </DetailTitle>
            <Details>
              A process in which Users can learn about sustainable living and
              choose sustainable products from their favorite stores
            </Details>
          </DeatilSection>
          <DeatilSection none={true}>
            <DetailTitle>
              The <DetailTitleSpan>Result</DetailTitleSpan>
            </DetailTitle>
            <Details>
              An app that allows its Users to be informed, shop their favorites
              stores, find sustainable products, and purchase them all in one
              place.
            </Details>
          </DeatilSection>
          <CustomPageATag
            color="#FF8FE6"
            href="https://docs.google.com/presentation/d/1sKQusaxX6htT8X8N2D4hr-NcApbdUcdI7BNnN-NJctU/edit?usp=sharing"
            target="_blank"
          >
            Full Case Study
          </CustomPageATag>
        </GridCellDetails>
        <GridCell onClick={handleProjectModalOpen} id="p4p2">
          <ProjectScreenshotImg
            id="p4p2"
            src={process.env.PUBLIC_URL + "/images/P4P2-removebg-preview.png"}
          />
          <ProjectScreenshotImg
            id="p4p2"
            src={process.env.PUBLIC_URL + "/images/P4P3-removebg-preview.png"}
          />
        </GridCell>
        <GridCellDetails>
          <DeatilSection>
            <DetailTitle>
              Defining the <DetailTitleSpan>Problem</DetailTitleSpan>
            </DetailTitle>
            <Details>
              Pets being returned to shelters because they do not match with
              potential owners
            </Details>
          </DeatilSection>
          <DeatilSection>
            <DetailTitle>
              Creating the <DetailTitleSpan>Solution</DetailTitleSpan>
            </DetailTitle>
            <Details>
              Creating a process where Users can filter their lifestyle
              needs/wants in a pet
            </Details>
          </DeatilSection>
          <DeatilSection none={true}>
            <DetailTitle>
              The <DetailTitleSpan>Result</DetailTitleSpan>
            </DetailTitle>
            <Details>
              An app that matches Users with pets based on needs/wants and shows
              nearby locations all in one product, reducing the rate in which
              pets are returned to shelters
            </Details>
          </DeatilSection>
          <CustomPageATag
            color="#FF8FE6"
            href="https://docs.google.com/presentation/d/1htEdjif_JPe3lV2F5_eaRKxtoO-TRrUE2B8rdykKS9Y/edit?usp=sharing"
            target="_blank"
          >
            Full Case Study
          </CustomPageATag>
        </GridCellDetails>
      </TwoColumnGridDiv>
      <Modal
        onClose={handleProjectModalClose}
        isOpen={isOpen}
        isCentered
        blockScrollOnMount={true}
        motionPreset="scale"
      >
        <ModalOverlay />
        <ModalContent
          maxWidth="672px"
          maxHeight="599px"
          padding="8px"
          bg={`radial-gradient(50% 50% at 50% 50%, ${
            projectClicked === "nourish" ? "#FF8FE6" : "#9FFF8F"
          } 0%, white 100%)`}
        >
          <ModalHeader textAlign="center">
            {projectClicked === "nourish" ? (
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "36px",
                  lineHeight: "42.23px",
                }}
              >
                Over the course of three weeks,{" "}
                <span
                  style={{
                    fontWeight: "700",
                  }}
                >
                  Nourish
                </span>
              </span>
            ) : (
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "36px",
                  lineHeight: "42.23px",
                }}
              >
                Designed over a three week time frame,{" "}
                <span
                  style={{
                    fontWeight: "700",
                  }}
                >
                  Peeps For Pets
                </span>
              </span>
            )}
          </ModalHeader>
          <ModalBody
            fontWeight="400"
            textAlign="center"
            fontSize="24px"
            lineHeight="28.15px"
          >
            {projectClicked === "nourish" ? (
              <p>
                was developed through a range of research methodolgies to create
                a system that improved the shopping experience of sustainable
                shoppers.
                <br />
                <br /> Nourish allows Users to browse, filter, favorite, check
                out, and choose a pickup location in the app. It also features a
                greenscore on products and how to have a more sustainable
                living.
                <br />
                <br /> This process eliminates the frustration of finding
                quality sustainable items which are also affordable and places
                them into one user friendly app.
              </p>
            ) : (
              <p>
                removed the hassle of lengthy pet adoption processes, combined
                it into a more refined and easy to use app to match Users to a
                pet based on their needs, wants, and lifestyle.
                <br />
                <br />
                With the excessive rate at which pets are returned, Peeps For
                Pets helps decrease how many pets are returned by matching
                potential pet owners to a pet that they feel is bet suited for
                them and vice versa.
                <br />
                <br /> By filling out a pet profile, Users can customize their
                features and be matched with a pet instantly in shelters near
                them. A profile of the pet which they choose is then displayed
                on the app with a description and option to apply.
              </p>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const TwoColumnGridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  margin: auto;
  @media screen and (max-width: 1275px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridCell = styled.div`
  display: flex;
  width: 95%;
  height: 100%;
  padding: 1rem;
  border-radius: 50px;
  text-align: center;
  margin: auto;
  background-color: whitesmoke;
  cursor: pointer;
  @media screen and (max-width: 1275px) {
    flex-direction: column;
  }
`;

const GridCellDetails = styled(GridCell)`
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  margin: auto auto;
  grid-auto-rows: 250px;
  cursor: default;
`;
