const user = () => {
  return {
    id: '1',
    username: 'Tales',
  };
};

const users = () => {
  return [
    {
      id: '1',
      username: 'Tales',
    },
    {
      id: '2',
      username: 'Nair',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
