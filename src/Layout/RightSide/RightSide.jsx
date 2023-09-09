import React from 'react';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';

import { RightSideContainer, TransitionDiv } from './styles';

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
