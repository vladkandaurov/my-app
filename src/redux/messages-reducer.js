const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialstate ={
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

};

const messageReducer =(state=initialstate, action)=>{

    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {
                ...state,
                messagesData: [...state.messagesData]
            };
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy={...state};
            let body = state.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messagesData.push({id: 6, message: body});
            return stateCopy;
        }
        default:
            return state;
    }

}

export const sendMessageCreator = () => {
    return {
        type:SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default messageReducer;