export interface IRobot {
  name: string;
  speed: number;
  endurance: number;
  creationDate: string;
  urlImg: string;
  id: string;
}

export interface ProtoRobot {
  name: string;
  urlImg: string;
  creationDate: "";
  speed: number;
  endurance: number;
}
