const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialstate= {
    posts: [
        {id: 1, post: 'Hi, how are you', likecount: 20},
        {id: 2, post: 'Its my first post', likecount: 12}
    ],
    newPostText: 'text posta'


};

const profileReducer = (state = initialstate, action) => {

    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likecount: 5
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
            }
        default:
            return state;
    }





}

export const addPostActionCreator = () => {
    return {
        type:ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type:UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;