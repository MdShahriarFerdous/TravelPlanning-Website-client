export function formatDate(dateString) {
    // Create a Date object from the input string
    const date = new Date(dateString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
        return "Invalid Date";
    }

    // Define options for formatting
    const options = {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
    };

    // Format the date
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

    return formattedDate;
}