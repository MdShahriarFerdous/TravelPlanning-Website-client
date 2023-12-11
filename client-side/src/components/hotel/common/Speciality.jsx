// eslint-disable-next-line react/prop-types
export default function Speciality({ isFeatured, isTopRated }) {
  return (
    <>
      {isFeatured && (
        <div className="b-title featured">
          <span>Featured</span>
        </div>
      )}
      {isTopRated && (
        <div className="b-title top-rated">
          <span>Top Rated</span>
        </div>
      )}
    </>
  );
}
