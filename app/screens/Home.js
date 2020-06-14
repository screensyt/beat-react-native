import React from 'react';
import styled from 'styled-components/native';

import AuthContext from '../AuthContext';
import RecipeItem from '../components/RecipeItem';
import FetchData from '../FetchData';
import {getRecipes} from '../api';

const Container = styled.View``;
const Text = styled.Text``;

const FlatList = styled.FlatList``;

function Home() {
  const {userToken} = React.useContext(AuthContext);

  return (
    <Container>
      <Text>Home</Text>
      <FetchData action={getRecipes(userToken)}>
        {data => (
          <FlatList
            data={data}
            renderItem={({item}) => <RecipeItem {...item} />}
            keyExtractor={item => item.id}
          />
        )}
      </FetchData>
    </Container>
  );
}

export default Home;
