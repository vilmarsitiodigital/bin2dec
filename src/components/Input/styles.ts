import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: linear-gradient(47.94deg, #2c3341 19.6%, #313949 77.32%);
  border: 2px solid rgba(49, 57, 73, 0.5);
  box-sizing: border-box;
  box-shadow: -10px -10px 20px rgba(72, 80, 99, 0.26), 10px 10px 20px #262c37;
  border-radius: 12px;

  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #00d8ff;

      background: #313949;
      border: 1px solid #313949;
      box-sizing: border-box;
      box-shadow: inset -5px -5px 10px rgba(64, 75, 95, 0.25),
        inset 5px 5px 10px #2c3341;
      border-radius: 12px;
    `}
  ${props =>
    props.isField &&
    css`
      color: #00d8ff;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: rgba(255, 255, 255, 0.65);
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #f4ede8;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
