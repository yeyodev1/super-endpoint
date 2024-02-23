import APIBase from "../Base"; 

class GenericData extends APIBase {
  constructor() {
    super();
  }
  
  async getPosts(): Promise<any> {
    return this.get('posts?_limit=10');
  }
  
  async getPostById(id: string): Promise<any> {
    return this.get(`posts/${id}`);
  }
  
  async createPost(postData: { title: string, body: string, userId: number }): Promise<any> {
    return this.post('posts', postData);
  }
  
  async updatePost(id: string, postData: { title: string, body: string }): Promise<any> {
    return this.put(`posts/${id}`, postData);
  }
  
  async deletePost(id: string): Promise<any> {
    return this.delete(`posts/${id}`);
  }
}

export default GenericData;
