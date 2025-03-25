import { Link, Outlet } from "react-router-dom";
import UserPicture from "../../components/userPicture";
import { useUser } from "../../providers/userProvider";

export function Profil({ children }: any) {
    const { user, logout } = useUser()

    return <>
        <div className="row py-4">
            <div className="col-md-3  ">
                <div className="">
                    <UserPicture className="mx-auto !w-[8rem] !h-[8rem]" />
                </div>
                <div className="text-center text-blue-900 py-2 font-bold">
                    {user?.name}
                </div>
                <div className="text-center py-4">
                    <Link to="/app/profile">

                        {
                            user &&
                            <h6 className="font-bold uppercase  " style={{ height: '32px' }}>
                                My Profile
                            </h6>
                        }

                    </Link>
                    <Link to="/app/my-post">
                        {
                            user &&
                            <h6 className="font-bold uppercase  " style={{ height: '32px' }}>
                                My Post
                            </h6>
                        }
                    </Link>

                    {
                        user &&
                        <h6 className="font-bold uppercase  " onClick={logout} style={{ height: '32px' }}>
                            Disconnect
                        </h6>
                    }
                    {
                        !user &&
                        <Link to="my-post">
                            <h6 className="font-bold uppercase  " style={{ height: '32px' }}>
                                Login
                            </h6>
                        </Link>
                    }
                </div>
            </div>
            <div className="col">
                {children || <Outlet />}
            </div>
        </div>
    </>
}
export default Profil;