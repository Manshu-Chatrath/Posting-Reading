import React from 'react';
import {myposts,deleting} from '../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Posts from './posts';

class Personal extends React.Component{
    state={
        clicked: false,
        id: null
    }
    componentDidMount()
    { 
           this.props.myposts(this.props.match.params.userid);
      }
    decide=(id)=>{
        this.setState({clicked: true,id: id})
    }
    close=()=>{
        this.setState({clicked: false})
    }
    delete=(id)=>{
        this.props.deleting(id)
        this.setState({clicked: false})
    }
    delete23=(id)=>{
  return(<div class="delete-tab" onClick={this.close}>
                <div class="tab">
                <div class="delete-post">Delete Post?</div>
                <p class="para">Do you want to delete the post?</p>
                <div class="buttons">
                    <button onClick={()=>{this.delete(id)}}>Delete</button>
                    <button onClick={this.close}>Cancel</button>
                </div>
            </div>
            </div>)
     }
   importantbttons=(id)=>{ 
       return( <div className="btns">
                    <div className="edit">
                        <Link to={`/edit-post/${id}`}>Edit this item</Link>
                    </div>
                    <div class="delete">
                        <a onClick={()=>{this.decide(id)}}>Delete this item</a>
                    </div>
                </div>)}
    render()
    { let close=this.state.clicked
        //  if(this.props.posts.length===0)
        // {
        //     return(<h1>You dont have any posts</h1>)
        // }
    return(
    <>
    <Posts bttons={this.importantbttons} exists={true} posts={this.props.posts} />
        {this.state.clicked ? this.delete23(this.state.id) : null}
        </>
    )
    }
}
const mapStateToProps=(props)=>{
  
    return{posts: props.blogs,
        userId: props.Login.id
    }
}
export default connect(mapStateToProps,{myposts,deleting})(Personal);