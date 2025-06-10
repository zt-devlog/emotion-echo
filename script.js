const accessKey = '1-1C6_VG1ziPIaRMZ_XnU4CNk-qH8Yz4puthu8G42y0'; // Replace with your Unsplash Access Key

const emotionData = {
  happy: {
    message: "You're shining today! 🌞",
    color: "#FFE066",
    keywords: "pastel sunlight"
  },
  joyful: {
    message: "Your joy is contagious! 🎉",
    color: "#FFDEB4",
    keywords: "bloom light festival"
  },
  content: {
    message: "Find peace in the present. 🌸",
    color: "#E8F6EF",
    keywords: "garden peace green"
  },
  anxious: {
    message: "Breathe. You've got this. 🌬️",
    color: "#A2D2FF",
    keywords: "fog mist"
  },
  overwhelmed: {
    message: "Take it one step at a time. ⛰️",
    color: "#B4B8AB",
    keywords: "stormy sky blur"
  },
  lonely: {
    message: "You are not alone. ❤️",
    color: "#C3B1E1",
    keywords: "night solitude city"
  },
  sad: {
    message: "It's okay to feel blue. 🌧️",
    color: "#CDB4DB",
    keywords: "rain grayscale"
  },
  grieving: {
    message: "Healing takes time. 🌱",
    color: "#9D8189",
    keywords: "wilted rose dark"
  },
  angry: {
    message: "Channel your fire. 🔥",
    color: "#FF6B6B",
    keywords: "storm red"
  },
  frustrated: {
    message: "Patience is a virtue. ⏳",
    color: "#FFA07A",
    keywords: "smoke tension pulse"
  },
  hopeful: {
    message: "Keep looking up. ✨",
    color: "#B5E48C",
    keywords: "sunrise clouds"
  },
  nostalgic: {
    message: "Remember the good times. 🍂",
    color: "#FFE5B4",
    keywords: "autumn leaves soft"
  },
  excited: {
    message: "Embrace the thrill! 🚀",
    color: "#FFB4A2",
    keywords: "light dream"
  },
  tired: {
    message: "Rest and recharge. 😴",
    color: "#D6CCC2",
    keywords: "cloud fade dusk"
  },
  peaceful: {
    message: "Breathe in serenity. 🧘‍♀️",
    color: "#DEFDE0",
    keywords: "calm lake zen"
  },
  lost: {
    message: "Find your way. 🧭",
    color: "#D3D3D3",
    keywords: "foggy path surreal"
  },
  default: {
    message: "Every feeling is valid. 💖",
    color: "#E0E0E0",
    keywords: "sky calm"
  }
};

const customAdvice = {
  happy: [
    "Let your joy overflow and light up others.",
    "Celebrate even the smallest wins today!",
    "Happiness is contagious — spread it.",
    "A happy heart makes a cheerful face.",
    "The best is yet to come.",
    "Find beauty in the simple things.",
    "Let your smile change the world, don't let the world change your smile.",
    "Every little thing is gonna be alright!",
    "Enjoy the little things, for one day you may look back and realize they were the big things.",
    "Do more of what makes you happy.",
    "The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less."
  ],
  anxious: [
    "Breathe. You are doing better than you think.",
    "You have survived 100% of your hardest days.",
    "Stillness is a superpower. Find a moment to pause.",
    "This feeling will pass.",
    "Focus on what you can control.",
    "One step at a time.",
    "Feel the fear and do it anyway.",
    "Anxiety's like a rocking chair. It gives you something to do, but it gets you nowhere.",
    "Inhale the future, exhale the past.",
    "You don't have to control your thoughts. You just have to stop letting them control you.",
    "Worrying does not empty tomorrow of its sorrows, it empties today of its strength."
  ],
  sad: [
    "It’s okay to feel this way. Let yourself heal.",
    "You are not alone in your sorrow.",
    "Grief is love with no place to go — honor it.",
    "Even the darkest night gives way to dawn.",
    "Allow yourself to feel; it's part of healing.",
    "Kindness to yourself is key.",
    "Tears are words the heart can't say.",
    "The soul is healed by being with children.",
    "The sun watches what I do, but the moon knows all my secrets.",
    "Sadness flies away on the wings of time.",
    "There is no remedy for love but to love more."
  ],
  excited: [
    "Harness your energy and let it inspire new dreams!",
    "Your spark can ignite a thousand stars.",
    "Ride the wave of excitement — something beautiful is ahead.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Every day is a new adventure!",
    "Let your enthusiasm be your guide.",
    "The best view comes after the hardest climb.",
    "Don't be afraid to shine. The world needs your light.",
    "Life is either a daring adventure or nothing at all.",
    "The only way to do great work is to love what you do.",
    "Let your passion be your purpose."
  ],
  angry: [
    "Channel your fire into something creative.",
    "Pause. Power without control can burn you, too.",
    "Your anger is valid — now shape it wisely.",
    "For every minute you remain angry, you give up sixty seconds of peace of mind.",
    "Anger is a chosen emotion.",
    "Holding onto anger is like drinking poison and expecting the other person to die.",
    "When angry, count to four; when very angry, swear.",
    "The greatest remedy for anger is delay.",
    "Never forget what someone says to you when they are angry.",
    "The best fighter is never angry.",
    "Speak when you are angry and you’ll make the best speech you’ll ever regret."
  ],
  hopeful: [
    "Hope is the seed of change.",
    "Every day is a new chance to bloom.",
    "Hold onto that glimmer — it’s leading you somewhere beautiful.",
    "Hope is the thing with feathers that perches in the soul.",
    "The power of hope frees us from the past.",
    "Learn from yesterday, live for today, hope for tomorrow.",
    "Where there is no vision, there is no hope.",
    "Hope is a waking dream.",
    "Hope itself is like a star - not to be seen in the sun of prosperity, and only to be discovered in the night of adversity.",
    "Even the darkest night will end and the sun will rise.",
    "We must accept finite disappointment, but never lose infinite hope."
  ],
  default: [
    "Your emotions are valid. Trust your journey.",
    "Whatever you are feeling — honor it without judgment.",
    "You are exactly where you need to be right now.",
    "Embrace the present moment.",
    "You are stronger than you think.",
    "Every feeling has a purpose.",
    "This too shall pass.",
    "The only way out is through.",
    "You are enough.",
    "You are the sky. Everything else is just weather.",
    "In three words I can sum up everything I’ve learned about life: it goes on."
  ]
};

/**
 * Project Statement: Emotion Echo - A web application that reflects user emotions
 * using dynamic visuals, poetic reflections, and a personal diary.
 *
 * Author: Zoe Thompson DTC 477 
 *
 * Scripting Steps:
 * 1.  Event Handling: Listens for form submission to capture user input.
 * 2.  Emotion Processing:  Retrieves data (message, color, keywords) based on the input emotion.
 * 3.  Dynamic Display: Updates the UI with emotion-specific content and visuals.
 * 4.  API Interaction: Fetches background images from Unsplash and reflections.
 * 5.  Local Storage: Saves and retrieves diary entries for persistent storage.
 * 6.  Modular Functions: Encapsulates functionality into reusable blocks.
 * 7.  Error Handling: Manages potential issues with API requests and data retrieval.
 *
 * AI Usage Narrative:
 * -   Ideation: ChatGPT was used to refine the initial feature set.
 * -   Planning: ChatGPT aided in designing the data structure for 'emotionData' and outlining the application's workflow.
 * -   Debugging: ChatGPT helped identify and resolve issues with asynchronous operations and DOM manipulation.
 * -   Code Refinement: ChatGPT assisted in improving code readability, efficiency, and adherence to best practices.
 *  Overall, ChatGPT was used for this project to help refine my code, and help me learn how to make it more efficient. 
 */


document.getElementById("emotionForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const emotion = document.getElementById("emotionInput").value.trim().toLowerCase();
  displayEmotion(emotion);
  document.getElementById("emotionInput").value = "";
});

function displayEmotion(emotion) {
  const output = document.getElementById("output");
  const data = emotionData[emotion] || emotionData.default;

  function handleFormSubmit(e) {
    e.preventDefault();
    let emotion = document.getElementById("emotionInput").value.trim().toLowerCase();
    if (!emotion) {
      alert("Please enter an emotion."); // Simple alert for now
      return;
    }
    if (!emotionData[emotion]) {
      alert("Emotion not recognized. Try a different word.");
      return;
    }
    displayEmotion(emotion);
    document.getElementById("emotionInput").value = "";
  }



  output.innerHTML = `
    <div class="info-box" style="background-color: ${data.color};">
      <h2>${data.message}</h2>
      <p id="reflectionText" class="loading">Loading your reflection<span class="dots">.</span></p>
    </div>
  `;

  const textEl = document.getElementById("reflectionText");
  textEl.className = "";

  const reflectionTypes = ["advice"]; // ONLY advice
  const chosen = reflectionTypes[0]; // Always choose the first (and only) option

  if (chosen === "advice") {
    const adviceArray = customAdvice[emotion] || customAdvice.default;
    const randomReflection = adviceArray[Math.floor(Math.random() * adviceArray.length)];
    setTimeout(() => {
      textEl.textContent = randomReflection;
      saveToDiary(emotion, data.message, randomReflection);
    }, 600);
  }

  fetchEmotionImage(emotion, data.keywords);
  if (typeof setEmotionTone === "function") {
    setEmotionTone(emotion);
  }
}

document.getElementById('clearDiary').addEventListener('click', clearDiary);

/**
 * Function: clearDiary
 * Purpose:  Clears all entries from the emotion diary in local storage.
 * DOM Manipulation:  Calls renderDiary() to update the diary display (clears it).
 * Data Management:  Removes the 'emotionDiary' item from local storage.
 * Dynamic Interaction:  None
 * APIs/Libraries:  None
 */
function clearDiary() {
  localStorage.removeItem('emotionDiary');
  renderDiary(); // Re-render to show the diary is empty
}


function saveToDiary(emotion, message, reflection) {
  const timestamp = new Date().toLocaleString();
  const entry = { emotion, message, reflection, timestamp };
  const history = JSON.parse(localStorage.getItem('emotionDiary')) || [];
  history.unshift(entry);
  localStorage.setItem('emotionDiary', JSON.stringify(history));
  renderDiary();
}

function renderDiary() {
  const diary = document.getElementById("diary");
  if (!diary) return;
  const history = JSON.parse(localStorage.getItem('emotionDiary')) || [];
  diary.innerHTML = history.map(entry => `
    <div class="diary-entry">
      <strong>${entry.timestamp}</strong><br>
      <span>${entry.message}</span><br>
      <em>${entry.reflection}</em>
    </div>
  `).join('');
}

async function fetchEmotionImage(emotion, keywords) {
  const query = keywords || emotionData.default.keywords;

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`
    );
    const data = await response.json();

    if (data.results.length > 0) {
      const imageUrl = data.results[0].urls.regular;
      document.body.style.backgroundImage = `url(${imageUrl})`;
    } else {
      setDefaultBackground();
    }
  } catch (error) {
    console.error('Unsplash fetch failed:', error);
    setDefaultBackground();
  }
}

function setDefaultBackground() {
  document.body.style.backgroundImage = "linear-gradient(to bottom right, #dfe9f3, #ffffff)";
}

renderDiary();