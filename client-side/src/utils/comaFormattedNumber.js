export function comaFormatNumber(number) {
    if (isNaN(number)) {
        return "Invalid Number";
    }

    // Convert the number to a string
    let numStr = number.toString();

    // Split the integer and decimal parts
    let parts = numStr.split(".");
    let integerPart = parts[0];
    let decimalPart = parts.length > 1 ? "." + parts[1] : "";

    // Add commas to the integer part
    let formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Concatenate the formatted integer and decimal parts
    let formattedNumber = formattedInteger + decimalPart;

    return formattedNumber;
}