import React from 'react';
import styled from 'styled-components/native';

import AuthContext from '../AuthContext';
import FetchData from '../FetchData';
import {getRecipe} from '../api';

const Container = styled.View``;
const Text = styled.Text``;

function Recipe({route}) {
  const {_id} = route.params;

  const {userToken} = React.useContext(AuthContext);

  return (
    <Container>
      <FetchData action={getRecipe(userToken, _id)}>
        {data => (
          <>
            <Text>{data.title}</Text>
            <Text>{data.desc}</Text>
            <Text>{data.ingredients}</Text>
          </>
        )}
      </FetchData>
    </Container>
  );
}

export default Recipe;
