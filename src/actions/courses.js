import * as Types from "../constants"
import axios from "axios";

export const getCourseFromApi = () => {
    return (dispatch) => {
        axios
            .get("http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
            .then((data) => {
                dispatch({
                    type: Types.GET_COURSE_FROM_API,
                    payload: data.data,
                })
            })
            .catch(err => { console.log(err) });
    }

}

export const addCourse = (newCourse) => {
    return ({
        type: Types.ADD_COURSES,
        payload: newCourse
    })
}

export const deleteToName = (name) => {

    return (dispatch) => {

        dispatch({
            type: Types.DELETE,
            payload: name
        })

    }
}

export const select = (selected) => {
    return ({
        type: Types.SELECT,
        payload: selected
    })
}

export const update = (inforCourse) => {
    return ({
        type: Types.UPDATE,
        payload: inforCourse
    })
}

export const getDetailCourse = (maKhoaHoc) => {
    return (dispatch) => {
        axios
            .get("http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc", {
                params: {
                    maKhoaHoc
                }
            })
            .then(data => {
                dispatch({
                    type: Types.GET_DETAIL_BY_ID,
                    payload: data.data
                })
            })
            .catch(err => { console.log(err) })
    }


}