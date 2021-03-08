import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 30px;

  h1 {
    font-weight: bold;
    font-size: 34px;
    text-align: left;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 775px) {
    padding: 10px;
    align-items: left;
    flex-direction: column;

    > h1 {
      font-size: 26px;
    }
  }
`;

export const Introduction = styled.div`
  width: 100%;
  max-width: 700px;
  min-height: 400px;
  background: linear-gradient(180deg, #1d222c 0%, #181c27 147.23%);
  border-radius: 20px;
  padding: 30px 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  > h1 img {
    width: 40px;
    height: 40px;
    margin: -10px 10px;
  }

  > section {
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    clear: both;
    h1 {
      color: #00d8ff;
      margin-bottom: 10px;
    }

    p {
      font-size: 26px;
      line-height: 1.5em;
    }
  }

  @media screen and (max-width: 775px) {
    max-width: 100%;
    > section {
      p {
        font-size: 20px;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 30px 0px 0 30px;
  flex: 1;
  text-align: center;

  p {
    margin-bottom: 40px;
    color: rgba(255, 255, 255, 0.65);
    font-weight: bold;
    font-size: 15px;
    text-align: left;
  }

  @media screen and (max-width: 775px) {
    padding: 10px;
  }
`;

export const Result = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    font-size: 1.6em;
    margin-right: 16px;
    display: flex;
    align-items: center;
  }

  > section {
    flex: 1;
    padding: 10px;

    background: linear-gradient(331.93deg, #1d222e 11.88%, #293140 85.18%);
    color: rgba(255, 255, 255, 0.65);
    mix-blend-mode: normal;
    border: 2px solid rgba(29, 34, 46, 0.1);
    box-sizing: border-box;
    box-shadow: -10px -10px 20px rgba(57, 66, 83, 0.35),
      10px 10px 20px rgba(24, 28, 39, 0.35);

    border-radius: 10px;
    font-weight: 500;
    font-size: 18px;
  }

  > section strong {
    font-weight: bold;
    color: #00d8ff;
  }
`;
