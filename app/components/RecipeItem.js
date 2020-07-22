import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  margin: 8px;
  background: white;
  border-radius: 8px;
`;
const CoverImage = styled.Image`
  height: 200px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Title = styled.Text`
  font-family: 'SourceCodePro-Medium';
  font-size: 20px;
  margin: 8px 0px 4px 8px;
`;
const Desc = styled.Text`
  font-family: 'SourceCodePro-Regular';
  font-size: 16px;
  margin: 0px 8px;
`;

const Ing = styled.Text`
  font-family: 'SourceCodePro-Regular';
  font-size: 16px;
  margin: 4px 8px;
`;

function RecipeItem({title, desc, ingredients, coverImage, _id}) {
  return (
    <Container>
      <CoverImage source={{uri: coverImage}} />
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <Ing>{ingredients}</Ing>
    </Container>
  );
}

export default RecipeItem;
