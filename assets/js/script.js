const landingPageC = document.querySelector("#landing-page-c");
const landingImg = document.createElement("img");
landingImg.setAttribute("src", "./assets/images/102492.jpeg");
landingImg.style = "width: 100%;";
landingPageC.append(landingImg);




let testDiv = document.createElement("div");
testDiv.setAttribute("id", "test-div");
// testDiv.style = "position: absolute; border: 1px solid red; width: 100px; height: 100px;";
testDiv.addEventListener("mouseover", function() {
    alert("who");
});
document.body.append(testDiv);

