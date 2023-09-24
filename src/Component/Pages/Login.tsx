import React,{memo, VFC} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { fetchAsyncGetLogin, setLogin } from '../slice/authSlice';



const Login = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loginUser } = useAppSelector((state: RootState) => state.auth)

  const onClickEvent = () => {
    navigate("/list")
    dispatch(fetchAsyncGetLogin(loginUser.userId))
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    switch ( name ) {
      case "useId": dispatch(setLogin({...loginUser ,userId: value})) 
      break;
      case "password": dispatch(setLogin({...loginUser, password: value}))

    }
    
  };


  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">IT中計システムへようこそ。早速登録してみましょう</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User ID</span>
          </label>
          <input type="text" name="useId" placeholder="User ID" className="input input-bordered" value={loginUser.userId} onChange={handleInputChange}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name="password"  placeholder="password" className="input input-bordered" value={loginUser.password} onChange={handleInputChange} />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">

          <button className="btn btn-primary" onClick={onClickEvent}>Login</button>
        
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login
