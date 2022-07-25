import React from 'react';
import Question from '../components/Question';
import styled from 'styled-components';
import ProgressBar from '../components/ProgressBar';
import GlobalStyle from '../GlobalSyyle';

const Container = styled.div`
  width: 100%;
  background: linear-gradient(to right, #d8e9f0, pink);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Survey = () => {
  return (
    <Container>
      <GlobalStyle />
      <ProgressBar />
      <Question />
    </Container>
  );
};

export default Survey;
