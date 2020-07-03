interface Response {
  token: string;
  user: {
    name: string;
  };
}
export function signIn(): Promise<Response> {
  const ola = {
    token: 'srtryuturuiuutryngjh',
    user: {
      name: 'Douglas',
    },
  };

  return new Promise((resolve) => {
    resolve(ola);
  });
}
