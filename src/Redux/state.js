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
        { id: 3, message: "Wazzaapp" },
      ],
      newMessage: "Good work",

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

  // Sending message.
  sendMessage() {
    let newMessage = {
      id: 4,
      message: this._state.messagesPage.newMessage,
    };
    this._state.messagesPage.messagesData.push(newMessage);
    this._state.messagesPage.newMessage = "";
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    // { type: 'ADD-POST' in UI}
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likeCount: 1,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;

// Store - OOP
