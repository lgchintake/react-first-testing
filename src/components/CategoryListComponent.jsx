import { useEffect, useState } from "react";
import { getCategoriesApi } from "../apis/itemcategory.api";

export const CategoryListComponent = () => {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = async () => {
    const { status, data } = await getCategoriesApi();
    if (status) {
      setCategoryList(data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div>
      <h1>Testing</h1>
      {categoryList.map((category) => (
        <div key={category._id}>
          <h4>{category.categoryName}</h4>
          <div>
            <b>ID:</b> {category._id}
          </div>
          <div>
            <b>Description:</b> {category.categoryDescription}
          </div>
        </div>
      ))}
    </div>
  );
};
