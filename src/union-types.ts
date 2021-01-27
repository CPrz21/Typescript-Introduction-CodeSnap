/* eslint-disable */
let unionCityPopulation: number | string = 90;

unionCityPopulation = "Nine Million";

if (typeof unionCityPopulation === "string") {
  console.log('unionCityPopulation', unionCityPopulation);
} else if (typeof unionCityPopulation === "number") {
  console.log('unionCityPopulation', unionCityPopulation + 100);
}

//* Even you can set certain options
let optionsCities: "New York" | "San Salvador" | "Paris" | "Madrid";

//optionsCities="fuate"; //! Got an error here 'cause its not in the options
optionsCities="Paris";
