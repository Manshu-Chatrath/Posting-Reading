import React from 'react';
import {Field,reduxForm} from 'redux-form';
class Form extends React.Component
{
   inputs43=(props)=>{
    
    return(<>
        <label >{props.label}</label><br />
        <input {...props.input} placeholder={props.placeholder} maxLength={props.maxLength} />
        </>
    )
   }
   textareas43=(props)=>{
       return(
           <>
           <label >{props.label}</label><br />
            <textarea placeholder={props.placeholder}  {...props.input}  name="" id="" cols="30" rows="10" />
           </>
       )
   }
   onSubmit=(event)=>
   {  // event.preventDefault();
       this.props.onsubmit(event);
   }
    render()
    {
        return(
      
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="url" label="Image:" type="url" placeholder="Enter url of image"  component={this.inputs43}/>
            <Field name="title" label="Title:" type="text" placeholder="Enter title of your post" component={this.inputs43}/>
            <Field name="category" maxLength="20" label="Category:" maxLength="25" placeholder="Enter two categories" component={this.inputs43}/>
           <Field name="description" label="Description:" placeholder="Describe your experience" component={this.textareas43}/>  
        <div>
            <button className="creating">Submit</button>
                </div>
        </form>
)
    
    }

}


export default reduxForm({
    form: 'Bloginfo',
  
})(Form);
