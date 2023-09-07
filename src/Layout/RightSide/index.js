import React from 'react';
import Input from '../../components/Input/index';
import Select from '../../components/Select/index';

import { RightSideContainer, TransitionDiv } from '../RightSide/styles';

const RightSide = () => {
  return (
    <RightSideContainer>
      <TransitionDiv>
        <Input />
      </TransitionDiv>
      <TransitionDiv>
        <Select />
      </TransitionDiv>
    </RightSideContainer>
  );
};

export default RightSide;
