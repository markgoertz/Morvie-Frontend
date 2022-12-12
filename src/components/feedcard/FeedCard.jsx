import React from "react";
import "./feedcard.scss";

const FeedCard = (props) => {
  const item = props.item;

  return (
    <>
      {item && (
        <div className="inner-main-body">
          <div className="card">
            <div className="card-body">
              <div className="media-body">
                <h1 className="retro-text">{item.topicName}</h1>
                <p className="retro-text-small">{item.content}</p>
              </div>
              <br />
              <hr />
              <br />
              <div className="retro-text-author">
                <br />
                <div>
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    className="round-circle"
                    width="50"
                    alt="User"
                  />
                </div>
                <p> {item.author} </p>
                <p> {item.createdAt}</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedCard;
