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

export const getRecipes = token => async () => {
  const response = await fetch(`${BASE_URL}recipes`, {
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
