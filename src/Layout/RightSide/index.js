import React from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { RightSideContainer, TransitionDiv } from '../RightSide/styles';

const RightSide = () => (
  <RightSideContainer>
    <TransitionDiv>
      <Input />
    </TransitionDiv>
    <TransitionDiv>
      <Select />
    </TransitionDiv>
  </RightSideContainer>
);

export default RightSide;
