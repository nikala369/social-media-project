let state = {

 profilePage: {
  postData : [
  { id: 1, message: 'Hi, how are you?', likeCount: "13" },
  { id: 2, message: 'It\'s my first post', likeCount: "18" },
  { id: 3, message: 'Hello From America', likeCount: "55"}

 ],
},
 messagesPage: {
    messagesData : [
   {id: 1, message:'Hi' },
   {id: 2, message:'How are you?'},
   {id: 1, message: 'Wazzaapp'},
  ],
  dialogsData: [
  { id: 1, name: 'David'},
  { id: 2, name: 'Nika'},
  { id: 3, name: 'Kety'},
  { id: 4, name: 'Jone'},
  { id: 5, name: 'Mery'},
  { id: 6, name: 'James'},
  { id: 7, name: 'Mia'},
  ],
 },

 sidebar: {}

}

export let addPost = (postMessage) => {
   let newPost = {
      id: 5,
      message: postMessage,
      likeCountL: 0,
   };

   state.profilePage.postData.push(newPost);
 }




export default state;