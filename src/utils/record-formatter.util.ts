import { MonthDataModel } from "../models/month-data.model";

export function getRecordsPersent(monthData: MonthDataModel, goal: number): number {
  return 100*monthData.moneyAmount/goal;
}
