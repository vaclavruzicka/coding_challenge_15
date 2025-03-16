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

        //Adds html text into the card, and uses a template literal to use html code in javascript.
        riskCard.innerHTML = 
            `<h3>${riskName}</h3>
            <p><strong>Level:</strong>${riskLevel}</p>
            <p><strong>Department:</strong> ${riskDepartment}</p>`
        
        //Adds the risk card to the risk dashboard.
        riskDashboard.appendChild(riskCard)
    }