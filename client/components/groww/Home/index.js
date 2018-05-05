import React from 'react';
import {hashHistory} from 'react-router';

class Home extends React.Component{

    navigate(path){
        hashHistory.push(path)
    }

    render(){
        return(
            <div className="homeContainer">   
                <div className="linkContainer">
                    <div className="box boxShadow" onClick={this.navigate.bind(this,'aboutus/profile')}>
                        <center><img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"/></center>
                        <p className="text textCenter">Profile</p>
                    </div>
                    <div className="box boxShadow" onClick={this.navigate.bind(this,'aboutus/team')}>
                    <center><img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"/></center>
                    <p className="text textCenter">Team</p>
                    </div>
                    <div className="box boxShadow" onClick={this.navigate.bind(this,'aboutus/contactus')}>
                    <center><img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"/></center>
                    < p  className="text textCenter">Contact Us</p>
                    </div>            
                </div>    
            </div>    
        )
    }
}

export default Home;