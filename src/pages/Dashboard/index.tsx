import React, { useState, useRef, useCallback } from 'react';
import { FaDigitalTachograph, FaEquals } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import * as S from './styles';

import logoImg from '../../assets/reactjs-icon.svg';

interface SignInFormData {
  binary: string;
}

const Dashboard: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [binary, setBinary] = useState('');
  const [number, setNumber] = useState(0);

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const bin2dec = useCallback(() => {
    // input = 1 => output = 1 * (2^0) = 1
    // input = 10 => output = (0 * (2^0)) + (1 * (2^1)) = 2
    // So we reverse and iterate from the back
    const reversedBinaryText = binary
      .split('')
      .map(Number) // Convert to a number from string
      .reverse();

    if (!reversedBinaryText) {
      return;
    }

    // Calculate the result by accumulating previous vaue
    const result = reversedBinaryText.reduce(
      (accumulator: number, currentValue: number, idx: number) =>
        accumulator + currentValue * 2 ** idx,
    );

    setNumber(result);
  }, [binary]);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      if (!data.binary) {
        addToast({
          type: 'error',
          title: 'Erro na cadastro',
          description: 'Informe um número binário.',
        });
        return;
      }

      bin2dec();

      setShowResult(true);

      window.scrollTo(0, document.body.scrollHeight);
    },
    [addToast, bin2dec],
  );

  const handleChange = useCallback(
    async (event: React.FormEvent<HTMLInputElement>) => {
      if (event.currentTarget.value.length > 8) {
        addToast({
          type: 'error',
          title: 'Erro na cadastro',
          description: 'Adicione no máximo 8 dígitos.',
        });
        return;
      }
      setBinary(event.currentTarget.value.replace(/[^0-1]/g, ''));
      setShowResult(false);
    },
    [addToast],
  );

  // function handleChange(event: React.FormEvent<HTMLInputElement>) {
  //   if (event.currentTarget.value.length > 8) {
  //     return;
  //   }
  //   setBinary(event.currentTarget.value.replace(/[^0-1]/g, ''));
  //   setShowResult(false);
  // }

  return (
    <S.Container>
      <S.Introduction>
        <h1>
          Bin2Dec
          <img src={logoImg} alt="ReactJS" />
        </h1>

        <section>
          <h1>01</h1>
          <p>
            Binary is the number system all digital computers are based on.
            Therefore it is important for developers to understand binary, or
            base 2, mathematics.
          </p>
        </section>
      </S.Introduction>
      <S.Content>
        <h1>Enter up to 8 binary digits in one input field</h1>
        <p>
          User views the results in a single output field containing the decimal
        </p>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="binary"
            icon={FaDigitalTachograph}
            placeholder="Enter the binary number 0 or 1"
            onChange={handleChange}
            value={binary}
          />

          <Button type="submit">Converter</Button>
        </Form>

        {showResult && (
          <S.Result>
            <div>
              <FaEquals color="00d8ff" size={20} />
            </div>
            <section>
              <strong>{number}</strong> is the decimal equivalent of the binary
              number <strong>{binary}</strong>
            </section>
          </S.Result>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
