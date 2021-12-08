import React from "react";

const ReviewCard = ({ content, user }) => {
  return (
    <div className="card h-100">
      <p className="font-xs">{content}</p>
      {user && (
        <p className="mt-1 font-xs strong">- {user}</p>
      )}
    </div>
  );
};

export default ReviewCard;
