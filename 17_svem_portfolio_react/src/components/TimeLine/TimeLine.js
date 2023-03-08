import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
