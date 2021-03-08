import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isLoading: number;
}

export const Container = styled.button<ContainerProps>`
  background: #00d8ff;
  color: #ffffff;
  mix-blend-mode: normal;
  border: 2px solid rgba(29, 34, 46, 0.1);
  box-sizing: border-box;
  box-shadow: -10px -10px 20px rgba(57, 66, 83, 0.35),
    10px 10px 20px rgba(24, 28, 39, 0.35);

  height: 56px;
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  max-width: 320px;
  font-weight: 500;
  margin: 35px auto;
  transition: background-color 0.3s;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    background: ${shade(0.2, '#00d8ff')};
  }
  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
`;
