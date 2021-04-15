import styled from "styled-components/macro";

export const MainTestimoni = styled.div`
  padding: 4rem 12vw;
  background-color: #181f2b;
`;
export const WrapperCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 4rem;
  box-sizing: border-box;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  box-sizing: border-box;
  padding: 2.5rem 1.8rem;
  background-color: hsl(219, 30%, 18%);
  width: 30%;
  color: #fff;
  z-index: 2;
`;
export const Desc = styled.h5`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.4rem;
  margin: 0;
  margin-bottom: 1.5rem;
`;
export const WrapperProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 20px;
`;
export const WrapperName = styled.div``;
export const Name = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
`;
export const Job = styled.p`
  margin: 0;
  font-size: 12px;
`;
export const Image = styled.img`
  position: absolute;
  top: -30px;
  left: -20px;
  z-index: 1;
`;
