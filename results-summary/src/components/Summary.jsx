import React, { useState, useEffect } from "react";
import Category from "./Category";
import { v4 as uuid } from "uuid";
import Button from "./Button";
import categoryColors from "../constants/constants";

function Summary() {
  const [categories, setCategories] = useState([]);

  const getData = () => {
    fetch("src/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (categoriesJson) {
        const categories = formatData(categoriesJson);
        setCategories(categories);
      });
  };

  const formatData = (data) => {
    return data.map((x) => {
      const color = categoryColors.find((c) => c.category === x.category);
      x.textColorClass = color.textColorClass;
      x.backgroundColorClass = color.backgroundColorClass;
      return x;
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full px-7 md:w-96">
      <h2 className="font-bold text-2xl py-7">Summary</h2>
      {categories.map((c) => (
        <Category
          key={uuid().slice(0, 8)}
          category={c.category}
          score={c.score}
          icon={c.icon.replace("./", "src/")}
          backgroundColorClass={c.backgroundColorClass}
          textColorClass={c.textColorClass}
        />
      ))}
      <Button />
    </div>
  );
}

export default Summary;
