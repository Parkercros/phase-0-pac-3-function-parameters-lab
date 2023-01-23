// Define a function called introduction that takes in a parameter called "name" and returns the string "Hi, my name is [name]."
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Define a function called introductionWithLanguage that takes in two parameters, "name" and "language," and returns the string "Hi, my name is [name] and I am learning to program in [language]."
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Copy the function from step 2 and name it introductionWithLanguageOptional. It should have the same parameters as the previous function, but the second parameter, "language," should have a default value of "JavaScript."
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  