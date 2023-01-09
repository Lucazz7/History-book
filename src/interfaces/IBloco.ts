export type BlocksTreeId = {
  blockId: string;
  bounds: number[][];
  centroid: number[];
  name: string;
  abrv: string;
  blockParent: string;
  leafParent: boolean;
  date: string;
  data: {
    windSpeed: number;
    solarIrradiation: number;
    temperature: number;
    rain: number;
    relativeHumidity: number;
  };
};

export type BlocksTreeIdCreated = {
  blockId: string;
  bounds: number[][];
  centroid: number[];
  name: string;
  abrv: string;
  blockParent: string;
  leafParent: boolean;
  date: string;
  data: {
    windSpeed: number;
    solarIrradiation: number;
    temperature: number;
    rain: number;
    relativeHumidity: number;
  };
};

export type BlocksLatLong = {
  bounds: number[][];
};

export type Blocks = {
  blockId: string;
  name: string;
  abrv: string;
  blockParent: string;
  leafParent: boolean;
  date: string;
  data: {
    windSpeed: number;
    solarIrradiation: number;
    temperature: number;
    rain: number;
    relativeHumidity: number;
  };
};

export type UsersType = {
  id: string;
  email: string;
  phone: string;
  displayName: string;
  photoURL: string;
};

export type CreateBlocks = {
  blockId: string;
  name: string;
  abrv: string;
  blockParent: string;
  leafParent: boolean;
  date: string;
  data: {
    windSpeed: number;
    solarIrradiation: number;
    temperature: number;
    rain: number;
    relativeHumidity: number;
  };
};
