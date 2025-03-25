import "./login.css"
import { useForm } from "react-hook-form";
import { registerPlugin } from 'react-filepond'
 
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import { userService } from "../../services/userService";
import { Link } from "react-router-dom";
registerPlugin(FilePondPluginImagePreview)



type User = {
  email: string; 
  password:string;
};
type loginProps={
  login:any,
  logout:any,
}
const Login = ({login,logout}:loginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ defaultValues: { email:'tinah.andriamarosoa@gmail.com',password:'Qwerty12345'} });
  
  const onSubmit = (data: User) => {
    userService.login(data.email,data.password).then(login).catch(logout)
  };
  

  return (
    <>
      <div className="flex login-container items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8  shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700">E-mail</label>
            <input
              type="email"
              {...register("email", { required: "E-mail is required" })}
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-3 border border-gray-300  focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-900 text-white font-semibold  hover:bg-blue-900 transition"
          >
            Login
          </button>
          <div>
            <span className="">
              <span>Dont have an account? </span>
              <Link to="/register" className="underline text-blue-900">
                Register
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login