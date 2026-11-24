const letters = {
    "miss-you": {
        title: "How I Feel",
        message: `Looking back at how all of this started, I still can’t help but smile.
            From me plotting for months just to get your attention, to watching you slowly fall for me,
            to everything we share right now the journey has been nothing short of amazing.
            Every step of the way has meant the world to me,
            and I appreciate you more than words can fully say for making every single moment so genuinely worthwhile.
            With you, everything just feels effortless. I can completely be myself without ever feeling weird,
            judged, or any less of who I am, and I am so deeply grateful for the safe space you give me.
            You bring a kind of peace and warmth into my life that I didn't even know I was missing.
            Thank you for being my favorite part of every day, for holding space for me, and for loving me as I am.
            I love where we are, and I’m so excited for everywhere we’re heading next.`
    },

    "bad-day": {
        title: "To be Yours and to be Mine",
        message: `I don't want to just keep floating in this place where we both know there's something special here.
            So I wanted to ask you directly: May I be your boyfriend?
            Would you do me the honor of being my girlfriend and officially taking this next step together?`,
        showChoices: true
    }
};

// Bouquet click animation toggle (Runs on index.html)
const bouquet = document.getElementById("bouquet");
if (bouquet) {
    bouquet.addEventListener("click", () => {
        bouquet.classList.toggle("open");
    });
}

// Letter page logic (Runs only on letter.html)
const letterTitleElem = document.getElementById("letter-title");
if (letterTitleElem) {
    const params = new URLSearchParams(window.location.search);
    const letterId = params.get("letter");
    const letter = letters[letterId];

    if (letter) {
        letterTitleElem.innerHTML = letter.title;
        document.getElementById("letter-message").textContent = letter.message;

        if (letter.showChoices) {
            const choiceContainer = document.createElement("div");
            choiceContainer.className = "letter-choices";
            choiceContainer.innerHTML = `
                <button id="yes-btn" class="choice-btn yes-btn">Yes! 💕</button>
                <button id="no-btn" class="choice-btn no-btn">No 💔</button>
            `;
            document.querySelector(".letter-text").appendChild(choiceContainer);

            let yesScale = 1;
            const yesBtn = document.getElementById("yes-btn");
            const noBtn = document.getElementById("no-btn");

            noBtn.addEventListener("click", () => {
                yesScale += 0.6;
                yesBtn.style.transform = `scale(${yesScale})`;
                yesBtn.style.zIndex = "10";

                if (yesScale > 3.5) {
                    noBtn.style.opacity = "0";
                    setTimeout(() => { noBtn.style.display = "none"; }, 200);
                }
            });

            yesBtn.addEventListener("click", () => {
                alert("Yay! Best decision ever! ❤️");
            });
        }
    } else {
        letterTitleElem.textContent = "Letter not found.";
        document.getElementById("letter-message").textContent = "Hmm this letter doesn't seem to exist.";
    }

    const letterText = document.querySelector(".letter-text");
    const gif = document.querySelector(".opening-gif");

    setTimeout(() => {
        if (gif) gif.src = "letter-final.png";
        if (letterText) letterText.classList.remove("hidden");
    }, 1200);
}
