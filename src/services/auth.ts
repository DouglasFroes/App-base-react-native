interface Response {
  token: string;
  user: {
    name: string;
  };
}
export function signIn(email: String, password: String): Promise<Response> {
  console.log(email);
  console.log(password);
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
