export function calculateDuration(startTime, endTime) {
    // Parse time strings
    const start = startTime.split(":").map(Number);
    const end = endTime.split(":").map(Number);
  
    // Calculate time difference
    let hours = end[0] - start[0];
    let minutes = end[1] - start[1];
  
    // Handle negative minutes
    if (minutes < 0) {
      hours--;
      minutes += 60;
    }
  
    // Format the result
    const formattedDuration = [];
    if (hours > 0) {
      formattedDuration.push(`${hours}h`);
    }
    if (minutes > 0) {
      formattedDuration.push(`${minutes}m`);
    }
  
    return formattedDuration.join(" ");
  }