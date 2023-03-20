import styled from "styled-components";
import BPImgSrc from "../../assets/Logo2-removebg-preview.png";

const BPImg = styled.img`
  width: 350px;
  height: 175px;
`;

export const BPNavImg = () => <BPImg src={BPImgSrc} />;
