export const filterByKeyword = (keyword) => (item) => 
    item.description.toLowerCase().includes(keyword.toLowerCase());

export const filterItems = (items, filterFn) => items.filter(filterFn);