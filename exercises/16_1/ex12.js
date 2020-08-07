const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return state.filter((n,i) => 
        (action.index != i)
      );
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
console.log(store.getState());
store.dispatch(removeItem(2));
console.log(store.getState());