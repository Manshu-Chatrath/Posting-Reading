import React from 'react';
import {connect} from 'react-redux';
import {view} from '../actions/index';
class View extends React.Component{

    componentDidMount()
    {  
        this.props.view(this.props.match.params.id);
    }
render_post=()=>{  

    if(!this.props.post)
    {
        return <div>Loading...</div>
    }
    return( <div className="single_post">
    <div className="title1"  style={{textAlign: "center"}} >
        <h1 className="heading1" >{this.props.post.title}</h1>
    </div>
    <div className="pic">
        <img src={this.props.post.url} alt={this.props.post.title} className="img" />
    </div>
    <div className="description">
        <p>{this.props.post.description}</p>
    </div>
    <div className="categories">
       <p>Categories: #{this.props.post.category}</p>
    </div>
</div>)   
    }
 
render()
{   
    return(<>{this.render_post()}</>)
}
}
const mapStateToProps=(props)=>{
 
return{
    post: props.view,
    
}
}
export default connect(mapStateToProps,{view})(View);