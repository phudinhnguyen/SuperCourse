import React, { Component } from 'react'
import "../src/style/Components/signUp.scss";


export default class signIn extends Component {
    render() {
        return (
            <form action="action_page.php">
                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                </div>
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
    </label>
                </div>
                <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>

        )
    }
}
