import React, { use } from "react";
import { ShopContext } from "../context/ShopContext";
import { useEffect ,useContext , useState} from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestCollection , setLatestestCollection] = useState([]);

  useEffect(()=> {
    setLatestestCollection(products.slice(0, 10));

  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center my-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Introducing our latest collection, where style meets sophistication.
          Every piece is thoughtfully designed to bring you a perfect blend of
          elegance and comfort. From bold statement pieces to timeless
          essentials, this collection offers something for every taste and
          occasion. Whether you're looking to refresh your wardrobe or add a
          touch of luxury to your everyday look, our new arrivals are here to
          make you stand out. Don't miss out—explore the latest trends and
          elevate your style today!
        </p>
      </div>

      {/* rendring products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {latestCollection.map((item,index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))
        }
      </div>

    </div>
  );
};

export default LatestCollection;
