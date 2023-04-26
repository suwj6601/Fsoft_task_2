import styled from "styled-components";

export const StarCardInfoWrapper = styled.div`
  background-color: rgb(254, 198, 37);
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 1.5rem;

  width: 80%;
  font-size: 1.8rem;
  border-radius: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const ResultGame = styled.div`
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  color: #c727aa;
`;
