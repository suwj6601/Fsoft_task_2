import styled from "styled-components";

export const StarCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 65rem;
  padding: 1rem;

  @media only screen and (min-width: 1024px) and (min-width: 768px) {
    width: 40rem;
  }

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    width: 34rem;
  }

  .star__card-heading {
    width: 100%;
    font-size: 2rem;
  }

  .star__card-title {
    height: 10%;
    background-color: rgb(254, 198, 37);
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10%;
    font-weight: 100 !important;
  }

  .star__card-image {
    height: 30%;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before {
      background-color: rgba(0, 0, 0, 0.55);
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 3;
    }

    .image {
      position: relative;
      z-index: 4;
      height: 100%;
      background-size: cover;
    }
  }

  .star__card-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 70%;
    padding: 2rem 0;
    background-color: rgb(255, 255, 255);
  }
`;
