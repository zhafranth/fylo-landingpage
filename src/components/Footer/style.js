import styled from "styled-components/macro";

export const MainFooter = styled.div`
  background-color: hsl(216, 53%, 9%);
  box-sizing: border-box;
  padding: 18rem 12vw 5rem 12vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardFooter = styled.div`
  width: 60%;
  box-sizing: border-box;
  padding: 2.5rem;
  border-radius: 20px;
  background-color: hsl(217, 28%, 15%);
  position: absolute;
  top: -15%;
  color: #fff;
  text-align: center;
`;
export const TitleCard = styled.h2`
  margin: 0;
  font-size: 28px;
`;
export const Desc = styled.p`
  font-size: 14px;
  margin: 25px 0;
`;
export const WrapperInput = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  @media screen and (max-width: 1210px) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;
export const InputEmail = styled.input`
  outline: none;
  border: 0;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 10px 20px;
  width: 60%;
  &::placeholder {
    font-size: 12px;
    color: #e7e7e7;
  }
  @media screen and (max-width: 1210px) {
    width: 80%;
  }
`;
export const Send = styled.button`
  outline: none;
  border: 0;
  border-radius: 20px;
  box-sizing: border-box;
  width: 25%;
  font-weight: bold;
  background-color: hsl(176, 68%, 64%);
  color: #fff;
  @media screen and (max-width: 1210px) {
    width: 80%;
    padding: 10px 20px;
  }
`;
export const Logo = styled.img`
  align-self: flex-start;
`;
export const WrapperFooter = styled.div`
  align-self: flex-start;
  display: flex;
  color: #fff;
  margin-top: 2rem;
  gap: 1.2rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const FooterItem = styled.div`
  width: ${(props) => props.width || "max-content"};
`;
export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: ${(props) => props.direction || "row"};
  gap: 1rem;
  margin-bottom: 0.8rem;
`;
export const ImgItem = styled.img``;
export const TitleItem = styled.h5`
  margin: 0;
`;
export const ContactItem = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const IconSocial = styled.button`
  outline: none;
  border: 1px solid #fff;
  background-color: transparent;
  border-radius: 40px;
  color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: Center;
  cursor: pointer;
  &:hover {
    border-color: hsl(176, 68%, 64%);
    color: hsl(176, 68%, 64%);
  }
`;
