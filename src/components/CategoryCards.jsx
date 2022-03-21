import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCards({categoryImage, categoryName}) {
  return (
    <div>
        <Link to="/product">
            <div className="card card-vertical card-shadow">
                <div className="card-head">
                    <div className="card-img">
                        <img src={categoryImage} alt="card" />
                    </div>
                    <div className="card-texts">
                        <h4 className="card-title">{categoryName}</h4>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export {CategoryCards};