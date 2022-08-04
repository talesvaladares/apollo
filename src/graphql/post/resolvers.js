const posts = async (_, {input}, {getPosts}) => {
  const apiFiltersInput = new URLSearchParams(input);
  const posts = await getPosts(`/?${apiFiltersInput}`);
  return posts.json();
};

const post = async (_,{id}, {getPosts}) => {
  const response = await getPosts('/' + id);
  return response.json();
};

export const postResolvers = {
  Query: {
    post,
    posts
  }
};
