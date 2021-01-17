import React from "react"; // we need this to make JSX compile

interface SignInDialogProps {
  onSignUp: () => void;
  onSignIn: () => void;
}

function SignInDialog(props: SignInDialogProps) {
  return (
    <div style={{ background: "orange" }}>
      <h2>Войти</h2>
      <br />
      Email
      <br />
      <input></input>
      <br />
      Password
      <br />
      <input></input>
      <br />
      Забыли пароль?
      <br />
      <button onClick={props.onSignIn}>Войти</button>
      Новый пользователь? <div onClick={props.onSignUp}>Регистрация</div>
    </div>
  );
}

export default SignInDialog;
