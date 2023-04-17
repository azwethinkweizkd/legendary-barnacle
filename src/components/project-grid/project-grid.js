import styled from "styled-components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { CustomPageBtn } from "../custom-buttons/page-button";
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
  return (
    <>
      <TwoColumnGridDiv>
        <GridCell onClick={handleProjectModalOpen} id="nourish">
          <ProjectScreenshotImg
            src={process.env.PUBLIC_URL + "/images/nourish2.png"}
          />
          <ProjectScreenshotImg
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
          <CustomPageBtn color="#FF8FE6">Full Case Study</CustomPageBtn>
        </GridCellDetails>
        <GridCell onClick={handleProjectModalOpen} id="p4p2">
          <ProjectScreenshotImg
            src={process.env.PUBLIC_URL + "/images/P4P2-removebg-preview.png"}
          />
          <ProjectScreenshotImg
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
          <CustomPageBtn color="#FF8FE6">Full Case Study</CustomPageBtn>
        </GridCellDetails>
      </TwoColumnGridDiv>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        blockScrollOnMount={true}
      >
        <ModalOverlay />
        <StyledModalContent>
          <StyledModalHeader>
            {projectClicked === "nourish"
              ? "Over the course of three weeks, Nourish"
              : "Designed over a three week time frame, Peeps For Pets"}
          </StyledModalHeader>
          <StyledModalBody>
            {projectClicked === "nourish"
              ? "was developed through a range of research methodolgies to create a system that improved the shopping experience of sustainable shoppers. Nourish allows Users to browse, filter, favorite, check out, and choose a pickup location in the app.  It also features a greenscore on products and how to have a more sustainable living. This process eliminates the frustration of finding quality sustainable items which are also affordable and places them into one user friendly app. "
              : "removed the hassle of lengthy pet adoption processes, combined it into a more refined and easy to use app to match Users to a pet based on their needs, wants, and lifestyle. With the excessive rate at which pets are returned, Peeps For Pets helps decrease how many pets are returned by matching potential pet owners to a pet that they feel is bet suited for them and vice versa. By filling out a pet profile, Users can customize their features and be matched with a pet instantly in shelters near them. A profile of the pet which they choose is then displayed on the app with a description and option to apply."}
          </StyledModalBody>
        </StyledModalContent>
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
`;

const GridCellDetails = styled(GridCell)`
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  margin: auto auto;
  grid-auto-rows: 250px;
  cursor: default;
`;
const StyledModalContent = styled(ModalContent)`
  width: 100%;
  height: 75%;
`;

const StyledModalHeader = styled(ModalHeader)`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  text-align: center;

  color: #000000;
`;

const StyledModalBody = styled(ModalBody)`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  padding: 0 78px;

  color: #000000;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #9fff8f 0%,
    rgba(196, 235, 226, 0) 100%
  );
`;
