import { createStore } from 'redux'

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return state.concat([action.user])
    default:
      return state
  }
}

const store = createStore(users);

store.dispatch({
  type: 'ADD_USER',
  user: { login: 'developer21', password: '123456' },
})
export default store;
