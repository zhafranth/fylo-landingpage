import React from "react";
import {
  MainProduct,
  ImgWrapper,
  ImgCover,
  MetaWrapper,
  Title,
  Desc,
  Link,
} from "./style";

// Images
import ProdukImg from "../../assets/illustration-stay-productive.png";

const Product = () => {
  return (
    <MainProduct>
      <ImgWrapper>
        <ImgCover src={ProdukImg} />
      </ImgWrapper>
      <MetaWrapper>
        <Title>Stay Productive, wherever you are</Title>
        <Desc>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs
        </Desc>
        <Desc>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </Desc>
        <Link>
          See How Fylo works <span />
        </Link>
      </MetaWrapper>
    </MainProduct>
  );
};

export default Product;
