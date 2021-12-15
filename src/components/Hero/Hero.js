import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Image, Div } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I'm Vikas Rai. <br />
        </SectionTitle>
        <SectionText>
          I'm a Student at MAIT (Maharaja Agrasen Institute of Technology). I am
          currently pursuing B.Tech from MAIT in Electrical & Electronics
          Engineering and very passionate for Programming and Web Development.
        </SectionText>
        <Button onClick={props.handleClick}>View More</Button>
      </LeftSection>
      <Div>
        <Image src="./images/profile-image.png" />
      </Div>
    </Section>
  </>
);

export default Hero;
