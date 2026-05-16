const start = Date.now();

while (Date.now() - start < 850) {
  Math.sqrt(Math.random() * Number.MAX_SAFE_INTEGER);
}

window.__adAuctionResult = Array.from({ length: 18000 }, (_, index) => ({
  id: index,
  bidder: `partner-${index % 37}`,
  score: Math.random()
})).sort((a, b) => b.score - a.score);
