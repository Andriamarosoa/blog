import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "./topWritter.css"
import { userService } from "../../services/userService";
export default function TopWritter(){
    const [users, setUsers] = useState(new Array());
    
        
    useEffect(() => {
        userService.getTopWritter().then((users: any) => {
            setUsers(users.data);
        })
    },[])
    return <>
        <h6 className="font-bold mt-4 mb-2 uppercase">
            TOP WRITTER
        </h6>

        <ul className={`p-0 grid block`}>
            {users.map((user,index) => (
                <li key={user.id} className={`border  gap-4 p-4 py-3 flex items-center `}>
                    <span className=" profilPicture">
                    </span>
                    <div>
                        <Link to={`/blog/${user.id}`} className="!no-underline text-black">
                            <h6 className="text !text-blue-900 popularBLogTitle m-0">{user.name}</h6>
                        </Link>
                    </div> 
                </li>
            ))}
        </ul>
    </>
}