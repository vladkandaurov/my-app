import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let store ={
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you', likecount: 20},
                {id: 2, post: 'Its my first post', likecount: 12}
            ],
            newPostText: 'text posta'


        },

        messagesPage: {
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Im'},
                {id: 3, message: 'Vlad'},
                {id: 4, message: 'Kandaurov'},
                {id: 5, message: '!'}
            ],
            dialogsData: [
                {
                    id: 1,
                    name: 'Vlados',
                    avatar: 'https://lh3.googleusercontent.com/proxy/WhSNfL-e0zcOQhdDnmxvTFHmZ2TsjjM5oDPZ6ulL9EO9E4Q4kY3le24fzTNJN6wOVkJgu9cyxoHb9b3b1SwaXlgwl_kybGIDKx0OUg87_NkLgzwVZrVVuiHKMBRBe4sXoXgwxL0MXufTjTXRPN6XOEk'
                },
                {
                    id: 2,
                    name: 'Ivan N',
                    avatar: 'https://otvet.imgsmail.ru/download/2390c573501ee7b9c789c3c0497b807b_i-4.jpg'
                },
                {
                    id: 3,
                    name: 'Butovich',
                    avatar: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
                },
                {id: 4, name: 'KillReal', avatar: 'https://slovami.net/wp-content/uploads/2018/04/11-27.jpg'},
                {id: 5, name: 'Dymich', avatar: 'https://cs319323.vk.me/v319323049/70e1/2gddfIt0mvc.jpg'}
            ],
            newMessageBody: ""

        },
        sidebar: {},
    },

    _callSubscriber() {
        console.log('state was changed');

    },

    getState(){
        return this._state;
    },
    subscribe(observer){

        this._callSubscriber=observer;
    },



    dispatch(action){

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagesPage = messageReducer(this._state.messagesPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);



    }




}







window.store= store;
export default store;