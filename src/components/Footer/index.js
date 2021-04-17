import React from "react";
import {
  MainFooter,
  CardFooter,
  TitleCard,
  Desc,
  WrapperInput,
  InputEmail,
  Send,
  Logo,
  WrapperFooter,
  FooterItem,
  Item,
  ImgItem,
  TitleItem,
  ContactItem,
  IconSocial,
} from "./style";

// Images
import LogoFooter from "../../assets/logo.svg";
import Location from "../../assets/icon-location.svg";
import Phone from "../../assets/icon-phone.svg";
import Email from "../../assets/icon-email.svg";

import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <MainFooter>
      <CardFooter>
        <TitleCard>Get early access today</TitleCard>
        <Desc>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you
        </Desc>
        <WrapperInput>
          <InputEmail placeholder="email@example.com" />
          <Send>Get Started For Free</Send>
        </WrapperInput>
      </CardFooter>
      <Logo src={LogoFooter} />
      <WrapperFooter>
        <FooterItem width="40%">
          <Item>
            <ImgItem src={Location} />
            <TitleItem>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              adipisci perferendis voluptate officiis delectus nisi fugit error
              fugiat explicabo obcaecati!
            </TitleItem>
          </Item>
        </FooterItem>
        <FooterItem>
          <Item>
            <ImgItem src={Phone} />
            <ContactItem>+62 8212 2232 098</ContactItem>
          </Item>
          <Item>
            <ImgItem src={Email} />
            <ContactItem>example@fylo.com</ContactItem>
          </Item>
        </FooterItem>
        <FooterItem>
          <Item>
            <TitleItem>About Us</TitleItem>
          </Item>
          <Item>
            <ContactItem>Job</ContactItem>
          </Item>
          <Item>
            <ContactItem>Press</ContactItem>
          </Item>
          <Item>
            <ContactItem>Blog</ContactItem>
          </Item>
        </FooterItem>
        <FooterItem>
          <Item>
            <TitleItem>Contact Us</TitleItem>
          </Item>
          <Item>
            <ContactItem>Terms</ContactItem>
          </Item>
          <Item>
            <ContactItem>Privacy</ContactItem>
          </Item>
        </FooterItem>
        <FooterItem>
          <Item>
            <IconSocial>
              <FaFacebookF />
            </IconSocial>
            <IconSocial>
              <FaTwitter />
            </IconSocial>
            <IconSocial>
              <AiOutlineInstagram />
            </IconSocial>
          </Item>
        </FooterItem>
      </WrapperFooter>
    </MainFooter>
  );
};

export default Footer;
