import React from 'react';
import styled from 'styled-components/native';
import FetchData from '../FetchData';
import {getRecipe} from '../api';
import AuthContext from '../AuthContext';

const Container = styled.View``;
const Text = styled.Text``;

const CoverImage = styled.Image`
  height: 200px;
`;

function RecipeDetails({route}) {
  const {id} = route.params;
  const {userToken} = React.useContext(AuthContext);

  return (
    <Container>
      <FetchData action={getRecipe(userToken, id)}>
        {data => (
          <>
            <CoverImage source={{uri: data.coverImage}} />
            <Text>{data.title}</Text>
            <Text>{data.desc}</Text>
            <Text>{data.ingredients}</Text>
          </>
        )}
      </FetchData>
    </Container>
  );
}

export default RecipeDetails;
