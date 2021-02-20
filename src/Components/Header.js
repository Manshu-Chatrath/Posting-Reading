import React from 'react';
import {Link} from 'react-router-dom';
import {signin,signout} from '../actions/index';
import {connect} from 'react-redux'; 
import history from './history'
class Header extends React.Component{
    componentDidMount()
    {
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '538671388393-m6019tl30onb9s2duj7aiu3hmn85n4o4.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
  
        })
    }
    onAuthChange=(signIn)=>{
        if(signIn)
        {
            this.props.signin(this.auth.currentUser.get().getId())
        }
        else
        {
            this.props.signout(this.auth.currentUser.get().getId());
        }
    }
    signin=()=>{
        this.auth.signIn();
    }
    signout=()=>{
        this.auth.signOut();
        history.push('/');
    }
    showbuttons=()=>{

        if(this.props.isSignedIn===null)
        {  
            return null;
        }
        else if(this.props.isSignedIn)
        {  
            return( <button onClick={this.signout} className="login">Log Out</button>)
        }
        else
        {   
            return(<button onClick={this.signin} className="login">Sign In with your gmail account</button>)
        }
    }
    render()
    {
        return (
        <>
        <div className="header">
        <div className="posts"> 
          <Link to="/" className="allposts">All Posts</Link>
        </div>
        <div className="title">
            <h1 className="heading">Posting & Reading</h1>
        </div>
        <div className="Login">
            {
            this.showbuttons()
            }
        </div>
    </div>
    </>
    )
        
        }
}
const mapStateToProps=(props=>{
  return {isSignedIn: props.Login.isSignedIn,
            id: props.Login.id    
    }
})
export default connect(mapStateToProps,{signin,signout})(Header);

