import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";
import { firebaseApp } from "../../firebaseconfig";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = ({ setGlobalState }) => {
  const [fieldValues, setFieldValues] = useState({});
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result?.user;
        setGlobalState({ user });
        return navigate("/");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  const handleValueChange = (event) => {
    setFieldValues({ ...fieldValues, [event.target.name]: event.target.value });
  };

  const handleCreateAccountWithPass = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      fieldValues.email,
      fieldValues.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = "Noobmaster69";
        setGlobalState({ user });
        return navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <div className="login-sec">
        <div className="login-img">
          <h1>FASHION</h1>
        </div>
        <form className="login-text-sec" onSubmit={handleCreateAccountWithPass}>
          <h1>Create an account</h1>
          <p className="log-small">Let's get your account</p>
          <br></br>
          <input
            className="login-input"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleValueChange}
          />
          <br></br>
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleValueChange}
          />
          <br></br>
          <input
            name="password"
            className="login-input"
            type="password"
            placeholder="Password"
            onChange={handleValueChange}
          />
          <br></br>
          <button
            className="login-btn one"
            onClick={handleCreateAccountWithPass}
          >
            Create Account
          </button>
          <br></br>
          <p className="or">or</p>
          <button className="login-btn two" onClick={handleGoogleSignIn}>
            {" "}
            <i class="fa-brands fa-google"></i> Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
