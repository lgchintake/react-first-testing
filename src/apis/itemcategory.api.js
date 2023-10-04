import axios from "axios";

export const getCategoriesApi = async () => {
  try {
    const categories = await axios.get(
      "http://127.0.0.1:8081/item-category/ui"
    );
    return { status: true, data: categories.data };
  } catch (error) {
    return { status: false, data: "Error connecting server" };
  }
};
