import styled from "styled-components";

export const StarCardWrapper = styled.div`
  margin: auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    > *:first-child {
      margin: 4rem 0;
    }
  }

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    width: 80%;
  }
`;
