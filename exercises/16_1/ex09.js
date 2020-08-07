const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type){
    case INCREMENT:
      return state + action.value;
    case DECREMENT:
      return state - action.value;
    default:
      return state;
  }
};

const incAction = () => ({
  type: INCREMENT,
  value: 1,
});

const decAction = () => ({
  type: DECREMENT,
  value: 1,
});

const store = Redux.createStore(counterReducer);

console.log(store.getState());
store.dispatch(incAction());
console.log(store.getState());
store.dispatch(decAction());
console.log(store.getState());