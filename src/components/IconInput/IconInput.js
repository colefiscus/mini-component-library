import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    size: 16,
    fontSize: (14/16),
    borderThickness: 1,
  },
  large: {
    size: 24,
    fontSize: (18 / 16),
    borderThickness: 3,
  }
}

const IconInput = ({label,icon,width = 250,size,placeholder}) => {

  const style = STYLES[size]

  return <Wrapper>
          <VisuallyHidden>{label}</VisuallyHidden>
          <IconWrapper style={{ "--height": style.size + "px", "--width": style.size + "px" }}>
            <Icon id={icon} strokeWidth={1} size={style.size} />
          </IconWrapper>
          <TextInput placeholder={placeholder} style={{ "--width": width + "px",
            "--fontSize": style.fontSize + "rem", "--borderThickness": style.borderThickness + "px" }} />
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
  height: var(--height);
  width: var(--width);
  margin: auto;
`;

const TextInput = styled.input`
  padding-left: 36px;
  font-size: var(--fontSize);
  width: var(--width);
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
