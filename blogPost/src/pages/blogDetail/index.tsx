import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import blogService from "../../services/blogService";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import UserPicture from "../../components/userPicture";
import { useUser } from "../../providers/userProvider";
import { Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { config } from "../../config";
const API_URL = config.API_URL;

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<any | null>(null);
  const [createdAt, setCreatedAt] = useState<string | null>(null);
  const { user } = useUser()
  const navigate = useNavigate();
  const handleDelete=()=>{
    if(id)
      blogService.deleteBlog(+id).then((res)=>{
        console.log(res);
        navigate("/app/my-post")
      })
  }


  useEffect(() => {
    if (id)
      blogService.getBlogById(+id).then((blog: any) => setBlog(blog || null))
  }, [id]);
  useEffect(() => {
    if (blog?.createdAt)
      setCreatedAt(new Date(blog.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }))
  }, [blog])

  if (!blog) {
    return <p className="text-red-500 font-semibold">Blog not found!</p>;
  }

  return (
    <div className="max-w-3xl mx-auto ">
      <div className=" flex items-center py-2 justify-between">
        <span className="flex items-center gap-x-4">
          <UserPicture className="w-[3rem] h-[3rem]" />
          <div className="leading-none">
            <div className="text-gray-500 fs-4">{blog.user.name}</div>
            <div className="text-gray-500 text-xs">{createdAt}</div>
          </div>
        </span>
        <span>
          {user?.id == blog.userId && <>
            <Link to={`/blog/${blog.id}/edit`}>
              <Button type="text" icon={<EditOutlined />} />
            </Link>
            <Button onClick={handleDelete} type="text" icon={<DeleteOutlined />} />
          </>}
        </span>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          (blog?.attachments || []).map((attachment: any) => {
            return <SwiperSlide>
              <div className="picture !h-[500px]" style={{ backgroundImage: `url(${API_URL}${attachment.path})` }}>

              </div>
            </SwiperSlide>
          })
        }
      </Swiper>
      <h1 className="text-3xl font-bold py-3">{blog.title}</h1>
      <p className="" dangerouslySetInnerHTML={{ __html: blog.content }}></p>
      <Link to="/" className="mt-4 inline-block text-blue-500">Back to Blog List</Link>
    </div>
  );
};

export default BlogDetail;
