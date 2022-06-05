const landingPageC = document.querySelector("#landing-page-c");
const landingImg = document.createElement("img");
landingImg.setAttribute("src", "./assets/images/102492.jpeg");
landingImg.style = "width: 100%;";
landingPageC.append(landingImg);
let apptQEl = document.createElement("div").setAttribute("id", "appt-q");


// let apptQtext = document.createElement("h4");
// apptQtext.textContent("Would you like to schedule an appointment?");
// document.body.appendChild(apptQtext);
// document.body.append(apptQEl);