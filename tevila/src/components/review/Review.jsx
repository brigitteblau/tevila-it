import React from "react";
import people from "./people";
import "./review.css";
import ReviewCard from "./Card";

const Review = () => {
  return (
    <div className="reviews-list">
      {people.map((person, index) => (
        <ReviewCard key={index} {...person} />
      ))}
    </div>
  );
};

export default Review;