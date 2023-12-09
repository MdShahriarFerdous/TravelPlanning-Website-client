export default function Rating() {
  return (
    <div className="rating">
      <a href="#" className="theme-btn">
        <i className="fa-solid fa-star"></i>
        <strong>{(Math.random() * (5 - 1) + 1).toFixed(2)}</strong> &ensp;{" "}
        <span className="count">
          {Math.floor(Math.random() * 100) + 1} Reviews
        </span>
      </a>
    </div>
  );
}
