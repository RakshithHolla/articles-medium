import { create } from "zustand";
import errorMessages from "../constants/errorMessages";
import { getArticlesList } from "../services/apiServices";

const initialStore = {
  articles: [],
  current: {},
  loading: true,
  error: "",
};

const useArticlesStore = create((set) => ({
  articles: initialStore.articles,
  current: initialStore.current,
  loading: initialStore.loading,
  error: initialStore.error,
  fetchArticles: async () => {
    set((state) => ({ ...state, current: {} }));
    await getArticlesList()
      .then((data) => {
        set((state) => ({ ...state, articles: data.articles, error: "" }));
      })
      .catch(() => {
        set((state) => ({
          ...state,
          error: errorMessages.LOADING_ERROR,
        }));
      })
      .finally(() => {
        set((state) => ({
          ...state,
          loading: false,
        }));
      });
  },
  setCurrentArticle: (selected) => {
    set((state) => ({ ...state, current: selected }));
  },
}));

export default useArticlesStore;
