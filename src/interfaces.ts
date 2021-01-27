/* eslint-disable */

interface FruitInformation {
  name: string;
  color: "orange" | "red" | "green";
  type?: string;
  origin: string | null | undefined
}

interface FruitInformationWithPips extends FruitInformation {
  pipCount: number;
}

interface FruitInformationWithSeeds extends FruitInformation {
  seedCount: number;
}

const appleInformation: FruitInformationWithPips = {
  name: "Apple",
  color: "red",
  pipCount: 10,
  type:"granny",
  origin: "UK"
}

const orangeInformation: FruitInformationWithSeeds = {
  name: "Orange",
  color: "orange",
  seedCount: 20,
  origin: undefined
}

const pearInformation: FruitInformationWithPips = {
  name: "Pear",
  color: "green",
  pipCount:4,
  origin: null
}

const pearColor = pearInformation.color;