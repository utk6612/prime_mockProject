import React from 'react';
import {hashHistory} from 'react-router';



class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error:{email:'',pass:'',main:''}
        }
    }

    login(){
        const {loginCred}=this.props;
        var email= this.refs.email.value;
        var pass=this.refs.pass.value;
        if(loginCred.email == email && loginCred.pass == pass){
            hashHistory.push('aboutus');
        }
        else if(email && pass){
            this.setState({error:Object.assign({},this.state.error,{main:'Either email or password is wrong'})});
        }
    }


    render(){
        return(
            <div className="col-xs-12">
                <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offse-2 col-md-offset-3 loginContainer">
                    <h3 className="textCenter">Login</h3>
                    <div className="inputDiv">
                        <label>Email</label>
                        <input type="text" ref="email"/>
                    </div>
                    <div className="inputDiv">
                        <label>Password</label>
                        <input type="password" ref="pass"/>    
                    </div>
                    <div className="col-xs-12">
                    <span>{this.state.error.main}</span>
                    <center><button onClick={this.login.bind(this)}>Login</button></center>
                    </div>    
                 </div>   
            </div>    
        )
    }
}

export default Login;