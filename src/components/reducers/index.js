const initialState = {
    posts: [],
    MyArticles:[],
    isVisible
  };
  
  const ArticleList = (state = initialState, action) => {
    switch(action.type) {
      case 'GET_POSTS': {
        console.log("reducers "+state);
        return {  
          ...state,
          posts: action.payload.posts,
        }
      }
      case 'DELETE_ARTICLE': {
        return {  
          ...state,
          posts: state.posts.filter(item => item.id !== action.payload.articleId),
        }
      }

      case 'SHOW_DIALOG':
      {
          return 
      }
  
    //   case 'SELECT_POST': {
    //     return {
    //       ...state,
    //       selectedPost: action.payload.selectedPost,
    //     }
    //   }
  
      case 'GET_POSTS_ASYNC': {
        return {
          ...state,
          posts: action.payload.posts,
        }
      }
  
      default: {
        console.log(state);
        return state;
      }
    }
  }
  
  export default ArticleList;
  