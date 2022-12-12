import React, { useState, useEffect } from "react";
import "./feed.scss";
import tmdbApi, { category } from "../../api/tmdbApi";
import FeedCard from "../feedcard/FeedCard";
import NoContent from "../nocontent/NoContent";
import Button from "../button/Button";

const Feed = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getFeeds = async () => {
      const response = await tmdbApi.getFeeds(props.id);
      setItems(response.data);
    };
    getFeeds();
  }, []);

  if (items.length > 0) {
    return (
      <div className="feed-list">
        {items.map((item) => (
          <FeedCard item={item} />
        ))}
      </div>
    );
  } else {
    return(
    <div className="inner-main-body">
      <div className="card">
          <div className="nocontentheader">
            <h2>No one has started a thread yet!</h2>
            <br/>
            <p> Be the first one!😉</p>
            <br/>
            <Button>Create Thread!</Button>
          </div>
          <p></p>
        </div>
    </div>
    )
}
};

export default Feed;
