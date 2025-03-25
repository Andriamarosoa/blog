import { Link } from "react-router-dom"
const API_URL = "http://localhost:5000";
type BlogListProp = {
    isGrid: boolean,
    blogs: any[],
    className?: string
}

export function BlogList({ isGrid, blogs, className }: BlogListProp) {
    return <>
        <ul className={`p-0 ${className} grid ${isGrid ? "lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-4" : "block"}`}>
            {blogs.map((blog,index) => (
                <Link to={`/blog/${blog.id}`} className="!no-underline text-black" key={index}>
                    <li key={blog.id} className={`border border-gray-200 h-[100%] p-4 ${isGrid ? "" : "d-flex gap-4"}`}>
                        {(blog.image || true) && (
                            <div className={`picture border  border-gray-200 ${!isGrid && "w-[30%]"} `} style={{ backgroundImage: `url(${API_URL + blog.attachments?.[0]?.path})` }}>
                            </div>
                        )}
                        <div>
                            <h4 className="!text-blue-900 blogTitle py-3 m-0">{blog.title}</h4>
                            <p className="text-gray-500">By {blog.user?.name}</p>
                            <p className="blogContent" dangerouslySetInnerHTML={{ __html: blog.content }}></p>
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
    </>
}
export default BlogList