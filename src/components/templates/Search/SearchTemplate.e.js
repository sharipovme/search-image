import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
`;

export const ImagesContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  column-count: 3;
  column-gap: 1rem;
  @media screen and (max-width: 1000px) {
    column-count: 2;
  }
  @media screen and (max-width: 740px) {
    column-count: 1;
  }
`;

export const Title = styled.div`
  margin-bottom: 50px;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #a7a7a7;
  font-size: 3rem;
  font-weight: 700;
  text-transform: capitalize;
`;
