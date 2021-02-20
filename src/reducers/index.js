import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
const initial={
    isSignedIn: null,id: null
};
const confirm=(state=initial,action)=>{
    if(action.type==='SIGN_IN')
    {
        return {...state,isSignedIn: true,id: action.payload}
    }
    if(action.type==='SIGN_OUT')
    {
        return {...state,isSignedIn: false,id: null}
    }
    return state
}
const crud=(state=[],action)=>{
    if(action.type==='CREATE_POST')
    {
        return [action.payload];
    }
    if(action.type==='FETCH_POSTS')
    {
        return action.payload;
    }
    if(action.type==='SEARCHING')
    {
        return action.payload;
    }
    return state;
}
const view=(state={},action)=>{
    if(action.type==='VIEW_POST')
    {
        return action.payload
    }
    return state;
}
const personalblogs=(state=[],action)=>{
    if(action.type==='MY_POSTS')
    {
        return action.payload
    }
    if(action.type==='FETCH_ONE')
    {
        return [action.payload];
    }
    if(action.type==='DELETED')
    {
        return [action.payload];
    }
    if(action.type==='SEARCH_MYPOSTS')
    {
        return action.payload;
    }
    
    return state;
}
// const fetchone=(state=[],action)=>{
//     if(action.type==='FETCH_ONE')
//     {
//         return [action.payload];
//     }
//     return state;
// }
export default combineReducers({
Login: confirm,
form: formReducer,
crud: crud,
view: view,
blogs: personalblogs,
// fetchone: fetchone
})