import React from "react";

const ClientFeeback = ({ title, author, description }) => {
  return (
    <div className="client-feeback">
      <p>"{description}"</p>
      <div className="authorDetail">
        <img
          className="avatar"
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
        <div className="description">
          <p>{author}</p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientFeeback;
