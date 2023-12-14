export const cancelBooking = async (id) => {
	const handleClick = async (id) => {
		try {
			Swal.fire({
				title: "Want to cancel this booking?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#d33",
				cancelButtonColor: "#3085d6",
				confirmButtonText: "Yes, cancel it!",
			}).then(async (result) => {
				if (result.isConfirmed) {
					const deleteBlog = await axios.delete(
						`${forDeploying}/api/v1/delete-blog/${id}`
					);
					const deletedData = deleteBlog.data;
					setDeleteId(id);
					if (deletedData) {
						Swal.fire(
							"Deleted!",
							"Your task has been deleted.",
							"success"
						);
					}
				}
			});
		} catch (error) {
			console.error(error);
		}
	};
};
