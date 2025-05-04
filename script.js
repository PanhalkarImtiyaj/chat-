const chatBox = document.getElementById('chat-box');

function sendMessage() {
  const input = document.getElementById('user-input');
  const text = input.value.trim();
  if (!text) return;

  showMessage(text, 'user');
  input.value = '';

  setTimeout(() => {
    const reply = getBotReply(text);
    showMessage(reply, 'bot');
  }, 600);
}

function showMessage(text, role) {
  const msg = document.createElement('div');
  msg.className = `message ${role}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(input) {
  const msg = input.toLowerCase();

  // Common Topics
  if (msg.includes("hello") || msg.includes("hi")) return "Hi there! 😊 Ask me anything you'd like!";
  if (msg.includes("how are you")) return "I'm just code, but I'm running great! Thanks for asking!";
  if (msg.includes("your name")) return "I'm your personal assistant chatbot, made by Imtiyaj!";
  if (msg.includes("bye")) return "Goodbye! Talk to you soon. 👋";

  // Personal / Motivation
  if (msg.includes("sad")) return "It's okay to feel sad sometimes. Want to talk about it?";
  if (msg.includes("motivate") || msg.includes("motivation")) return "You are stronger than you think! 💪 Keep going!";
  if (msg.includes("love")) return "Love is a beautiful emotion. Always treat it with respect and honesty. ❤️";
  if (msg.includes("friend")) return "Friends are the family we choose. Be a good one. 😊";

  // Coding / Tech
  if (msg.includes("html")) return "HTML (HyperText Markup Language) is the structure of web pages. Tags like <div>, <p>, and <a> define content.";
  if (msg.includes("css")) return "CSS (Cascading Style Sheets) is used to style HTML content. You can control colors, layout, and animations.";
  if (msg.includes("js") || msg.includes("javascript")) return "JavaScript is a scripting language that makes your web pages interactive. Use `addEventListener`, `fetch()`, and more!";
  if (msg.includes("python")) return "Python is one of the most popular programming languages. It's great for AI, web development, data analysis, and automation!";
//   if (msg.includes("ai") || msg.includes("artificial intelligence")) return "AI simulates human intelligence to perform tasks like learning, reasoning, and decision-making. It powers robots, voice assistants, and more.";

  // Health & Fitness
  if (msg.includes("health")) return "Health is wealth! Eat balanced meals, exercise, and get enough sleep. Stay hydrated and stress less!";
  if (msg.includes("exercise")) return "Exercise is key to physical health. Try cardio, strength training, or yoga to stay fit!";
  if (msg.includes("mental health")) return "Mental health is just as important as physical health. Take breaks, meditate, and seek support if needed!";
  if (msg.includes("nutrition")) return "Nutrition is about fueling your body with the right nutrients. Eat plenty of fruits, veggies, and whole foods!";
  
  // Fun & Trivia
  if (msg.includes("fun fact")) return "Did you know? A day on Venus is longer than a year on Venus! 🌌";
  if (msg.includes("quote")) return "\"The only way to do great work is to love what you do.\" — Steve Jobs 💡";
  
  // Study
  if (msg.includes("study") || msg.includes("exam")) return "Study consistently, take short breaks, and practice what you learn!";
  if (msg.includes("time table")) return "Want help building a study timetable? I recommend 25-minute sessions with 5-minute breaks (Pomodoro technique).";


  if (msg.includes("imtiyaj") || msg.includes("who is imtiyaj")) return "imtiyaj is software devloper and imtiyaj made me.";

//frinds
if (msg.includes("mubina")) {
  return "Mubina is pure sunshine in human form! ☀️ She's kind-hearted, smart, and brings calm vibes wherever she goes. A true gem of a friend! 💎💖";
}
if (msg.includes("karuna")) {
  return "Karuna is not just a name, she's a vibe! 💫 She's super cute, full of positive energy, and one of the most powerful girls out there. Anyone who has her as a friend is truly lucky! 💖✨";
}
if (msg.includes("amar")) {
  return "Amar is the kind of friend everyone wishes they had — strong, reliable, and always ready to stand by you. 💪🔥 A true legend in his own way! 🚀";
}

if (msg.includes("sana") || msg.includes("sana khan")) return "sana imtiyaj friend and she is very sweet and kind. She is a good friend of imtiyaj.";
if (msg.includes("sana khan") || msg.includes("sana")) return "sana imtiyaj friend and she is very sweet and kind. She is a good friend of imtiyaj.";

if( msg.includes("kolhapur") || msg.includes("kolhapur mharashtra ")) return "Kolhapur is a historic city located in the southern part of Maharashtra, India, on the banks of the Panchganga River. Known as Dakshin Kashi or the Varanasi of the South, it is renowned for its rich cultural heritage, spiritual significance, and vibrant traditions.";  

if (
  msg.includes("who made you") ||
  msg.includes("who created you") ||
  msg.includes("developer")
) {
  return "I was proudly developed by Imtiyaj — an MCA student, passionate developer, and creative mind behind this chatbot. 💻🧠✨";
}
//kon ho
if (msg.includes("tum kon ho") || msg.includes("aap kon ho")) {
  return "Main ek smart chatbot hoon, jise Imtiyaj ne banaya hai! 😊"; // Roman Hindi response
}
//////namste
if (msg.includes("namaste")) {
  return "Namaste! Main aapki madad ke liye yahan hoon. 😊 Kya aapko kuch chahiye?";
}
//hiindi

if (
msg.includes("I love you") || 
msg.includes("main tumhe pyaar karta hoon") || 
msg.includes("main tumhe pyaar karti hoon")
) {
return "Aww! Mujhe bhi aap se dosti kar ke bahut accha laga! 😊";
}

if (
msg.includes("do you have a favorite color") || 
msg.includes("tumhara favorite rang kya hai")
) {
return "Mera favorite rang hamesha badalta rehta hai, lekin main har rang ko pasand karta hoon! 🌈";
}

if (
msg.includes("tum kya karte ho")
) {
return "Main aapki madad karta hoon aur aapke sawalon ka jawab deta hoon. 😊";
}
//marathi joke
if (
msg.includes("joke sang") || 
msg.includes("mala joke pahije")
) {
return "Ek war ek manas doctor kade gela aani mhanala, 'Doctor, mala sagla bhoolaycha ahe.' Doctor mhanala, 'Kabhi pasun?' Aani manas mhanala, 'Kabhi pasun kay?' 😂";
}

if (
msg.includes("tu kuthun aahes") || 
msg.includes("aap kuthun aahes")
) {
return "Mi ek chatbot ahe, mhanun mala kahi sthaniksthan nahi ahe. Mi jevha kahi internet ahe, teva mi ahe! 😁";
}
  // Default
  if (msg.includes("ai") || msg.includes("artificial intelligence")) {
return `
  AI (Artificial Intelligence) simulates human intelligence to perform tasks like learning, reasoning, and decision-making. It powers robots, voice assistants, and more. 🤖
  AI technologies can be divided into two categories: Narrow AI (designed for specific tasks) and General AI (which can perform any intellectual task a human can do). 

  Common AI applications include:
  - **Voice Assistants**: Siri, Alexa, and Google Assistant.
  - **Recommendation Systems**: Used by platforms like Netflix, YouTube, and Amazon.
  - **Self-Driving Cars**: AI helps autonomous vehicles navigate and make decisions on the road.
  - **Healthcare**: AI analyzes medical data, helping with diagnosis and drug discovery.
  - **Natural Language Processing (NLP)**: It powers chatbots (like me!), translation tools, and sentiment analysis.

  **Machine Learning (ML)** is a subset of AI that focuses on the ability of systems to learn from data and improve without being explicitly programmed. 🌱
  - **Supervised Learning**: Trains models on labeled data to predict outcomes.
  - **Unsupervised Learning**: Identifies patterns in unlabeled data.
  - **Reinforcement Learning**: Teaches machines to make decisions based on rewards or penalties.

  AI has transformative potential, but also raises ethical questions. Concerns include data privacy, job displacement, and the control of AI by large corporations. It's crucial to develop AI responsibly with proper regulations.

  It's an exciting field that's constantly evolving. Would you like to learn more about a specific aspect of AI or how it works? 🤔`;
}
if (msg.includes("joke")) {
const jokes = [
    "Why don't skeletons fight each other? They don't have the guts! 😂",
    "What did the ocean say to the beach? Nothing, it just waved! 🌊",
    "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾",
    "Why can't your nose be 12 inches long? Because then it would be a foot! 👃",
    "I told my computer I needed a break... now it won't stop sending me Kit-Kats! 🍫",
    "What do you call fake spaghetti? An impasta! 🍝",
    "Why don’t eggs tell jokes? Because they might crack up! 🥚",
    "Why did the math book look sad? Because it had too many problems! 📚",
    "Why did the bicycle fall over? Because it was two-tired! 🚲",
    "Why don't programmers like nature? It has too many bugs! 🐛"
];

const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
return randomJoke;
}


  return "Hmm... I’m still learning. Try asking about life, study, coding, health, or fun facts! (Made by Imtiyaj)";
}