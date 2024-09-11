// For the main website
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

// Cursor Trail
const trailCount = 20; // Number of trails to create
const trails = [];

// Create the trail elements and append them to the document
for (let i = 0; i < trailCount; i++) {
  const trail = document.createElement('div');
  trail.classList.add('trail');
  document.body.appendChild(trail);
  trails.push(trail);
}

let mouseX = 0, mouseY = 0;
const trailPositions = new Array(trailCount).fill({ x: 0, y: 0 });

// Track the mouse position and update global coordinates
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function updateTrails() {
  // Add new mouse position and remove the oldest one
  trailPositions.unshift({ x: mouseX, y: mouseY });
  trailPositions.pop();

  // Move the trails to follow the cursor
  trails.forEach((trail, index) => {
    const { x, y } = trailPositions[index];
    trail.style.transform = `translate(${x - 5}px, ${y - 5}px)`; // Center the trail
    trail.style.opacity = 1 - (index / trailCount); // Gradually fade the trails
  });

  // Continuously update the trails
  requestAnimationFrame(updateTrails);
}

updateTrails(); // Start the animation loop
