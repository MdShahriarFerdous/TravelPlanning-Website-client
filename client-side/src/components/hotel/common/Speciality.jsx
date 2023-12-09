// eslint-disable-next-line react/prop-types
export default function Speciality({ id }) {
  const isFeatured = id % 2 == 0;
  const isTopRated = id % 3 == 0;
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
