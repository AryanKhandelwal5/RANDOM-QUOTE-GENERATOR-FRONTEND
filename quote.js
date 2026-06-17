const button = document.getElementById("btn");
const quote = document.getElementById("quote");

const quotes = [
  "Dream big. Start small. Act now.",
  "Your future is created by what you do today.",
  "Confidence comes from keeping promises to yourself.",
  "Small progress every day adds up to big results.",
  "Discipline will take you places motivation cannot.",
  "Winners are just losers who kept trying.",
  "Be stronger than your excuses.",
  "You didn’t come this far just to come this far.",
  "Focus on progress, not perfection.",
  "Hard work beats talent when talent doesn’t work hard.",
  "The grind may be silent, but success makes noise.",
  "One day or day one — you decide.",
  "Don’t stop until you’re proud.",
  "Every expert was once a beginner.",
  "Stay patient. Your time is coming.",
  "Confidence is built through action, not overthinking.",
  "Push yourself because nobody else will do it for you.",
  "Great things never come from comfort zones.",
  "Work hard in silence, let success talk.",
  "Your only competition is who you were yesterday.",
  "Fall seven times, stand up eight.",
  "Doubt kills more dreams than failure ever will.",
  "You are capable of more than you think.",
  "Start where you are.",
  "Stay hungry. Stay foolish.",
  "Consistency is everything.",
  "No excuses. Just results.",
  "Think. Do. Repeat.",
  "Success is a habit.",
  "Make it happen.",
  "Keep going.",
  "Prove yourself to yourself.",
  "Do it anyway.",
  "Less talk, more action.",
  "Grind now, shine later."
];

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randomIndex];
});