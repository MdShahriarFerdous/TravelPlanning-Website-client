import { ColorRing } from "react-loader-spinner";

export default function MiniLoader() {
  return (
    <div className="d-flex justify-content-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#ff5522", "#ff5522", "#ff5522", "#ff5522", "#ff5522"]}
      />
    </div>
  );
}
