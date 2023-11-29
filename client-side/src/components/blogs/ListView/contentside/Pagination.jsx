export default function Pagination() {
  return (
    <div className="styled-pagination centered">
      <ul className="clearfix">
        <li >
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li className="active">
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
