import React from "react";
import keycloak from "../..";
import "./form.scss";

export function refreshPage() {
  window.location('http://localhost:3000');
}

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h1 className="header-title">Share your opinion about this movie with the community! 🤔💭</h1>
      <div className="form">
      <div className="form-group">
        <label htmlFor="user">User: </label>
        <input
          className="form-control"
          id="user"
          placeholder={keycloak.tokenParsed.preferred_username}
          readOnly
          required="required" 

        />
      </div>
      <div className="form-group">
        <label htmlFor="topicName">Forum Title: </label>
        <input
          className="form-control"
          id="topicName"
          placeholder="Title of forum"
          required="required" 
          minLength="5"
          maxLength="50"
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Description: </label>
        <input
          className="form-control"
          id="content"
          placeholder="description"
          required="required" 
          minLength="20"
          maxLength="500"
        />
      </div>
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit" onclick={refreshPage}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
