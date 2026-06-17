const button=document.getElementById("btn")

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
    "You are capable of more than you think."
];

button.addEventListener('click',()=>{
    const randomIndex=Math.floor(Math.random()*quotes.length);

    const quote=document.getElementById("quote");
    quote.textContent=quotes[randomIndex];
    quote.style.fontSize="20px";
    quote.style.fontStyle="italic";
    quote.style.color="#0bc135";

    quote.style.transform = "scale(0.9)";

setTimeout(() => {
    quote.style.transform = "scale(1)";
}, 100);
})
