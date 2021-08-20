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
            '--radius': style[size].radius + 'px',
          }}>
          <BarWrapper>
            <VisuallyHidden>{value}</VisuallyHidden>
            <Bar style={{
              '--width': value + '%',
              '--height': style[size].height + 'px'
            }}>
            </Bar>
          </BarWrapper>
        </Container>
};

const Container = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;
  
const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
