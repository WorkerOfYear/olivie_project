import React, { FC } from "react";
import { Rating } from "react-simple-star-rating";
import Card from "react-bootstrap/Card";
import Avatar from "react-avatar";

import { IArtist } from "types/types";

interface ReviewsProps {
  artist: IArtist;
}

const Reviews: FC<ReviewsProps> = ({ artist }) => {
  return (
    <>
      {artist.reviews ? (
        <div className="mt-4">
          {artist.reviews.map((review) => (
            <Card key={review.user_id} style={{ width: "400px" }}>
              <Card.Body>
                <Card.Header>
                  <Avatar size="40" round={true} name="Test User" />
                  <span style={{ marginLeft: "10px" }}>{"Test User"}</span>
                </Card.Header>
                <Card.Text className="mt-3">{review.comment}</Card.Text>
                <Rating initialValue={review.grade} readonly={true} />
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <h4>No reviews</h4>
      )}
    </>
  );
};

export default Reviews;
