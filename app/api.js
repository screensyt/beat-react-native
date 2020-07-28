import HttpError from './HttpError';

const BASE_URL = 'http://10.0.2.2:3000/';

export const getProfile = token => async () => {
  const response = await fetch(`${BASE_URL}me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
  });

  if (!response.ok) {
    throw new HttpError({
      message: response.statusText,
      statusCode: response.status,
    });
  }

  const jsonData = await response.json();
  return jsonData;
};

export const getRecipe = (token, id) => async () => {
  const response = await fetch(`${BASE_URL}recipes/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
  });

  console.log(response);
  if (!response.ok) {
    throw new HttpError({
      message: response.statusText,
      statusCode: response.status,
    });
  }

  const jsonData = await response.json();
  return jsonData;
};

export async function getRecipes(token, page) {
  const response = await fetch(`${BASE_URL}recipes?page=${page}&limit=10`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
  });
  console.log(response);

  if (!response.ok) {
    throw new HttpError({
      message: response.statusText,
      statusCode: response.status,
    });
  }

  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
}
