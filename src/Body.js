import { useContext } from "react";
import { usercontext } from "./utils/Context";
const Body=()=>{
    const {user, setuser}=useContext(usercontext);
    return (
        <>
        <div>{user.name} naam to suna hi hoga</div>
        <div className="body">
           
       <input value={user.name} 
        onChange={e=> setuser({name:e.target.value})}
       ></input>

        </div>
       </>
    )
}

export default Body;