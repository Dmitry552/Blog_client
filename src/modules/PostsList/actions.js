import {postsApi} from '../../utils/api';

var PostsListActions = {
  setItems: (items) => {
    console.log(items)
    return ({
      type: 'POSTS:SET_ITEMS',
      payload: items,
    });
  },
  fetchItems: () => dispatch => {
    console.log('1')
    postsApi.get().then(({data}) => {
      dispatch(PostsListActions.setItems(data));
    });
  },
};


export default PostsListActions;