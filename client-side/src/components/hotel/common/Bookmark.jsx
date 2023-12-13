import { useState } from "react";

export default function Bookmark() {
  const [isMarked, setIsMarked] = useState(true);
  const handleChange = () => {
    setIsMarked(!isMarked);
  };
  return (
    <div className="fav-btn">
      <span onClick={handleChange}>
        <span className={`far fa-heart ${isMarked ? "active" : ""}`}></span>
      </span>
    </div>
  );
}
