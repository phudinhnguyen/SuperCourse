import axios from "axios";
import { dispatch } from "rxjs/internal/observable/range";

export const signUp = (dataUser, callBack) => {
        return(dispatch) => {
            axios
            .post("http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy", dataUser)
            .then((data) => {
                callBack();
                console.log(data)
            })
            .catch(err => { console.log(err) });
        }

}