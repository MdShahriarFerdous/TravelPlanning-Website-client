/* eslint-disable react/prop-types */
export default function Header(props) {
  const { title, description, descriptionBold } = props;
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="header">
          <h2 className="title">{title}</h2>
          <p className="description">
            {description} <strong className="text-dark">{descriptionBold || ""}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
