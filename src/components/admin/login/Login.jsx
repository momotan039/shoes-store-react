import { saveUserinLocalStoarge, Users } from '../../../utils/local.mjs'
import './Login.css'
export default function Login({setUser}) {
    const loginUser=(i)=>{
        setUser(Users[i])
        saveUserinLocalStoarge(Users[i])
    }
  return (
    <div id='login-container' className="center">
        <div className="login">
            <h1>Login</h1>
            <div className="row">
            <button onClick={()=>loginUser(0)}>Login as Admin</button>
            <button onClick={()=>loginUser(1)}>Login as User</button>
            </div>
        </div>
    </div>
  )
}
