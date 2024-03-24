import { useState, useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_url, GEO_options } from "./api/api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    // check why it is not working this way
    // try {
    //   const response = await fetch(`${GEO_url}/cities?namePrefix=${inputValue}`,GEO_options);
    //   const responseData=await response.json();
    //   const data = await responseData.map.data((city)=>{
    //     return {
    //       value: `${city.latitude} ${city.longitude}`,
    //       label: `${city.name},${city.countryCode}`,
    //       };
    //   })
    //   console.log(data);
    // }
    // catch(err) {
    //   console.error("Error Fetching Data",err);
    // }

    return fetch(`${GEO_url}/cities?namePrefix=${inputValue}`, GEO_options)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
