import React from 'react'
import {Router,Route,BrowserRouter} from 'react-router-dom';   
import Header from './Header';
import Personal from './personal';
import Create from '../Components/createform.';
import View from './view';
import All from './all';
import Edit from './editform';
import history from './history';
import {connect} from 'react-redux';
const App=(props)=>{
    console.log(props);
    return (
        <div className="container">
     <Router history={history}>
        <Header />
        <Route path="/" exact component={All}/>
        {props.isSignedIn ?   
        <>
        <Route path="/create-post" exact component={Create} /> 
        <Route path='/myposts/:userid' exact component={Personal} />
        <Route path='/edit-post/:id' exact component={Edit} />
          </>              
        :
        null    
}
        <Route path='/view-post/:id' exact component={View} />
     </Router>
        </div>
    )
}
const mapStateToProps=(state)=>{
    console.log(state);
    return {
        isSignedIn: state.Login.isSignedIn
    }
}
export default connect(mapStateToProps)(App);