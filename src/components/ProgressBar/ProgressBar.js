/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4
  },
  large: {
    height: 24,
    padding: 4,
    radius: 8
  }
}

const ProgressBar = ({ value, size }) => {
  const style = STYLES[size];

  return (
      <Wrapper
        role="progressbar"
        aria-valuenow="20"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
          "--padding": style.padding + "px",
          "--radius": style.radius + "px"
        }}
      >
        <BarWrapper>
          <Bar
            style={{
              "--width": value + "%",
              "--height": style.height + "px", 
            }}
            />
        </BarWrapper>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Wrapper>
  );
};

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

const BarWrapper = styled.div`
  border-radius: var(--radius);
  overflow: hidden;
`;

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  overflow: hidden;
  padding: var(--padding);
`;

export default ProgressBar;
