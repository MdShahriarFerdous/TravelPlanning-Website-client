import axios from "axios";
import qs from "qs";

// =========================BlogsList API=========================
export const blogsList = async ({ query }) => {
  const sortedQuery = qs.stringify(query);
  try {
    const { data } = await axios.get(`/blogs?${sortedQuery}`);
    if (data.error) {
      console.error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.error(error);
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

// ======================User Specific Blogs API========================
export const blogsListByUser = async ({ query }) => {
  const sortedQuery = qs.stringify(query);
  try {
    const authToken = localStorage.getItem("auth");
    const token = authToken && JSON.parse(authToken).token;

    if (token) {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/blogs-by-user?${sortedQuery}`,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (data.error) {
        console.error(data.error);
        return false;
      } else {
        return data;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
  }
};
