import { useState, useEffect } from "react";
import BlogList from "../../components/blogList";
import blogService from "../../services/blogService";
import { Button } from "antd";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import "./blogList.css"
import Pagination from "../../components/pagination";
export function BlogListPage() {
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
    return <>
        <div className="col blogList-container">
            <h6 className="font-bold  flex justify-between align-items-center"  >
                <span className="uppercase"></span>

                <div className="py-2">
                    <Pagination itemsPerPage={itemPerPage} totalCount={totalCount}  onPageChange={handlePageChange} />
                    <span className="hidden lg:inline">
                        {
                            isGrid &&
                            <Button onClick={() => setIsGrid(!isGrid)} type="text" icon={<UnorderedListOutlined />} /> ||
                            <Button onClick={() => setIsGrid(!isGrid)} type="text" icon={<AppstoreOutlined />} />
                        }
                    </span>

                </div>


            </h6>
            <BlogList isGrid={isGrid} blogs={blogs} className="pb-2" />
        </div>
    </>
}