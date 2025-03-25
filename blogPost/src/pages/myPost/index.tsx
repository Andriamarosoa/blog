import { useEffect, useState } from "react"
import BlogList from "../../components/blogList"
import { Button } from "antd"
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { blogService } from "../../services/blogService";
import { useUser } from "../../providers/userProvider";
import Pagination from "../../components/pagination";

export function MyPost() {
    const [blogs, setBlogs] = useState(new Array)
    const [isGrid, setIsGrid] = useState(false)
    const { user } = useUser()
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(9);
    const [totalCount, setTotalCount] = useState(0);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        if(user?.id)
            blogService.getBlogByUserId(user.id!, currentPage, itemPerPage).then((res: any) => {
                setBlogs(res.data)
                setTotalCount(res.metadata.count)
            })
    }, [currentPage,user])
    return <>
        <h6 className="font-bold  flex justify-between align-items-center"  >
            <span className="uppercase">YOUR POSTS</span>

            <span className="py-2">
                <Pagination itemsPerPage={itemPerPage} totalCount={totalCount} onPageChange={handlePageChange} />
                <span className="hidden lg:inline">
                    {
                        isGrid &&
                        <Button onClick={() => setIsGrid(!isGrid)} type="text" icon={<UnorderedListOutlined />} /> ||
                        <Button onClick={() => setIsGrid(!isGrid)} type="text" icon={<AppstoreOutlined />} />
                    }
                </span>

            </span>


        </h6>
        <BlogList blogs={blogs} isGrid={isGrid} />
    </>
}
export default MyPost