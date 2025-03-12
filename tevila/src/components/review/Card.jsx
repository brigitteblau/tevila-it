import React from "react";
import "./review.css";

const ReviewCard = ({ name, username, review, rating }) => {
    return (
      <div className="review-card">
        <h3 className="username">@{username}</h3>
        <div className="rating">
          {[...Array(rating)].map((_, i) => (
            <svg 
              key={i} 
              xmlns="http://www.w3.org/2000/svg" 
              width="30" 
              height="30" 
              viewBox="0 0 24 24"
            >
              <path fill="gold" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/>
            </svg>
          ))}
        </div>
        <p className="review">{review}</p>
       
      </div>
    );
  };
  export default ReviewCard;