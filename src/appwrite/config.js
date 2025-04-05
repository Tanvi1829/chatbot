import Conf from "../Conf/Conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service{
    client = new Client();
    databases;x
    bucket;

    constructor(){
        this.client
        .setEndpoint(Conf.chatbotapplicationUrl)
        .setProject(Conf.chatbotapplicationProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                Conf.chatbotapplicationDatabaseId,
                Conf.chatbotapplicationCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                Conf.chatbotapplicationDatabaseId,
                Conf.chatbotapplicationCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                Conf.chatbotapplicationDatabaseId,
                Conf.chatbotapplicationCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return  await this.databases.deleteDocument(
                Conf.chatbotapplicationDatabaseId,
                Conf.chatbotapplicationCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                Conf.chatbotapplicationDatabaseId,
                Conf.chatbotapplicationCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                Conf.chatbotapplicationBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                Conf.chatbotapplicationBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            Conf.chatbotapplicationBucketId,
            fileId
        )
    }
}

const service = new Service();
export default service