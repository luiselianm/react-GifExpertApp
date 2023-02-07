import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

 export const GifExpertApp = () => {

    const [ categories , setCategories ] = useState(['soccer']);

    const onAddCategory = (newCategory) => {
        
        if (categories.includes(newCategory)) return;

        let UpLow = false;

        categories.forEach(category => {
            if (category.toLowerCase() === newCategory.toLowerCase()) UpLow = true;
        });

        if (UpLow) return;

        setCategories([ newCategory,...categories]);
    }

  return (
    <>
        <h1> Gif Expert App </h1>
        < AddCategory 
            onNewCategory = {onAddCategory}
        />

        { categories.map( category => (
            <GifGrid 
            key = {category}
            category = {category}
            />))
        }
    </>
  )
}
