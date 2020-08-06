import React from 'react';
import styled from 'styled-components/native';

import AddIcon from '../assets/svg/add.svg';

const Container = styled.View`
  position: absolute;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #011627;
  width: 50;
  height: 50;
  border-radius: 50;
`;

const ContainerOuter = styled.View`
  position: absolute;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: white;
  width: 64;
  height: 64;
  border-radius: 50;
  elevation: 20;
`;

const ShadowBox = styled.View`
  background: white;
  position: absolute;
  height: 51;
  width: 100;
  align-self: center;
  bottom: 0;
`;

function AddRecipeButton() {
  return (
    <ContainerOuter>
      <ShadowBox />
      <Container>
        <AddIcon fill={'white'} height={36} width={36} />
      </Container>
    </ContainerOuter>
  );
}

export default AddRecipeButton;
