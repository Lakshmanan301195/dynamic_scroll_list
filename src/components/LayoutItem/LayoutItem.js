import React from 'react';

import './LayoutItem.css';

function LayoutItem({index, image, name}) {
    return (
        <div key={index} className="layout-item">
            <img
                src={`/Slices/${image}`}
                onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                    "/Slices/placeholder_for_missing_posters.png";
                }}
                loading={"lazy"}
                alt="movie"
            />
            <br />
            {
                name.length > 15 ? 
                <marquee behavior="scroll" id="marquee" direction="left">{name}</marquee> : 
                <span>{name}</span>
            }
        </div>
    )
}

export default LayoutItem
