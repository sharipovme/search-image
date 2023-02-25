import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  width: 100%;
  min-height: 200px;
  max-height: 600px;
  margin-bottom: 1rem;
  position: relative;
  &:hover img {
    filter: brightness(80%);
  }
  &:hover .footer,
  &:hover .header {
    opacity: 1;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  max-height: 600px;
  object-fit: cover;
  transition: all 0.3s ease;
  border-radius: 16px;
`;

export const CardHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  transition: all 0.3s ease;
  opacity: 0;
  z-index: 2;
`;

export const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  opacity: 0;
  z-index: 2;
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  .heading {
    margin-left: 15px;
    color: #fff;
    font-weight: 600;
  }
`;

export const Button = styled.div`
  width: 45px;
  height: 35px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;
  padding-top: 2px !important;
  transition: 0.2s all ease;
  color: #767676;
  &:hover {
    background: rgba(255, 255, 255, 0.75);
    color: #000;
  }
  &.liked {
    background-color: #f15151;
    color: #fff;
    border: none;
    &:hover {
      background-color: #f15151;
      color: #fff;
    }
  }
  &.added {
    background-color: #3cb46e;
    color: #fff;
    border: none;
    &:hover {
      background-color: #3cb46e;
      color: #fff;
    }
  }
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
