import React from 'react';
import {connect} from 'react-redux';
import {fetchone,edit} from '../actions/index';
import Form from './form';
class Edit extends React.Component{
componentDidMount()
{   
    this.props.fetchone(this.props.match.params.id)
}
submit=(formvalues)=>{
this.props.edit(this.props.match.params.id,formvalues);
}
render()
{let list=this.props.post.filter(post=>post.id===+this.props.match.params.id);
 
if(list.length>0)
    {
  return(<div className="form">
    <div className="title1" >
  <h1 className="heading1">Edit your blog</h1>
</div>
<Form onsubmit={this.submit}  
initialValues={{url: list[0].url,title: list[0].title,category: list[0].category,description:list[0].description}}  />
</div>)
}
return <div>Loading...</div>
}
}
const mapStateToProps=(props,ownprops)=>{
    
    return {post: props.blogs}
}
export default connect(mapStateToProps,{fetchone,edit})(Edit);
