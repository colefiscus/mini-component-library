/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <Container>
          <BarWrapper
            value={value}
            max={100}>
              {value}
          </BarWrapper>
        </Container>
};

const Container = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  width: 370px;
`;

const Bar = styled.div`
  
`;

export default ProgressBar;
