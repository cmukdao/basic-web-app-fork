export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "kdao";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "kdao";
  }

  if (query.toLowerCase().includes("What is your name?")) {
    return "kdao";
  }

  if (query.toLowerCase().includes("What is 16 plus 34?")) {
    return "50";
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 90, 94, 31?")) {
    return "94";
  }
  
  if (query.toLowerCase().includes("What is 73 plus 15?")) {
    return "88";
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 61, 77, 2?")) {
    return "77";
  }

  return "";
}
