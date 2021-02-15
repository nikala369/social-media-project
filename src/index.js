import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// For Profile
let postData = [
  { id: 1, message: 'Hi, how are you?', likeCount: "13" },
  { id: 2, message: 'It\'s my first post', likeCount: "18" },
  { id: 3, message: 'Hello From America', likeCount: "55"}
]

// For Messages / Dialogs
let dialogsData = [
  { id: 1, name: 'David'},
  { id: 2, name: 'Nika'},
  { id: 3, name: 'Kety'},
  { id: 4, name: 'Jone'},
  { id: 5, name: 'Mery'},
  { id: 6, name: 'James'},
  { id: 7, name: 'Mia'},
]

let messagesData = [
  {id: 1, message:'Hi' },
  {id: 2, message:'How are you?'},
  {id: 1, message: 'Wazzaapp'},
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
