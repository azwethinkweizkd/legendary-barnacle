import styled from "styled-components";
import BPImgSrc from "../../assets/Logo2-removebg-preview.png";

const BPImg = styled.img`
  position: absolute;
  left: 0%;
  top: 0%;
  width: 275px 150px;
  height: 150px;
`;

export const BPNavImg = () => <BPImg src={BPImgSrc} />;
