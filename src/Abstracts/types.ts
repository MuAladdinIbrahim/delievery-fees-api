type Location = {
  lat: number;
  lng: number;
};

enum Vehicle {
  bicycle = 'bicycle',
  bike = 'bike',
  car = 'car',
  foot = 'foot',
  transportation = 'transportation',
}
export type Params = {
  location: Location;
  vehicle: Vehicle;
  datetime: Date;
};

export enum Strategy {
  basket = 'basket',
  distance = 'distance',
  dynamic = 'dynamic',
}

export type StrategyFn = (params: Params) => Promise<number>;
