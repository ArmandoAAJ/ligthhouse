import React from 'react';

import { Box } from '@components/Box/styled';
import { Body, Heading } from '@components/Text';

export const Header: React.FC = () => {
  return (
    <>
      <Heading>Seja bem vindo!</Heading>
      <Box />
      <Body>
        Para uma melhor experiência,{' '}
        <Heading size="SM">crie sua conta </Heading>e receba{' '}
        <Heading size="SM">benefícios</Heading> de nossos parceiros entre outros
        recursos do nosso app!
      </Body>
      <Box size="MD" />
    </>
  );
};
