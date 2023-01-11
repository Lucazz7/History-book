export interface Geometry {
  type: string;
  coordinates: number[][][];
}

export interface StyleMapHash {
  normal: string;
  highlight: string;
}

export interface Properties {
  name: string;
  styleUrl: string;
  styleMapHash: StyleMapHash;
}

export interface Feature {
  type: string;
  geometry: Geometry;
  properties: Properties;
  id: string;
}

export interface RootObject {
  type: string;
  features: Feature[];
}
