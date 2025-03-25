const API_URL = "http://localhost:5000"; // Remplace avec ton API

export type BlogPost = {
  id?: number;
  title: string;
  content: string;
  userId: number;
  attachments:any[]
};

export const blogService = {
  async getAllBlogs(page:number=1,itemPerPage=9): Promise<BlogPost[]> {
    const take=itemPerPage;
    const skip=(page>0 && page-1 ||0)*take
    const filter={take,skip}

    const response = await fetch(`${API_URL}/blog?filter=${JSON.stringify(filter)}`);
    if (!response.ok) throw new Error("Failed to fetch blogs");
    return response.json();
  },
  async getBlogByUserId(userId:number,page:number=1,itemPerPage=9): Promise<BlogPost[]> {
    const take=itemPerPage;
    const skip=(page>0 && page-1 ||0)*take
    const filter={where:{userId},take,skip}
    
    const response = await fetch(`${API_URL}/blog?filter=${JSON.stringify(filter)}`);
    if (!response.ok) throw new Error("Failed to fetch blogs");
    return response.json();
  },
  async getBlogById(id: number): Promise<BlogPost | null> {
    const response = await fetch(`${API_URL}/blog/${id}`);
    if (!response.ok) return null;
    return response.json();
  },
  async saveBlog(blog:BlogPost){
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("content", blog.content);
    formData.append("userId", blog.userId+'');
    if(blog.id)
      formData.append("id", blog.id+'');
    
    
    for (let i = 0; i < blog.attachments.length; i++) {
      
      formData.append("attachments", blog.attachments[i]); // Append multiple files
    }

    const response = await fetch(`${API_URL}/blog`, {
      method: "POST",
      body: formData, // Send as multipart/form-data
    });
    return response
  },
  async deleteBlog(id:number){
    const response = await fetch(`${API_URL}/blog/${id}`,{method:"DELETE"});
    if (!response.ok) return null;
    return response.json();
  }
};
export default blogService