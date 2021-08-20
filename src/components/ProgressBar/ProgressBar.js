/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <Container>
          <ProgressElement
            value={value}
            max={100}>
              {value}
          </ProgressElement>
        </Container>
};

const Container = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressElement = styled.progress`
  width: 370px;
`;

export default ProgressBar;
