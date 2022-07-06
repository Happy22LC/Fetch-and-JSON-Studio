// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        return response.json();
    }).then(function(response) {
        //Bonus:sortedfrom most to least time in space.
        let sortedAstronauts = response.sort(function(a, b){return b.hoursInSpace - a.hoursInSpace });

        //console.log(response);
        //push out each astronaut to the screen
        let myContainer = document.getElementById("container");

        //Bonus:Make the "Active: true" text green, for astronauts that are still active (active is true).
        //Used Ternary operator:
        // Conditional ? if true : if false

        let allMyHtml = "";

        //Bonus:Add a count of astronauts to the page.
        let countOfAstronauts = `
        <h3>Astronaut Count: ${sortedAstronauts.length}</h3>
        `
        allMyHtml += countOfAstronauts;


        for(let i = 0; i < response.length; i++)
        {
            //console.log(response[i]);
            let myHtml = `
            <div class="astronaut">
                <div class="bio">
                    <h3>${response[i].firstName} ${response[i].lastName}</h3>
                    <ul>
                        <li>hours in space: ${response[i].hoursInSpace}</li>
                        <li ${response[i].active ? 'class="green-text"' : ''}>Active: ${response[i].active}</li>
                        <li>Skills: ${response[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${response[i].picture}">
            </div>
            `;
            allMyHtml += myHtml;
        }
        myContainer.innerHTML = allMyHtml;

    });
});