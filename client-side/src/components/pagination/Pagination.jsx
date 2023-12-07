// eslint-disable-next-line react/prop-types
export default function Pagination({ handlePageChange, blogsMeta }) {
  const { page, totalPages } = blogsMeta || {};
  return (
    <div className="styled-pagination centered">
      <ul className="clearfix">
        {Array.apply(null, { length: totalPages }).map((e, i) => {
          return (
            <li className={page === i + 1 ? "active" : ""} key={i + 1}>
              <span onClick={() => handlePageChange(i + 1)}>{i + 1}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
