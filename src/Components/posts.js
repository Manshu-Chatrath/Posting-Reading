import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {searching,fetchall,myposts,searchmyposts} from '../actions/index'
class Posts extends React.Component
{ /*  <div className="btns">
                    <div className="edit">
                        <a href="">Edit this item</a>
                    </div>
                    <div class="delete">
                        <a href="">Delete this item</a>
                    </div>
                </div>*/
     state={
        word: ""                
                }
    renderall=()=>{
        if(this.props.posts)
       {let a=this.props.posts; 
        if(a.length===0) 
        {   if(this.state.word)
            {   
                return(<div>There are no posts with name of {this.state.word}!!</div>)
            }
            return(<div>There are no posts!!</div>)
        } 
        let posts=a.map(post=>{
            return(
                <div className="article" key={post.id}>
                <div className="title2"><h2>Title: {post.title}</h2></div>
                <img className="image" src={post.url} alt={post.title} />
                <div className="summ">#{post.category}<Link to={`/view-post/${post.id}`} className="view">View</Link></div>
               {this.props.exists ? this.props.bttons(post.id) : null}
            </div>
            )
        })
        return posts;
    } 
    return <div>Loading...</div>
} 
        importantButtons=()=>{
            if(this.props.isSignedIn)
            {
                return(
                    <div className="section">
                    <div className="button">
                        <Link to={`/myposts/${this.props.userId}`} className="btn2">Your Posts</Link>
                    </div>
                    <div className="create">
                        <Link to="/create-post">Create your post</Link>
                    </div>
                </div>
                )
            }
        }
    searching=(term)=>{
       let timerid=setTimeout(() => {
            if(term)
            {   console.log(term)
              this.props.searching(term);  
              this.props.searchmyposts(this.props.userId,term);
                this.setState({word: term})
            }
            else
            {   this.setState({word: ""})
                this.props.fetchall();
        this.props.myposts(this.props.userId)  
            }
        }, 500);
    }
    render()
    {
        return(<> <div className="search">
            <div>
              <span>Search any blog post:</span><br />
        <input onChange={(e)=>this.searching(e.target.value)} placeholder="Type any post you want to search" type="text" className="searching" />
        </div>
        </div>
        {this.importantButtons()}
        <div className="posts">
        {this.renderall()}
        </div>
        </>)
    }
}
const mapStateToProps=(props)=>{
 
    return{
        isSignedIn: props.Login.isSignedIn,
        userId: props.Login.id
    }
}
export default connect(mapStateToProps,{searching,fetchall,myposts,searchmyposts})(Posts);