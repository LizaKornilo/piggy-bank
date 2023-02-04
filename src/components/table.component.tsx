import React, { useEffect, useState } from 'react';
import LoaderComponent from './loader.component';
import { MonthDataModel } from '../models/month-data.model';
import { getGoal, getRecords } from '../server';
import { getRecordsPersent } from '../utils/record-formatter.util';

function TableComponent() {
  const [records, setRecords] = useState<MonthDataModel[]>([]);
  const [goal, setGoal] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setRecords(await getRecords());
      setGoal(await getGoal());
      setLoading(false);
    })()
  }, [])

  return loading
  ? <LoaderComponent />
  : (
    <div className="table">
      {
        records.map((record, i) => (
          <div key={i}>
            <span>{record.date.getMonth()+1}</span>
            <span> </span>
            <span>{record.moneyAmount}</span>
            <span> </span>
            <span>{getRecordsPersent(record, goal)}</span>
           </div>
        ))
      }
    </div>
  );
}

export default TableComponent;
