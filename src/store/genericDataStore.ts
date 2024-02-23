import { defineStore } from 'pinia';
import GenericData from '@/services/Data/genericData';

const genericDataService = new GenericData(); 

interface RootState {
  posts: any[],
  errorMessage: string | null,
  isLoading: boolean,
}

export const useGenericDataStore = defineStore('genericDataStore', {
  state: (): RootState => ({
    posts: [],
    errorMessage: null,
    isLoading: false,
  }),

  actions: {
    async fetchPosts(): Promise<void> {
      this.isLoading = true;
      try {
        const response = await genericDataService.getPosts();
        this.posts = response;
      } catch (error: any) {
        this.errorMessage = 'Hubo un problema al obtener los posts';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async fetchPostById(id: string): Promise<any> {
      this.isLoading = true;
      try {
        const response = await genericDataService.getPostById(id);
        return response;
      } catch (error: any) {
        this.errorMessage = 'Hubo un problema al obtener el post';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async createPost(postData: { title: string, body: string, userId: number }): Promise<void> {
      this.isLoading = true;
      try {
        await genericDataService.createPost(postData);
      } catch (error: any) {
        this.errorMessage = 'Hubo un problema al crear el post';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async updatePost(id: string, postData: { title: string, body: string }): Promise<void> {
      this.isLoading = true;
      try {
        await genericDataService.updatePost(id, postData);
      } catch (error: any) {
        this.errorMessage = 'Hubo un problema al actualizar el post';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async deletePost(id: string): Promise<void> {
      this.isLoading = true;
      try {
        await genericDataService.deletePost(id);
      } catch (error: any) {
        this.errorMessage = 'Hubo un problema al eliminar el post';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});

export default useGenericDataStore;
