import React, { useState } from "react";
import Brisbane from "../images/brisbane.jpg";
import CardComponent from "./CardComponent";
import "./CardDisplay.css";

let data = [
  {
    id: 1,
    img: { Brisbane },
    heading: "Heading 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus ante et nunc rhoncus vulputate. Aenean feugiat metus vitae tellus commodo, eu porttitor quam aliquet. Maecenas ultrices est mauris,",
    btnData: "Button 1",
  },
  {
    id: 2,
    img: { Brisbane },
    heading: "Heading 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus ante et nunc rhoncus vulputate. Aenean feugiat metus vitae tellus commodo, eu porttitor quam aliquet. Maecenas ultrices est mauris,",
    btnData: "Button 2",
  },
  {
    id: 3,
    img: { Brisbane },
    heading: "Heading 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat metus vitae tellus commodo, eu porttitor quam aliquet.Maecenas ultrices est mauris, ut cursus orci pulvinar nec. \\nMaecenas ut cursus nibh, nec lobortis lorem. Proin ut tellus nec nunc semper posuere. Nunc blandit nibh eu erat mattis venenatis.",
    btnData: "Button 3",
  },
];

function CardDisplay() {
  const [selected, setSelected] = useState(2);

  return (
    <div className="container">
      {data.map((card) => (
        <CardComponent
          key={card.id}
          img={card.img.Brisbane}
          heading={card.heading}
          content={card.content}
          btn={card.btnData}
          isSelected={card.id == selected}
          onClick={() => setSelected(card.id)}
        />
      ))}
    </div>
  );
}

export default CardDisplay;
