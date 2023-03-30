import React, { useState, Component, useEffect } from "react";
import Select from "react-select";
import constants from "../constants";
import colors from "../constants/colors";
import { axiosClient } from '../utills/axiosClient';

const fetchCategories = () => {
  return axiosClient.get('/categories').then(({ data }) => {
    return data?.categories || [];
  })
}

const ClientCategorySelect = ({ setSelectedTags }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(categoryData => setCategories(categoryData.map(cat => ({ label: cat.title, value: cat.id }))))
  }, []);

  const setHandle = (e) => {
    setSelectedTags(Array.isArray(e) ? e.map((hotel) => hotel.value) : []);
  };

  return (
    <div className="mx-auto container py-8">
      <h1 className="text-sm p-2">{constants.selectCategory}</h1>
      <div className="flex flex-wrap items-center lg:justify-between justify-center">
        <div className="p-2" style={{ width: '80%' }}>
          <Select 
            options={categories}  
            onChange={setHandle} 
            isMulti
            closeMenuOnSelect={false}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: colors.primaryColor,
              },
            })}
          />
        </div>
      </div>
    </div>
  );
}
export default ClientCategorySelect;