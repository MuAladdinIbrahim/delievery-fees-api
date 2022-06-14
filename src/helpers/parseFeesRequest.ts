import {Request} from 'express';
import {Params, StrategyFn} from '../Abstracts/types';
import getRightStrategy from './getRightStrategy';

export default (req: Request) => {
  const {location, datetime, vehicle, strategy} = req.query;
  //FIXME rm <any>
  const strategyFn = getRightStrategy(<any>strategy);
  const params: Params = {
    location: <any>location,
    datetime: <any>datetime,
    vehicle: <any>vehicle,
  };
  return [params, strategyFn] as [Params, StrategyFn];
};
