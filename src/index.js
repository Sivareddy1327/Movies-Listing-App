import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configurationStore from './store/configurationStore'
import {Provider} from 'react-redux'

const store = configurationStore()
console.log(store)

console.log(store.getState())

store.subscribe(()=>{
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>
   
  ,document.getElementById('root')
);

