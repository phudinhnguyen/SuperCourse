import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDetailCourse } from './actions/courses';
import _ from "lodash";

class courseDetail extends Component {

    componentDidMount() {
        const pathname = this.props.history.location.pathname;
        const id = _.last(pathname.split("/"));
        this.props.getDetailCourse(id);
    }

    render() {
        return (
            <div>
                <h1>{this.props.detail.tenKhoaHoc}</h1>
                <h2>{this.props.detail.moTa}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        detail: state.detail
    }
}

export default withRouter(connect(mapStateToProps, { getDetailCourse })(courseDetail))