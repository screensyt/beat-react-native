import React from 'react';
import styled from 'styled-components/native';

import AddIcon from '../assets/svg/add.svg';

const Container = styled.View`
  height: 64;
  width: 64;
  border-radius: 32;
  background: white;
  justify-content: center;
  align-items: center;
  elevation: 20;
`;

const InnerContainer = styled.View`
  height: 50;
  width: 50;
  border-radius: 32;
  background: red;
  justify-content: center;
  align-items: center;
`;

const HiddenBox = styled.View`
  height: 48;
  width: 100;
  background: white;
  position: absolute;
  bottom: 0;
`;

function AddRecipeButton() {
  return (
    <Container>
      <HiddenBox />
      <InnerContainer>
        <AddIcon height={36} width={36} fill={'white'} />
      </InnerContainer>
    </Container>
  );
}

export default AddRecipeButton;
