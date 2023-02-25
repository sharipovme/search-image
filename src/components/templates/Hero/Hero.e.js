import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 650px;
  position: relative;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    margin-bottom: -30px;
    height: 400px;
  }
`;

export const Bg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 85%;
  filter: brightness(60%);
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  max-height: 550px;
  padding: 1rem;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 80%;
  max-width: 850px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 3rem;
    margin-bottom: 18px;
  }
  p {
    font-weight: 500;
    margin-bottom: 6px;
    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  @media (max-width: 700px) {
    width: 90%;
    h1 {
      font-size: 2.2rem;
    }
    h3 {
      font-size: 16px;
    }
  }
`;

export const SearchInput = styled.form`
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  margin: 20px 0;
  padding: 8px 20px;
  border-radius: 4px;
  background-color: #eeeeee;
  transition: all 0.2s ease;
  outline: 5px solid transparent;
  &:focus-within {
    outline: 5px solid rgba(0, 0, 0, 0.3);
  }
  input {
    margin: 0 15px;
    padding: 12px 0;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 14px;
    width: 100%;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
  img {
    width: 25px;
    cursor: pointer;
  }
`;
