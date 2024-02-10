import { shallow } from "zustand/shallow";
import useArticlesStore from "../store/useArticlesStore";

const useArticlesHook = () => {
  const {
    articles,
    current,
    loading,
    error,
    fetchArticles,
    setCurrentArticle,
  } = useArticlesStore(
    (state) => ({
      articles: state.articles,
      current: state.current,
      loading: state.loading,
      error: state.error,
      fetchArticles: state.fetchArticles,
      setCurrentArticle: state.setCurrentArticle,
    }),
    shallow
  );

  return {
    articles,
    current,
    loading,
    error,
    fetchArticles,
    setCurrentArticle,
  };
};

export default useArticlesHook;
