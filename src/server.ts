import { MonthDataModel } from "./models/month-data.model";
import { delay } from "./utils";

const data: MonthDataModel[] = [{
  date: new Date('1.11.2022'),
  moneyAmount: 1000,
}, {
  date: new Date('2.11.2022'),
  moneyAmount: 2000,
}, {
  date: new Date('3.11.2022'),
  moneyAmount: 1500,
}, {
  date: new Date('4.11.2022'),
  moneyAmount: 1700,
}, {
  date: new Date('5.11.2022'),
  moneyAmount: 0,
}, {
  date: new Date('6.11.2022'),
  moneyAmount: 0,
}];

const goal: number = 1500;

export function getRecords(): Promise<MonthDataModel[]> {
  return delay(1000).then(() => data);
}

export function getGoal(): Promise<number> {
  return delay(1000).then(() => goal);
}
