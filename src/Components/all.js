import React from 'react';
import {Link} from 'react-router-dom';
import {fetchall} from '../actions/index';
import {connect} from 'react-redux';
import Posts from './posts';
class All extends React.Component{
    componentDidMount()
    {  
        this.props.fetchall();
    }
    render()
    {
    return(<Posts posts={this.props.posts} />)
    }
    }
const mapStateToProps=(props)=>{
 
    return{posts: props.crud}
}
export default connect(mapStateToProps,{fetchall})(All);