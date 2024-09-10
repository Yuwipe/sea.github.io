// For the main website uwu
function updateSkills() {
    var newSkill = document.getElementById("skillsInput").value;
    var skillsList = document.getElementById("skillslist");
        if (newSkill.trim() === "") {
            alert("Please enter a valid skill.");
            return;
            }
        var listItem = document.createElement("li");
        listItem.textContent = newSkill;
        skillsList.appendChild(listItem);

        document.getElementById("skillsInput").value = "";
    }


function updateExperience() {
    var newExperience = document.getElementById("experienceInput").value;
    var experienceParagraph = document.getElementById("experiencelist");

        if (newExperience.trim() === "") {
            alert("Please enter a valid experience.");
            return;
        }
            experienceParagraph.textContent += "\n" + newExperience;
            document.getElementById("experienceInput").value = "";
        }


// Grade Calculator uwu
function calculateFinalGrade() {
    var midtermScore = parseFloat(document.getElementById("midtermScore").value);
    var finalScore = parseFloat(document.getElementById("finalScore").value);
        if (isNaN(midtermScore) || isNaN(finalScore)) {
            alert("Please enter valid scores.");
            return;
            }
    var finalGrade = (midtermScore * 0.5) + (finalScore * 0.5);
    var finalGradeResult = document.getElementById("finalGradeResult");
        if (finalGrade < 50) {
            finalGradeResult.textContent = "Final Grade: Below 75";}
        else if (finalGrade >= 51 && finalGrade < 61) {
            finalGradeResult.textContent = "Final Grade: 75 - 80";}
        else if (finalGrade >= 61 && finalGrade < 71) {
            finalGradeResult.textContent = "Final Grade: 81 - 85";}
        else if (finalGrade >= 71 && finalGrade < 81) {
            finalGradeResult.textContent = "Final Grade: 86 - 90";}
        else {
            finalGradeResult.textContent = "Final Grade: Above 90";}
    }