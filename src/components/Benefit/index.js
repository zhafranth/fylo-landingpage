import React from "react";
import {
  MainBenefit,
  BenefitItem,
  ImgWrapper,
  ImgCover,
  Title,
  Desc,
} from "./style";

// Image
import Image1 from "../../assets/icon-access-anywhere.svg";
import Image2 from "../../assets/icon-security.svg";
import Image3 from "../../assets/icon-collaboration.svg";
import Image4 from "../../assets/icon-any-file.svg";

const Benefit = () => {
  return (
    <MainBenefit>
      <BenefitItem>
        <ImgWrapper>
          <ImgCover src={Image1} />
        </ImgWrapper>
        <Title>Access your files, anywhere</Title>
        <Desc>
          The ability to use smarthphone, tablet, or computer to access your
          account means your files follow you everywhere
        </Desc>
      </BenefitItem>
      <BenefitItem>
        <ImgWrapper>
          <ImgCover src={Image2} />
        </ImgWrapper>
        <Title>Security you can trust</Title>
        <Desc>
          2-factor authenctication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files
        </Desc>
      </BenefitItem>
      <BenefitItem>
        <ImgWrapper>
          <ImgCover src={Image3} />
        </ImgWrapper>
        <Title>Real-time collaboration</Title>
        <Desc>
          Securely share files and folders with friends, family amd collegues
          for live collaboration. No email attachments required.
        </Desc>
      </BenefitItem>
      <BenefitItem>
        <ImgWrapper>
          <ImgCover src={Image4} />
        </ImgWrapper>
        <Title>Store any type of file</Title>
        <Desc>
          Whether you're sharing holidays photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared.
        </Desc>
      </BenefitItem>
    </MainBenefit>
  );
};

export default Benefit;
