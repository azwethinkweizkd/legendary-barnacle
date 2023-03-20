import styled from "styled-components";
import { CustomPageBtn } from "../custom-buttons/page-button";
import {
  DeatilSection,
  Details,
  DetailTitle,
  DetailTitleSpan,
} from "./project-details";
import { ProjectScreenshotImg } from "./project-images";

export const ProjectInformation = () => (
  <TwoColumnGridDiv>
    <GridCell>
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
          A process in which Users can learn about sustainable living and choose
          sustainable products from their favorite stores
        </Details>
      </DeatilSection>
      <DeatilSection none={true}>
        <DetailTitle>
          The <DetailTitleSpan>Result</DetailTitleSpan>
        </DetailTitle>
        <Details>
          An app that allows its Users to be informed, shop their favorites
          stores, find sustainable products, and purchase them all in one place.
        </Details>
      </DeatilSection>
      <CustomPageBtn color="#FF8FE6">Full Case Study</CustomPageBtn>
    </GridCellDetails>
    <GridCell>
      <ProjectScreenshotImg
        src={process.env.PUBLIC_URL + "/images/P4P2-removebg-preview.png"}
      />
      <ProjectScreenshotImg
        src={process.env.PUBLIC_URL + "/images/P4P3-removebg-preview.png"}
      />
    </GridCell>
    <GridCellDetails>
      {" "}
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
          Creating a process where Users can filter their lifestyle needs/wants
          in a pet
        </Details>
      </DeatilSection>
      <DeatilSection none={true}>
        <DetailTitle>
          The <DetailTitleSpan>Result</DetailTitleSpan>
        </DetailTitle>
        <Details>
          An app that matches Users with pets based on needs/wants and shows
          nearby locations all in one product, reducing the rate in which pets
          are returned to shelters
        </Details>
      </DeatilSection>
      <CustomPageBtn color="#FF8FE6">Full Case Study</CustomPageBtn>
    </GridCellDetails>
  </TwoColumnGridDiv>
);

const TwoColumnGridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  margin: auto;
`;

const GridCell = styled.div`
  width: 95%;
  height: 95%;
  padding: 1rem;
  border-radius: 50px;
  text-align: center;
  margin: auto;
  background-color: whitesmoke;
`;

const GridCellDetails = styled(GridCell)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 95%;
  height: 95%;
  padding: 1rem;
  border-radius: 50px;
  text-align: left;
  margin: auto auto;
  background-color: whitesmoke;
  grid-auto-rows: 250px;
`;
