import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
// import { LOGIN_USER } from "../types";
import axios from "axios";
import { AUTH_STATE, LOGIN_USER, USER } from "../../Types";

//非同期関数
//-----ログインしたユーザー情報を取得（GET）-----//
export const fetchAsyncGetLogin = createAsyncThunk(
    "auth/login",
    async(auth: string) => {
        const res = await axios.get<USER>(     //post<型>とすると、返り値を型指定できる
            "",   //authのurlを入れる
            {
                headers: {
                    "Content-Type": "application/json",
                },
                params: {
                    loginUser: auth
                }
            }
        );
        return res.data
    }
)








//初期値を設定
const initialState: AUTH_STATE= {

    //ログインする人が入力
    loginUser: {
        userId: "",
        password: "",

    },

    //ログインした人のユーザー情報
    user: {
        department: "",             //部署名　string
        givenName: "",              //名前　　string
        sn: "",                     //部署コード　string
        title: "",                  //役職　　string

    },


}

//slice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //ログイン者が入力した値を更新
        setLogin: (state, action: PayloadAction<LOGIN_USER>) => {
            state.loginUser = action.payload
        }

    },
    extraReducers: (builder) => {
        //-----ログインしたユーザー情報の取得後の処理（GET）-----//
        //＜成功＞
        builder.addCase (       
            fetchAsyncGetLogin.fulfilled,           //fetchAsyncGetItems関数でreturnした値をpayloadとして受け取ることができる
            (state, action: PayloadAction<USER>) => {
                return {
                    ...state,
                    user: action.payload,
                }
            }
        );
        //＜失敗＞
        builder.addCase(
            fetchAsyncGetLogin.rejected, () => {
            // window.location.href = "/"
            console.log("失敗")
        });
    }
})

export default authSlice.reducer;
export const { setLogin, } = authSlice.actions