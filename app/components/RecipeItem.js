import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View``;
const Text = styled.Text``;

function RecipeItem({title, desc, ingredients, _id}) {
  return (
    <Container>
      <Text>{title}</Text>
      <Text>{desc}</Text>
      <Text>{ingredients}</Text>
    </Container>
  );
}

export default RecipeItem;
