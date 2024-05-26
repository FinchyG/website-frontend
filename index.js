// Execute in strict mode
"use strict";

// Declare a Controller object for use by the HTML view
var controller;

window.addEventListener("load", () => {
    console.log("page loaded");
    // Create the GreetingsController object for use by the HTML view
    controller = new GreetingsController();
});

function GreetingsController() {

    // functions to return model data

    function getMorningGreeting() {

        function onSuccess(data) {
            console.log("sucessful");
            document.getElementById("morningGreetingParagraph").innerText = data.greeting;
        }
        $.ajax('https://render-express-router-json-hello-world.onrender.com/timed_greetings/morning', { type: 'GET', success: onSuccess });
    }

    function getAfternoonGreeting() {

        function onSuccess(data) {
            document.getElementById("afternoonGreetingParagraph").innerText = data.greeting;
        }
        $.ajax('https://render-express-router-json-hello-world.onrender.com/timed_greetings/afternoon', { type: "GET", success: onSuccess },
        );
    }

    function getEveningGreeting() {

        function onSuccess(data) {
            document.getElementById("eveningGreetingParagraph").innerText = data.greeting;
        }
        $.ajax('https://render-express-router-json-hello-world.onrender.com/timed_greetings/evening', { type: "GET", success: onSuccess },
        );
    }

    function getNightGreeting() {

        function onSuccess(data) {
            document.getElementById("nightGreetingParagraph").innerText = data.greeting;
        }
        $.ajax('https://render-express-router-json-hello-world.onrender.com/timed_greetings/night', { type: 'GET', success: onSuccess },
        );
    }

    // CONTROLLER FUNCTIONS

    this.morningGreeting = function () {
        getMorningGreeting();
    }

    this.afternoonGreeting = function () {
        getAfternoonGreeting();
    }

    this.eveningGreeting = function () {
        getEveningGreeting();
    }

    this.nightGreeting = function () {
        getNightGreeting();
    }

}