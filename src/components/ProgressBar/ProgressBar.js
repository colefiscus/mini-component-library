/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {

  const style = {
    small: {
      padding: 0,
      height: 8,
      radius: 4
    },
    medium: {
      padding: 0,
      height: 12,
      radius: 4
    },
    large: {
      padding: 4,
      height: 24,
      radius: 8
    }
  }

  return <Container
          style={{
            '--padding': style[size].padding + 'px',
          }}>
          <BarWrapper>
            <Bar style={{
              '--width': value + '%',
              '--height': style[size].height + 'px'
            }}>
              {value}
            </Bar>
          </BarWrapper>
        </Container>
};

const Container = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  width: 370px;
`;
  
const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
