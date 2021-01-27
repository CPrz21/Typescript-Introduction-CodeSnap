/* eslint-disable */

enum ElementType {
  Earth = "brown",
  Wind = "grey",
  Fire = "red",
  Water = "blue"
}

let myFavouriteElementType: ElementType = ElementType.Fire;

myFavouriteElementType = ElementType.Water;

const isWaterElement: boolean = myFavouriteElementType === ElementType.Water;

const myFavouriteColour = "blue";

switch (myFavouriteColour) {
  case ElementType.Water:
    console.log("Water matches my favorite color")
    break;
  default:
    console.log("This element type does not match my favourite colour")
    break;
}