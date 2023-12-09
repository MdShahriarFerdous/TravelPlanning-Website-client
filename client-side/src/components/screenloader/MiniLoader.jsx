import { InfinitySpin } from "react-loader-spinner";

export default function MiniLoader() {
  return (
    <div className="d-flex justify-content-center">
      <InfinitySpin width="200" color="#ff5522" />
    </div>
  );
}
