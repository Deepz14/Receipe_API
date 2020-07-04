import React from 'react'
import './style.css';

export const Receipes = ({ image, title, calories, ingredients}) => {
    return (
        <div className="receipes mt-5 p-3">
            <h3 className="text-center title p-3">{title}</h3>
            <h6 className="text">INGREDIENTS : </h6>
            {
                ingredients.map((list, index) => <div className="ingredients pt-2" key={index}>
                    <ol>
                        {list.text}
                    </ol>
                </div>)
            }
            <div className="img-container p-3">
                <img src={image} alt="img" className="receipe-img" />
            </div>
        </div>
    )
}

