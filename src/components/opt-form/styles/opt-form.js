import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  martgin-top: 20px;

`;
export const Input = styled.input`
  min-width: 227px;
  widht: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    min-width: 100%;
    margin-bottom: 2rem;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  color: white;
  background: #e50914;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  padding: 0 20px;

  &:hover {
    background: #f40612;
  }

  & img {
    margin-left: 10px;
    width: 24px;
    filter:brightness(0) invert(1);
  }

  @media (max-width: 600px) {
    font-size: 20px;
    height: 50px;
    border-radius: 3px;
  }
`;
export const Text = styled.p`
  fonty-size: 19px;
  color: white;
  text-align: center;
`;

export const Break = styled.div``;