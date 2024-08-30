import { React, useState, useEffect } from "react";
import { debounce } from "../helpers/debouncing";
import { throttle } from "../helpers/throttle";
import { filterByKeyword, filterItems } from '../utils/filtering';

function SearchKeyWord({setFilteredItems}) {
    const [keyword, setKeyword] = useState('')

    function inputHandler(e) {
        setKeyword(e.target.value)
        console.log(keyword)
    }

    useEffect(() => {
        const handleApiCall = async () => {
            const url = "http://localhost:3000/items";
            try {
                const response = await fetch(url, {
                    method: "GET"
                });
                if (response.ok) {
                    const data = await response.json();
                    // Apply filtering
                    const filteredData = filterItems(data, filterByKeyword(keyword));
                    setFilteredItems(filteredData);
                } else {
                    console.log('Network response was not ok');
                }
            } catch (err) {
                console.log(err.message);
            }
        };
        //throttle
        const throttledApiCall = throttle(handleApiCall, 200); // Adjust the limit as needed

        if (keyword) {
            throttledApiCall()
        } else {
            setFilteredItems([])
        }
    }, [keyword, setFilteredItems]);
    
    
  return (
    <div>
        <input type='text' placeholder='search key word' onChange={debounce(inputHandler, 300)}></input>
    </div>
  )
}

export default SearchKeyWord