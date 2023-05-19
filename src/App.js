import logo from './logo.svg';
import './App.css';
import MyRoute from './MyRoute';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import CountReducer from './reducer/count.reducer';
import gameReducer from './reducer/game.reducer';
import ItemReducer from './reducer/item.reducer';
import CartReducer from './reducer/cart.reducer';

function App() {
  // const store = createStore(CountReducer)
  // const store = createStore(gameReducer)
  const combinedStore = combineReducers({
    count: CountReducer,
    game: gameReducer,
    item: ItemReducer,
    cart: CartReducer
  })

  const store = createStore(combinedStore)

  return (
    <>
      <Provider store={store}>
        <MyRoute />
      </Provider>
    </>
  );
}

export default App;
