import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { toast } from "react-toastify";
import logged, { checkLogged } from "../../app/logged";
import { UsersModel } from "../../model/UserInterface";

import { apiService } from "../../Service/ApiService";

import "./LogPopUp.css";
// import { Dispatch } from "redux";


function LogPopUp(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<UsersModel>()
  const dispatch = useDispatch();
  const loginSelector = useSelector((state: any) => state.logged);
  const [toLog, setToLogg] = useState<boolean>(true);


  function checkLoggedUser(user: UsersModel) {
    console.log(user)
    apiService.logIn(user).then(async (res) => {
      if (res === 200) {
        dispatch(checkLogged(true))
      } else {
        toastMessError()
      }
    })
  }

  function registerFunction(user: UsersModel) {
    console.log(user)
    apiService.register(user).then((res) => {
      if (res === 200) {
        // alert('Registerd, Please Login');
        // dispatch(checkLogged(true))
      } else {
        toastMessErrorRegister()
      }
    })
  }


  function toastMessError() {
    toast.error('username or password incorrect', {
        position: toast.POSITION.TOP_CENTER,
        className: 'discoverToast',
        theme: "colored",
        // hideProgressBar:true,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: false,
    })
}
  function toastMessErrorRegister() {
    toast.error('Cant Register', {
        position: toast.POSITION.TOP_CENTER,
        className: 'discoverToast',
        theme: "colored",
        // hideProgressBar:true,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: false,
    })
}

  return (
    <div className="logPopUp">
      <div className="loginForm">
        <h4>Welcome</h4>
        {
          toLog ?

            <form onSubmit={handleSubmit(checkLoggedUser)} action="">
              <input required placeholder="username" type="text"  {...register('username')} />
              <input required placeholder="password" type="password" {...register('password')} />
              <button>log in</button>
            </form>
            : <form onSubmit={handleSubmit(registerFunction)} action="">
              <input required placeholder="First Name" type="text"  {...register('firstName')} />
              <input required placeholder="Last Name" type="text"  {...register('lastName')} />
              <input required placeholder="username" type="text"  {...register('username')} />
              <input required placeholder="password" type="password" {...register('password')} />
              {/* {errors.password? <p>Min Length 8</p>: <></>} */}
              <input required placeholder="email" type="email" {...register('email')} />
              <button>Register</button>
            </form>}
        <button id="registerOrLogin" onClick={() => setToLogg(!toLog)}>
          {
            toLog ?
              "Register"
              : "Login"}
        </button>
      </div>
     </div>
  );
}

export default LogPopUp;
