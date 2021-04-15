import styled from "styled-components/macro";

export const MainProduct = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 4rem 12vw;
  gap: 2rem;
  align-items: center;
  color: #fff;
  background-color: #181f2b;
  @media screen and (max-width: 1210px) {
    flex-direction: column;
  }
`;
export const ImgWrapper = styled.div`
  @media screen and (max-width: 1210px) {
    width: 80%;
    height: auto;
  }
`;
export const ImgCover = styled.img`
  object-fit: cover;
  @media screen and (max-width: 1210px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const MetaWrapper = styled.div``;
export const Title = styled.h2`
  font-size: 42px;
  line-height: 2.8rem;
`;
export const Desc = styled.p`
  line-height: 1.8rem;
`;
export const Link = styled.a`
  position: relative;
  padding-bottom: 0.5rem;
  color: hsl(176, 68%, 64%);
  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: hsl(176, 68%, 64%);
    border-radius: 5px;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: hsl(176, 68%, 64%);
  }
`;
