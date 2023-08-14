const quizData = [
	{
		question: "In case of Raymond pile",
		choices: ["lengths vary from 6 m to 12 m", "diameter of top of piles varies from 40 cm to 60 cm", "diameter of pile at bottom varies from 20 cm to 28 cm", "thickness of outer shell depends upon pile diameter", "all the above."],
		answer: "Paris"
	},
	{
		question: "What is the highest mountain in the world?",
		choices: ["Mount Everest", "K2", "Makalu", "Annapurna"],
		answer: "Mount Everest"
	},
	{
		question: "What is the largest country in the world?",
		choices: ["Russia", "Canada", "China", "USA"],
		answer: "Russia"
	},
	{
		question: "What is the currency of Japan?",
		choices: ["Yen", "Dollar", "Euro", "Pound"],
		answer: "Yen"
	},
	{
		question: "What is the largest animal in the world?",
		choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
		answer: "Blue Whale"
	},
	{
		question: "Who won the FIFA World Cup in 2018?",
		choices: ["Germany", "Brazil", "France", "Spain"],
		answer: "France"
	},
	{
		question: "What is the highest score ever achieved in a men's cricket ODI innings?",
		choices: ["400", "425", "434", "481"],
		answer: "481"
	},
	{
		question: "Who won the NBA championship in 2021?",
		choices: ["Los Angeles Lakers", "Brooklyn Nets", "Milwaukee Bucks", "Golden State Warriors"],
		answer: "Milwaukee Bucks"
	}
];

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
	const currentQuizData = quizData[currentQuestion];

	questionEl.innerHTML = currentQuizData.question;
	choicesEl.innerHTML = "";

	for (let i = 0; i < currentQuizData.choices.length; i++) {
		const choice = currentQuizData.choices[i];
		const li = document.createElement("li");
		li.innerHTML = choice;
		li.addEventListener("click", function() {
			if (choice === currentQuizData.answer) {
				score++;
			}

			currentQuestion++;

			if (currentQuestion < quizData.length) {
				loadQuestion();
			} else {
				alert(`You scored ${score}/${quizData.length}`);
			}
		});

		choicesEl.appendChild(li);
	}
}

loadQuestion();
