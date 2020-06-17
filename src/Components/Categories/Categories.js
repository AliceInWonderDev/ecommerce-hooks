import React, { useState, useEffect } from "react";
import "./Categories.scss";
import ItemInformation from "../ItemInformation/ItemInformation";

function Categories() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3020/hello")
      .then((resp) => resp.json())
      .then((json) => {
        console.log("JSON fetch", json);
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="categories__container">
      {data.map((item, index) => {
        return (
          <ItemInformation
            key={index}
            img={item.img}
            category={item.category}
          />
        );
      })}
    </div>
  );
}

export default Categories;
