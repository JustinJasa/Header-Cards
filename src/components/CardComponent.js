import React, { useState } from "react";
import Button from "./Button";
import "./CardComponent.css";

function CardHeader({ img }) {
  return <img src={img} alt="brisbane" className="header" />;
}

function CardContent({ heading, content }) {
  const paragraphs = content.split("\\n"); // Assuming "\n" is used in the content string to indicate a new line
  return (
    <div>
      <h2 className="heading">{heading}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="card-content">{paragraph}</p>
      ))}
    </div>
  );
}


function CardFooter({ data }) {
  return (
    <div className="footer">
      <Button data={data} />
    </div>
  );
}

function CardComponent({ img, heading, content, btn, isSelected, onClick }) {
  return (
    <div className={`card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <div>
        <CardHeader img={img} />
        <CardContent heading={heading} content={content} />
      </div>
      <CardFooter data={btn} />
    </div>
  );
}

export default CardComponent;
