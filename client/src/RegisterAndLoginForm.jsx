import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('register')

  const {setUsername: setLoggedInUsername, setId} = useContext(UserContext)

  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === 'register' ? 'register' : 'login'
    const {data} = await axios.post(url, { username, password });
    setLoggedInUsername(username)
    setId(data.id)
  }

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <input
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
        </button>
        {isLoginOrRegister == "register" && (
          <div className="text-center mt-2">
            Already a member? &nbsp;
            <button onClick={() => setIsLoginOrRegister("login")}>
              Login
            </button>
          </div>
        )}
        {isLoginOrRegister == "login" && (
          <div className="text-center mt-2">
            Don't have account? &nbsp;
            <button onClick={() => setIsLoginOrRegister("register")}>
              Register
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
