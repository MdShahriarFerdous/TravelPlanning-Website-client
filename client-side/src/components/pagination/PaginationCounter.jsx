import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function PaginationCounter({ pageNumber, length, total }) {
  const [itemCountStart, setItemCountStart] = useState(1);
  const [itemCountEnd, setItemCountEnd] = useState(5);
  useEffect(() => {
    const n = pageNumber - 1;
    setItemCountStart(n * 5 + 1);
    setItemCountEnd(n * 5 + length);
  }, [pageNumber, length]);
  return (
    <div>
      Showing results of{" "}
      <strong>
        {itemCountStart} - {itemCountEnd}
      </strong>{" "}
      of <strong>{total}</strong> items
    </div>
  );
}
