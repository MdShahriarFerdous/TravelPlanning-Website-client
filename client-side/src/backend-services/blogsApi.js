import axios from "axios";
import { toast } from "react-toastify";
import qs from "qs";
import "react-toastify/dist/ReactToastify.css";

// =========================BlogsList API=========================
export const blogsList = async ({ query }) => {
  const sortedQuery = qs.stringify(query);
  try {
    const { data } = await axios.get(`/blogs?${sortedQuery}`);
    if (data.error) {
      toast.error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.error(error);
    toast.error("Fetching  failed. Try again.");
  }
};

// ==================Blogs Home page List API======================
export const blogsInHomeList = async () => {
  try {
    return await axios.get("/blogs-home");
  } catch (error) {
    console.error(error);
  }
};

// ======================Blogs Gallery API========================
export const blogsGalleryList = async () => {
  try {
    return await axios.get("/blogs-gallery");
  } catch (error) {
    console.error(error);
  }
};

// ======================Blog Categories List API========================
export const blogCategoriesList = async () => {
  try {
    return await axios.get("/blog-categories");
  } catch (error) {
    console.error(error);
  }
};
// ======================Blog Tags List API========================
export const blogTagsList = async () => {
  try {
    return await axios.get("/blog-tags");
  } catch (error) {
    console.error(error);
  }
};

// ======================Blog Details API========================
export const blogsDetailedList = async (blogId) => {
  try {
    return await axios.get(`/blogs/${blogId}`);
  } catch (error) {
    console.error(error);
  }
};
