function checkAnswers() {
    let score = 0;
    let results = [];

    const answers = new FormData(
        document.getElementById("quiz")
    );

    // Question 1
    if (answers.get("q1") === "clippers") {
        score++;
        results.push("Question 1: Correct");
    } else {
        results.push("Question 1: Incorrect");
    }

    // Question 2
    if (answers.get("q2") === "clarify") {
        score++;
        results.push("Question 2: Correct");
    } else {
        results.push("Question 2: Incorrect");
    }

    // Questions with multiple correct answers
    function matches(question, correct) {
        const selected = answers.getAll(question);

        return selected.length === correct.length &&
            correct.every(answer => selected.includes(answer));
    }

    // Question 3
    if (matches("q3", ["shears", "clippers"])) {
        score++;
        results.push("Question 3: Correct");
    } else {
        results.push("Question 3: Incorrect");
    }

    // Question 4
    if (matches("q4", ["style", "length"])) {
        score++;
        results.push("Question 4: Correct");
    } else {
        results.push("Question 4: Incorrect");
    }

    // Display results
    document.getElementById("result").innerHTML =
        results.join("<br>") +
        "<br><br><strong>Your Score: " +
        score + " out of 4</strong>";
}