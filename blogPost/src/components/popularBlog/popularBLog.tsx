import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "./popularBlog.css"
import blogService from "../../services/blogService";
export default function PopularBlog(){
    const [blogs, setBlogs] = useState(new Array());
    
        
    useEffect(() => {
        blogService.getAllBlogs(1,).then((res: any) => {
            setBlogs(res.data)
        })
    },[])
    return <>
        <h6 className="font-bold uppercase flex justify-between align-items-center" style={{height:'32px'}}>
            <span>
                MOST POPULAR
            </span>
           
        </h6>

        <ul className={`p-0 grid block`}>
            {blogs.map((blog,index) => (
                <li key={blog.id} className={`border  gap-4 p-4 py-3 flex items-center `}>
                    <span className="number">
                        {index + 1}
                    </span>
                    <div>
                        <Link to={`/blog/${blog.id}`} className="!no-underline text-black">
                            <h6 className="text !text-blue-900 popularBLogTitle m-0">{blog.title}</h6>
                        </Link>
                    </div> 
                </li>
            ))}
        </ul>
    </>
}