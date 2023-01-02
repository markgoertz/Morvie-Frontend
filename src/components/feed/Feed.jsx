import React, { useState, useEffect } from "react";
import "./feed.scss";
import tmdbApi, { category } from "../../api/tmdbApi";
import FeedCard from "../feedcard/FeedCard";
import Container from "../container/Container";
import keycloak from "../..";
import feedservice from "../../api/feedservice/FeedService";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const Feed = (props) => {
  const [items, setItems] = useState([]);

  const triggerText = "Open form";
  const onSubmit = (event) => {
    event.preventDefault(event);

    const user = keycloak.tokenParsed.preferred_username;
    const topicname = event.target.topicName.value;
    const content = event.target.content.value;
    const movieid = props.id;

    try {
      feedservice.PostFeed(user, topicname, content, movieid);
      Toast.fire({
        icon: "success",
        title: "Thread successfully created!",
      }).then(function () {
        window.location.replace(
          "https://morvie-frontend-markgoertz.vercel.app/movie"
        );
      });
    } catch (error) {
      console.error(error);
      Toast.fire({
        icon: "error",
        title: "Thread not created!",
      })
    }
  };

  useEffect(() => {
    const getFeeds = async () => {
      const response = await tmdbApi.getFeeds(props.id);
      console.log(response.data);
      setItems(response.data);
    };
    getFeeds();
  }, []);

  if (items.length > 0) {
    return (
      <div className="card">
        <div className="nocontentheader">
          <h2>Share your thoughts about this!😉</h2>
          <br />
          <Container triggerText={triggerText} onSubmit={onSubmit} />
        </div>

        <div className="feed-list">
          {items.map((item) => (
            <FeedCard item={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="inner-main-body">
        <div className="card">
          <div className="nocontentheader">
            <h2>No one has started a thread yet!</h2>
            <br />
            <p> Be the first one!😉</p>
            <br />
            <Container triggerText={triggerText} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    );
  }
};

export default Feed;
