import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <Chevron id="chevron-down"></Chevron>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const SelectElement = styled.select`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 16px 12px;
  border-radius: 8px;
  width: fit-content;
`;

const Chevron = styled(Icon)`
  position: absolute;
  right: 0px;
  top: 15px;
`;

export default Select;
