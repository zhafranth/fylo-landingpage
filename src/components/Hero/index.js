import React from "react";

// Images
import HeroImage from "../../assets/illustration-intro.png";

// Components
import {
  MainHero,
  ImgWrapper,
  ImgCover,
  MetaWrapper,
  Title,
  Desc,
  Button,
} from "./style";

const style = () => {
  return (
    <MainHero>
      <ImgWrapper>
        <ImgCover src={HeroImage} />
      </ImgWrapper>
      <MetaWrapper>
        <Title>
          All your file in one secure location, accessible anywhere.
        </Title>
        <Desc>
          Fylo stores all your most important iles in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family, and co-workers
        </Desc>
        <Button>Get Started</Button>
      </MetaWrapper>
    </MainHero>
  );
};

export default style;
