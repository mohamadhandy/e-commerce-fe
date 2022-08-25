const INITIAL_STATE = {
  data: []
};

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      data: [...state.data, action.value]
    };
  } else if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      data: state.data.filter(item => item !== action.value)
    };
  } else if (action.type === "CHANGE_QUANTITY_ITEM") {
    return {
      ...state,
      data: state.data.map(content =>
        content.id === action.id
          ? { ...content, quantity: action.value }
          : content
      )
    };
  } else {
    return state
  }
};

export default reducer;