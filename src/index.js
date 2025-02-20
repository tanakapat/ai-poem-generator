function displayPoem(response)
 {
    new Typewriter("#poem-section", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
 
function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions")

    let apiKey = "bo5101a34b5992391t9e44f085355a8b";
    let prompt = `Generate a poem about ${instructionsInput}`;
    let context = "You are a romantic poem expert specialized in create poems with a maximum length of 5 lines in swedish. Please write one phrase for each line and use the basic HTML. Show only the poem text.";
    apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);    
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);