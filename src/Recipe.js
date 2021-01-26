import React from "react";
import style from "./recipe.module.css";


const Recipe = ({ title, image, calories }) => {
    return (
        <div>
            <h5 className={style.recipe}>{title}</h5>
            <p className={style.calories}>{calories} calories</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
};

export default Recipe;