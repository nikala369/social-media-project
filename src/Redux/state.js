const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

// BLL REDUX
let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are you?", likeCount: "13" },
        { id: 2, message: "It's my first post", likeCount: "18" },
        { id: 3, message: "Hello From America", likeCount: "55" },
      ],
      newPostText: "What's happening?",
    },

    messagesPage: {
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Hey, come here" },
      ],
      newMessageText: "",

      dialogsData: [
        { id: 1, name: "David" },
        { id: 2, name: "Nika" },
        { id: 3, name: "Kety" },
        { id: 4, name: "Jone" },
        { id: 5, name: "Mery" },
        { id: 6, name: "James" },
        { id: 7, name: "Mia" },
      ],
    },

    sidebar: {},
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // { type: 'ADD-POST' in UI}
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likeCount: 1,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);


    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 4,
        message: this._state.messagesPage.newMessageText,
      };
      this._state.messagesPage.messagesData.push(newMessage);
      this._state.messagesPage.newMessageText = "";
      this._callSubscriber(this._state); 
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.messagesPage.newMessageText = action.newMessageDialogs;
      this._callSubscriber(this._state);
    }
  },
};


// ACTION CREATORS FOR UI use
// Profile
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

//Messages
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateMessageActionCreator = (textFromInput) => ({
  type: UPDATE_NEW_MESSAGE,
  newMessageDialogs: textFromInput,
});

export default store;
window.store = store;

// Store - OOP
