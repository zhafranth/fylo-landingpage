import React from "react";
import {
  MainTestimoni,
  WrapperCard,
  Card,
  Desc,
  WrapperProfile,
  WrapperName,
  Profile,
  Name,
  Job,
  Image,
} from "./style";

// Image
import Profile1 from "../../assets/profile-1.jpg";
import Quotes from "../../assets/bg-quotes.png";

const Testimoni = () => {
  return (
    <MainTestimoni>
      <WrapperCard>
        <Card>
          <Desc>
            Fylo has imporved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </Desc>
          <WrapperProfile>
            <Profile src={Profile1} />
            <WrapperName>
              <Name>Satish Patel</Name>
              <Job>Founder and CEO Huddle</Job>
            </WrapperName>
          </WrapperProfile>
        </Card>
        <Card>
          <Desc>
            Fylo has imporved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </Desc>
          <WrapperProfile>
            <Profile src={Profile1} />
            <WrapperName>
              <Name>Satish Patel</Name>
              <Job>Founder and CEO Huddle</Job>
            </WrapperName>
          </WrapperProfile>
        </Card>
        <Card>
          <Desc>
            Fylo has imporved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </Desc>
          <WrapperProfile>
            <Profile src={Profile1} />
            <WrapperName>
              <Name>Satish Patel</Name>
              <Job>Founder and CEO Huddle</Job>
            </WrapperName>
          </WrapperProfile>
        </Card>
        <Image src={Quotes} />
      </WrapperCard>
    </MainTestimoni>
  );
};

export default Testimoni;
