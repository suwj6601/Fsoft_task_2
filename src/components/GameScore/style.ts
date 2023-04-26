import styled from "styled-components";

export const GameScoreWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  z-index: 10;
  color: #ffffff;
  font-size: 3rem;
  padding: 1rem 0;
  height: 6rem;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    padding: 0.5rem 0;
  }
`;
