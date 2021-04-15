import styled from "styled-components/macro";

export const MainHero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 12vw;
  font-family: "Raleway", sans-serif;
`;
export const ImgWrapper = styled.div`
  @media screen and (max-width: 990px) {
    width: 75%;
  }
`;
export const ImgCover = styled.img`
  @media screen and (max-width: 990px) {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
export const MetaWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 1.5rem 0;
  color: #fff;
`;
export const Title = styled.h2`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
`;
export const Desc = styled.p`
  margin: 1.5rem 0;
  line-height: 1.5rem;
`;
export const Button = styled.button`
  box-sizing: border-box;
  border-radius: 30px;
  color: #fff;
  background-color: hsl(176, 68%, 64%);
  padding: 0.6rem 2.5rem;
  outline: none;
  border: 0;
  cursor: pointer;
  font-weight: 700;
`;

export const BgCurvy = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  object-fit: cover;
  width: 100%;
  height: auto;
  z-index: -1;
`;
