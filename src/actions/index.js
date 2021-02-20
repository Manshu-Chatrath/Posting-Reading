import axios from 'axios';
import history from '../Components/history'
export const signin=(id)=>{
    return{type: 'SIGN_IN',payload: id}
}
export const signout=(id)=>{
    return{type: 'SIGN_OUT',payload:id}
}
export const create=(formvalue,userId)=>async(dispatch)=>{

    const response=await axios.post('http://localhost:3001/posts',{...formvalue,userId: userId});
 
    dispatch({type: 'CREATE_POST', payload: response.data});
    history.push('/')
}
export const fetchall=()=>async(dispatch)=>{
    const response=await axios.get('http://localhost:3001/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data})
}
export const view=(id)=>async (dispatch)=>{
    const response=await axios.get(`http://localhost:3001/posts/${id}`);
    dispatch({type: 'VIEW_POST', payload: response.data})
}
export const myposts=(userId)=>async (dispatch)=>{
   
    const response=await axios.get(`http://localhost:3001/posts`);
    let a=response.data.filter(item=>item.userId===userId);
  
    dispatch({type: 'MY_POSTS', payload: a})
}
export const edit=(id,formvalue)=>async (dispatch)=>{
    const response=await axios.patch(`http://localhost:3001/posts/${id}`,formvalue);
    dispatch({type: 'EDIT_POST',payload: response.data});
    history.push('/')
}
export const fetchone=(id)=>async (dispatch)=>{
    const response=await axios.get(`http://localhost:3001/posts/${id}`);
 
    dispatch({type: 'FETCH_ONE', payload: response.data})
}
export const deleting=(id)=>async(dispatch)=>{
    const response=await axios.delete(`http://localhost:3001/posts/${id}`);
    dispatch({type: 'DELETED',payload: response.data});
    history.push('/')
}
export const searching=(term)=>async(dispatch)=>{
    const response=await axios.get('http://localhost:3001/posts');
    let data=response.data;
    let realdata=[]
  let real=data.forEach(post=>{
        if(post.title.startsWith(term))
        {
            return realdata.push(post);   
        }
    })
    dispatch({type: 'SEARCHING',payload: realdata })
}
export const searchmyposts=(userId,term)=>async (dispatch)=>{
    console.log("There are myposts" +userId);
    const response=await axios.get(`http://localhost:3001/posts`);
    let data=response.data.filter(item=>item.userId===userId);
    let realdata=[];
    let real=data.forEach(post=>{
        if(post.title.startsWith(term))
        {   
            return realdata.push(post);   
        }
    })
    dispatch({type: 'SEARCH_MYPOSTS',payload: realdata })
}