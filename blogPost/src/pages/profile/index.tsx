import "./profile.css"
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FilePond, registerPlugin } from 'react-filepond'
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnUndo,
  HtmlButton,
  // Editor,
  Toolbar,
  Separator,
  EditorProvider
} from 'react-simple-wysiwyg';

import { Editor } from 'react-simple-wysiwyg';
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import { ActualFileObject } from "filepond";
import { useUser } from "../../providers/userProvider";
registerPlugin(FilePondPluginImagePreview)



type BlogPost = {
  name: string;
  email: string;
  password:string;
  files?: FileList;
};
const Profil = () => {
  const {user}=useUser()
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
    getValues
  } = useForm<BlogPost>({ defaultValues: user });

  const [selectedFiles, setSelectedFiles] = useState<ActualFileObject[]>([]);
  const onSubmit = (data: BlogPost) => {
    console.log("Blog saved:", data);
    
  };
  const handleFileChange = (file:any) => {
    file=Array.from(file);
    setSelectedFiles(file);
    setValue("files", file, { shouldValidate: true });
    trigger("files"); // Trigger validation manually
       

  }; 
  useEffect(()=>{
    register("files", { required: "Please add Photo" })
  },[register])
  useEffect(()=>{
    if(user){
      setValue('name',user.name)
      setValue('email',user.email)
    }
  },[user])
  return (
    <>
      <div className="saveBlog-content">
        <div className="text-blue-900 fs-4 fw-bold">MY PROFILE</div>
        <div className="max-w-2xl mx-autos  ">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <label className="block font-semibold">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 border "
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block font-semibold">E-mail</label>
              <input type="email"
                {...register("email", { required: "E-mail is required" })}
                className="w-full p-2 border "
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* <div>
              <label className="block font-semibold">Password</label>
              <input type="password"
                {...register("password", { required: "Password is required" })}
                className="w-full p-2 border "
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div> */}
            
            {/* File Upload */}
            <div>
              <label className="block font-semibold">Photos</label>
              <FilePond
                credits={false}
                files={selectedFiles}
                onupdatefiles={handleFileChange}
                allowMultiple={true}
                maxFiles={3} 
                name="files" /* sets the file input name, it's filepond by default */
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
              {errors.files && <p className="text-red-500 text-sm">{errors.files.message}</p>}
            </div>
           
            

            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profil