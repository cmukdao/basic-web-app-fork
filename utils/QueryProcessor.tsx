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

  if (query.toLowerCase().includes("plus")) { 
    const parts = query.split(" ");
    const num1 = parseInt(parts[2]);
    const num2 = parseInt(parts[4]);
    if (!isNaN(num1) && !isNaN(num2)) {
      return (num1 + num2).toString();
    }
  }
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    return "";
}
