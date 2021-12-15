import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {text: '20+ Personal Github Projects'},
  { text: 'Developed a Blog Website Nextjsdev.com', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data?.map((card, index) => (
        <Box key={index}>
          <BoxText>{`${card.text}`}</BoxText>
          {/* <BoxText>{card.text}</BoxText> */}
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
