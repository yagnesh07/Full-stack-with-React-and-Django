import React from 'react'
import '../../styles.css';

const ImageHelper = ({ product }) => {
    const imageurl = product 
    ? product.image 
    : `https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg`
    return (
        <div className="rounded border border-success p-2">
            <img
                src={imageurl}
                style = {{ maxHeight: "100%", maxWidth: "100%"}}
                className = "image_size mb-3 rounded"
                alt = ""
            />
        </div>
    )
}

export default ImageHelper
