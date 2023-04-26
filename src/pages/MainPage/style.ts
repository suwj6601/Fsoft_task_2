import styled from "styled-components";

export const MainPageWrapper = styled.div`
  position: relative;
`;

export const MainPageBackground = styled.div`
  background-image: url("https://i.pinimg.com/originals/a4/6c/4d/a46c4dea15a013d3f779e8cf97a09a46.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  top: 0 !important;
  left: 0;
  z-index: -20 !important;
  position: absolute;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }

  &::before {
    background-color: rgba(0, 0, 0, 0.45);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const MainPageContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
