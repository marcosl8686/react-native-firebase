import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/component/LoginForm'


export default class App extends React.Component {
  componentWillMount() {
      const config = {
        apiKey: "AIzaSyB7eufWh6n_RV4fr7pmspn5ChNCJKv_Zis",
        authDomain: "react-native-test-53bf2.firebaseapp.com",
        databaseURL: "https://react-native-test-53bf2.firebaseio.com",
        projectId: "react-native-test-53bf2",
        storageBucket: "react-native-test-53bf2.appspot.com",
        messagingSenderId: "735105270228"
      };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    );
  }
}
