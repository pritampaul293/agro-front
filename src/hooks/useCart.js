import { useEffect, useState } from "react";
import { getStoredData } from "../LocalDb/LocalDb";

const useCart = (allProducts) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (allProducts?.length) {
      const savedCourses = getStoredData();
      const selectedCourses = [];
      for (const id in savedCourses) {
        const addedCourse = allProducts.find((course) => course._id === id);
        if (addedCourse) {
          const quantity = savedCourses[id];
          addedCourse.quantity = quantity;
          selectedCourses.push(addedCourse);
        }
      }
      setCart(selectedCourses);
    }
  }, [allProducts]);
  // same function takhe ki duibar return hocce??
  return [cart, setCart];
};
export default useCart;
