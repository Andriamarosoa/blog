import { Link } from "react-router-dom";

export function Logo({className}:any){
    return <>
        <div className={`${className} fs-4 fw-bold text-dark`}>
            <Link to={'/'} className="!no-underline !text-blue-900"> BLOG POSTS </Link>
        </div>
    </>
}
export default Logo;