

export default function reducer (state  = {
customer : null
}, action){
    switch(action.type){
        case "SUCCESSFUL_LOGIN" : {
            return {...state, customer: action.payload};
        }
    }
    return state;
}