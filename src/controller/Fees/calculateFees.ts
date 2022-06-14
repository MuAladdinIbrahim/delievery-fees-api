import {Params, StrategyFn} from '../../Abstracts/types';

export const calculateFees = async (params: Params, strategyFn: StrategyFn) =>
  strategyFn(params);
