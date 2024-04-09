type Animal = "cat" | "dog" | "bird";

enum animalStatus {
  Available = "available",
  Notavailable = "notavailable",
}

interface IAnimalData {
  animal: Animal;
  breed: string;
  sterilized?: string;
}

interface IAnimalAvailableData extends IAnimalData {
  location: string;
  age?: number;
}

interface IAnimalNotAvailableData {
  message: string;
  nextUpdateIn: Date;
}
interface AnimalAvailableResponse {
  status: animalStatus.Available;
  data: IAnimalAvailableData;
}

interface AnimalNotAvailableResponse {
  status: animalStatus.Notavailable;
  data: IAnimalNotAvailableData;
}

type Res = AnimalAvailableResponse | AnimalNotAvailableResponse;

function isAvailable(res: Res): res is AnimalAvailableResponse {
  if (res.status === animalStatus.Available) {
    return true;
  } else {
    return false;
  }
}

function checkAnimalData(animal: Res): IAnimalAvailableData | string {
  if (isAvailable(animal)) {
    return animal.data;
  } else {
    return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
  }
}
