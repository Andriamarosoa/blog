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
  Editor,
  Toolbar,
  Separator,
  EditorProvider
} from 'react-simple-wysiwyg';
import "./saveBlog.css"
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import { ActualFileObject } from "filepond";
import blogService, { BlogPost } from '../../services/blogService'
import { useParams } from "react-router-dom";
import { config } from "../../config";
const API_URL = config.API_URL;
registerPlugin(FilePondPluginImagePreview)


 
const SaveBlog = () => {
  const { id } = useParams<{ id: string }>();
  const [editMode, setEditMode] = useState(!!id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
    getValues
  } = useForm<BlogPost>({ defaultValues: { content: "",userId:1 } });

  const content = watch("content");
  const [selectedFiles, setSelectedFiles] = useState<ActualFileObject[]>([]);
  const onSubmit = (data: BlogPost) => {
    const attachments:any=Array.from(selectedFiles).filter((f:any)=>!f.getMetadata('id')).map((f:any)=>f.file)
    data.attachments=attachments
    console.log(data);
    
    blogService.saveBlog(data).then()
  };
  const handleFileChange = (file:any) => {
    const arrfile:any=Array.from(file).map((f:any)=>f.file)


    setSelectedFiles(file)
    setValue("attachments",file , { shouldValidate: true });
    trigger("attachments"); // Trigger validation manually
      
      
    
  }; 
  useEffect(()=>{
    if(id  && +id){
      setEditMode(true);
      register("id",{ required: "Content is required" })
      setValue('id',+id);
      blogService.getBlogById(+id).then(blog=>{
        if(blog){
          setValue('title',blog.title)
          setValue('content',blog.content)
          setSelectedFiles((blog.attachments||[]).map(attachment=>{
            return {
              source: `${API_URL}${attachment.path}`,
              options: {
                metadata: {
                  id:attachment.id,
                },
              },
             
            }
          }) as any)
          
        }
      })
    }
  },[id])




  useEffect(()=>{
    register("attachments",{required:"Please add Photo"})
    register("content", { required: "Content is required" })
  },[register])


  return (
    <>
      <div className="saveBlog-content">
        <div className="text-blue-900 fs-4 fw-bold">{editMode && 'EDIT BLOG' || 'NEW BLOG'}</div>
        <div className="max-w-2xl mx-autos  ">
          <form onSubmit={handleSubmit(onSubmit)} >
            <div>
              <label className="block font-semibold">Title</label>
              <input
                {...register("title", { required: "Title is required" })}
                className="w-full p-2 border "
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>
            {/* File Upload */}
            <div>
              <label className="block font-semibold">Photos</label>
              <FilePond
                credits={false}
                files={selectedFiles}
                onupdatefiles={handleFileChange}
                allowMultiple={true}
               
                name="attachments" /* sets the file input name, it's filepond by default */
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
              {errors.attachments && <p className="text-red-500 text-sm">{errors.attachments.message}</p>}
            </div>
           
            <div>
              <label className="block font-semibold">Content</label>
              <EditorProvider>
                <Editor className="border-none h-15" value={content} onChange={(e: any) => setValue("content", e.target.value, { shouldValidate: true })}>
                  <Toolbar>
                    <BtnBold />
                    <BtnItalic />
                    <BtnNumberedList />
                    <BtnBulletList />
                    <BtnClearFormatting />
                    <BtnLink />
                    <BtnStrikeThrough />
                    <Separator />
                    <BtnUndo />
                    <BtnRedo />
                    <HtmlButton />
                  </Toolbar>
                </Editor>
              </EditorProvider>

              {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
            </div>

            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Save Blog
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SaveBlog;