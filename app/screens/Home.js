/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';

import AuthContext from '../AuthContext';
import RecipeItem from '../components/RecipeItem';
import {getRecipes} from '../api';

const Container = styled.View``;

const FlatList = styled.FlatList``;

function Home({navigation}) {
  const {userToken} = React.useContext(AuthContext);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchRecipes = async (token, thePage) => {
      const response = await getRecipes(token, thePage);
      setData([...data, ...response.recipes]);
    };
    fetchRecipes(userToken, page);
  }, [userToken, page]);

  const handleLoadmore = () => {
    setPage(page + 1);
  };

  const handleItemClick = id => {
    navigation.navigate('Recipe Details', {id: id});
  };

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <RecipeItem {...item} onItemClick={handleItemClick} />
        )}
        keyExtractor={item => item.id}
        onEndReached={handleLoadmore}
        onEndReachedThreshold={0.1}
      />
    </Container>
  );
}

export default Home;
