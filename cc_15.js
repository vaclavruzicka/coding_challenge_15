//Task 1 - Creating the Base Structure

//Selecting the risk dashboard container.
const riskDashboard = document.getElementById("riskDashboard")

//Logging a message when the dashboard loads.
console.log("Risk Dashboard Loaded")

//Task 2 - Adding Risk Items Dynamically

//Adding an event listener for the add risk button in the html document. 
document.getElementById("riskForm").addEventListener("submit", function(event) {
    event.preventDefault()

    //Setsthe risk name, level, and department equal to whatever was put into the form.
    const riskName = document.getElementById("riskName").value
    const riskLevel = document.getElementById("riskLevel").value
    const riskDepartment = document.getElementById("riskDepartment").value

    //Runs the add risk card function.
    addRiskItem(riskName, riskLevel, riskDepartment)

    //Resets the form after the submit button is hit.
    this.reset()
   })

    //Creating a function that creates a risk card using the text that was put into the form.
    function addRiskItem(riskName, riskLevel, riskDepartment) {
        const riskCard = document.createElement("div")

        //Sets the risk card's class to "risk-card".
        riskCard.setAttribute("class", "risk-card")
        riskCard.setAttribute("id", riskLevel)

        //Adds html text into the card, and uses a template literal to use html code in javascript.
        riskCard.innerHTML = 
            `<h3>${riskName}</h3>
            <p><strong>Level:</strong> ${riskLevel}</p>
            <p><strong>Department:</strong> ${riskDepartment}</p>`
        
        //Task 3 - Removing Risk Items

        //Creating a resolve button that when clicked, will remove the risk card.
        resolveButton = document.createElement("button")
        resolveButton.textContent = "Resolve"

        //Adding the event listner so that when the buttom is clicked, the card is removed.
        resolveButton.addEventListener("click", (event) => {

            //Task 6 - Handling Event Propagation

            //Using stop propoagation in order to not allow for unwanted clicks to remove the risk cards.
            event.stopPropagation()
            riskCard.parentNode.removeChild(riskCard)
        })

        //Adding the resolve button to each card.
        riskCard.appendChild(resolveButton)

        //Adds the risk card to the risk dashboard.
        riskDashboard.appendChild(riskCard)
        
        //Task 4 - Categorizing Risks By Level

        //Using an if, else if, else statement to set the background color to the desired color based on risk level.
        if (riskLevel === "High") {
            riskCard.style.backgroundColor = "red"
        } else if (riskLevel === "Medium") {
            riskCard.style.backgroundColor = "yellow"
        } else {
            riskCard.style.backgroundColor = "green"
        }
    }  