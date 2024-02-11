import React from 'react';
import { Content, Image, Line, Row, ScrollView } from './styles';

import { Box } from '@components/Box/styled';
import { Button } from '@components/Button';
import { Header } from './components/Header';
import { Body, Heading } from '@components/Text';
import { Social } from './components/Social';

export const Authenticator = () => {
  return (
    <ScrollView>
      <Header />
      <Image />
      <Box size="MD" />
      <Content>
        <Button>
          <Heading lineH="MD" colorT="WHITE_100" size="MD">
            Criar minha conta
          </Heading>
        </Button>
        <Box size="MD" />
        <Body colorT="HELP_400">
          Já possui conta?{' '}
          <Heading colorT="HELP_400" size="SM">
            Faça login aqui
          </Heading>
        </Body>
        <Row>
          <Line />
          <Body colorT="HELP_300">ou</Body>
          <Line />
        </Row>
        <Social />
        <Box size="XL" />
        <Body colorT="HELP_400">Cadastrar depois</Body>
      </Content>
    </ScrollView>
  );
};
