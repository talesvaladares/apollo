const post = () => {
  return {
    id: '1',
    title: 'Post',
  };
};

export const postResolvers = {
  Query: {
    post,
  },
};
