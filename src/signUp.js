import React, { Component } from 'react'
import "../src/style/Components/signUp.scss";
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
import { signUp } from './actions/user';
import {withRouter} from "react-router-dom"


class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maNhom: "",
            email: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    signUp = () => {
        this.props.signUp(this.state, () => {
            this.props.history.push("/sign-in");
        })
    }

    render() {
        return (
            <form  style={{ border: '1px solid #ccc' }}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label ><b>Tài khoản</b></label>
                    <input onChange={this.onChange} type="text" name="taiKhoan"  />

                    <label ><b>Số điện thoại</b></label>
                    <input onChange={this.onChange} type="text" name="soDT"  />

                    <label htmlFor="email"><b>Email</b></label>
                    <input onChange={this.onChange} type="text" name="email"  />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input onChange={this.onChange} type="password" name="matKhau"  />

                    <label ><b>Họ tên</b></label>
                    <input onChange={this.onChange} type="text" name="hoTen"  />

                    <label>
                        <input type="checkbox" defaultChecked="checked" name="remember" style={{ marginBottom: 15 }} /> Remember me
    </label>
                    <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms &amp; Privacy</a>.</p>
                    <div className="clearfix">
                        <button type="button" className="btn btn-danger">Cancel</button>
                        <button type="submit" onClick={this.signUp} className="btn btn-success">Sign up</button>
                    </div>
                </div>
            </form>

        )
    }
}

export default withRouter(connect(null, {signUp})(SignUp));