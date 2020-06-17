import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemInformation from "../ItemInformation/ItemInformation";

function CategoriesChildren() {
  const [childData, setChildData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3020/categories/${id}`)
      .then((resp) => resp.json())
      .then((json) => {
        console.log("JSON fetch", json);
        setChildData(json);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="categories__container">
      {childData.map((item, index) => {
        return (
          <ItemInformation key={index} img={item.img} category={item.name} />
        );
      })}
    </div>
  );
}

export default CategoriesChildren;
