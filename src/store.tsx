import { combineReducers, createStore, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

interface CashState {
  cash: number;
}

interface RootState {
  cash: CashState;
}

type RootAction =
  | { type: 'ADD_CASH'; payload: number }
  | { type: 'GET_CASH' };

  const cashReducer = (state: CashState = { cash: 0 }, action: RootAction) => {
    switch (action.type) {
      case 'ADD_CASH':
        return { cash: state.cash + action.payload };
      case 'GET_CASH':
        return { cash: state.cash };
      default:
        return state;
    }
  };
  

const rootReducer = combineReducers<RootState, RootAction>({
  cash: cashReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
