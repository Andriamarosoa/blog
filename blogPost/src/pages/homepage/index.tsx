
import { useEffect, useState } from "react";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./homepage.css" 
import { blogService } from "../../services/blogService";
import FeaturedNews from "../../components/featuredNews";
import TopWritter from "../../components/topWritter";
import BlogList from "../../components/blogList";
import PopularBlog from "../../components/popularBlog/popularBLog";

const HomePage = () => {
    const [blogs, setBlogs] = useState(new Array());
    const [isGrid, setIsGrid] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(9);
    const [totalCount, setTotalCount] = useState(0);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };


    useEffect(() => {
        blogService.getAllBlogs(currentPage,itemPerPage).then((res: any) => {
            setBlogs(res.data)
            setTotalCount(res.metadata.count)
        })
    }, [currentPage,itemPerPage])
    return (
        <div className={`mx-auto content  py-0 ${isGrid && 'gridPage'}`}>
            <div className="row">
                <FeaturedNews />
            </div>
            <div className="row">
                <div className="col-md-3 hidden lg:block">
                    <PopularBlog />
                    <TopWritter />
                </div>
                <div className="col">
                    <h6 className="font-bold uppercase flex justify-between align-items-center" style={{height:'32px'}}>
                        <span>More top stories</span>

                        <span className="hidden lg:inline">
                            {
                                isGrid &&
                                <Button onClick={() => setIsGrid(!isGrid)} type="text" icon={<UnorderedListOutlined />} /> ||
                                <Button onClick={() => setIsGrid(!isGrid)} type="text" icon={<AppstoreOutlined />} />
                            }
                        </span>


                    </h6>
                    <BlogList blogs={blogs} isGrid={isGrid}/>
                    
                </div>

            </div>

        </div>
    );
};

export default HomePage;