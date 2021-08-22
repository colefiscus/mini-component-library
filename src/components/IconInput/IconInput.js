import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({label,icon,width = 250,size,placeholder}) => {

  return <Wrapper>
          <VisuallyHidden>{label}</VisuallyHidden>
          <IconWrapper>
            <Icon id="search" strokeWidth={1} size={16} />
          </IconWrapper>
          <TextInput placeholder={placeholder} />
        </Wrapper>;
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray500};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 16px;
  width: 16px;
  margin: auto;
`;

const TextInput = styled.input`
  padding-left: 24px;
  height: ${24 / 16}rem;
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
