import { usercontext } from "./utils/Context";
import { useContext } from 'react';

const Header=()=>{
   
    const {name } =useContext(usercontext);

    return (
        <>
        <div  className="header">this is header component</div>
        <div >{name}</div>
         </>
    )
}
export default Header;