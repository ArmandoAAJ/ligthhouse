import React from 'react';
import { HeadingSmall, Image, Scroll } from './styles';
import { Body, Heading } from '@components/Text';
import { Box } from '@components/Box/styled';

export const Authenticator = () => {
  return (
    <Scroll>
      <Heading>Seja bem vindo!</Heading>
      <Box />
      <Body>
        Para uma melhor experiência,{' '}
        <HeadingSmall>crie sua conta </HeadingSmall>e receba{' '}
        <HeadingSmall>benefícios</HeadingSmall> de nossos parceiros entre outros
        recursos do nosso app!
      </Body>
      <Box />
      <Image />
    </Scroll>
  );
};
