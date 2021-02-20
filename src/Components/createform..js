import React from 'react';
import Form from './form';
import {connect} from 'react-redux';
import {create} from '../actions/index';
class CreateForm extends React.Component
{
    onsubmit=(event)=>
    {   
        this.props.create(event,this.props.userId);
    }    

    render()
    {
        return(<div className="form">
              <div className="title1" >
            <h1 className="heading1">Create your blog</h1>
        </div>
                 <Form onsubmit={this.onsubmit} />
        </div>
    )
    }
}
const mapStateToProps=(props)=>{
    return{
        userId: props.Login.id
    }
}

export default connect(mapStateToProps,{create})(CreateForm)