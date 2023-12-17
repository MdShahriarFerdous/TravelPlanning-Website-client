import ReactPaginate from "react-paginate";
import { useData } from "../../../context/dataContext";
import { useState } from "react";
import { SearchAPI } from "../../../backend-services/api";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./tourbytype.css";

const PaginationNav = () => {
	const [fetchData, setFetchData] = useData();
	const [searchKeyword, setSearchKeyword] = useState("");
	let totalTourData;
	let perPage = 5;

	if (fetchData?.total) {
		totalTourData = fetchData?.total;
	}
	const handlePageClick = async (e) => {
		try {
			const paginateData = SearchAPI(
				e.selected + 1,
				perPage,
				searchKeyword
			);
			if (paginateData.total) {
				setFetchData({
					...fetchData,
					total: paginateData.totalCount,
					tourData: paginateData.tourLists,
				});
			}
		} catch (error) {
			if (error.response) {
				console.error(
					"Server responded with an error:",
					error.response.data
				);
				toast.error(error.response.data.message || "Server Error");
			} else if (error.request) {
				console.error("No response received from the server");
				toast.error("No response received from the server");
			} else {
				console.error("An unexpected error occurred:", error.message);
				toast.error("An unexpected error occurred");
			}
		}
	};
	return (
		<div className="row">
			<div className="col-lg-12 d-flex justify-content-center mt-5">
				<nav aria-label="Page navigation example">
					<ReactPaginate
						previousLabel="<"
						nextLabel=">"
						pageClassName="page-item"
						pageLinkClassName="page-link"
						previousClassName="page-item"
						previousLinkClassName="page-link"
						nextClassName="page-item"
						nextLinkClassName="page-link"
						breakLabel="..."
						breakClassName="page-item"
						breakLinkClassName="page-link"
						pageCount={Math.ceil(totalTourData / perPage)}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						onPageChange={handlePageClick}
						containerClassName="pagination"
						activeClassName="active"
					/>
				</nav>
			</div>
		</div>
	);
};

export default PaginationNav;
