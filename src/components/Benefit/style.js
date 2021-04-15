import styled from "styled-components/macro";

export const MainBenefit = styled.div`
  padding: 6rem 12vw;
  background-color: #181f2b;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
`;
export const BenefitItem = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-align: center;
  @media screen and (max-width: 770px) {
    width: 80%;
  }
`;
export const ImgWrapper = styled.div``;
export const ImgCover = styled.img``;
export const Title = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin: 0.5rem 0;
`;
export const Desc = styled.p``;
