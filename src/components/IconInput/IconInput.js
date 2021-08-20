import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: 300,
  small: 150,
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const inputSize = STYLES[size];
  const inputIcon = Icon[icon];

  return <Wrapper>
          <IconWrapper>
            <Icon id={icon} strokeWidth={1} size={16}></Icon>
          </IconWrapper>
          <Input placeholder={placeholder} style={{"--width": inputSize + "px"}} />     
         </Wrapper>;
};

const Input = styled.input`
  padding-left: 22px;
  border: none;
  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: ${14 / 16}rem;
  width: var(--width);
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
    font-size: ${14 / 16}rem;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 16px;
  height: 16px;
  pointer-events: none;
`;

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  border-bottom: 1px solid black;
`;

export default IconInput;
