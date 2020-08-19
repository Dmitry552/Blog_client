var initialState = {
  items: null,
};

export default (state = initialState, action) => {
  var {type, payload} = action;
  console.log('reducer', payload)
  switch (type) {
    case 'POSTS:SET-ITEMS':
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
};