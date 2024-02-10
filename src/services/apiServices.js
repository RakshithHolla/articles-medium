/**
 * request - GET
 * path - /articles.json
 */
export const getArticlesList = async () => {
  const response = await fetch("/articles.json");
  const result = await response.json();

  return result;
};
