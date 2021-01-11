import uuidv4 from 'uuid/v4'


export default function reducer(state,action){
    switch(action.type){

        case "ADD_USER":

        if(!action.payload){
            return state;
        }
        if(state.users.findIndex(
            t=>t.username ===action.payload
        ) >-1){
            return state;
        }
        const newUser = {
            id:uuidv4(),
            username:action.payload,
            password:action.payload,
            isLoggedIn:false
        }
       const addedUsers = [...state.users,newUser]

       return{
           ...state,
           users: addedUsers
       }
      
                default:
            return state;

    }
}