export default (state = {history:[]}, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchvalue: action.payload
      };
    case 'SET_SEARCH_RESULT':
      return {
        ...state,
        results: action.payload
      };
    case 'SAVE_HISTORY_VALUE':
      return{
        history: [...state.history, action.payload]
      }
    default:
      return state;
  }

};
