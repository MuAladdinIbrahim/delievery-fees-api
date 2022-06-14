import {Params, Strategy, StrategyFn} from '../Abstracts/types';
import {basketBasedPricing} from '../core/PricingStrategy/basketBased';
import {distanceBasedPricing} from '../core/PricingStrategy/distanceBased';
import {dynamicPricing} from '../core/PricingStrategy/dynamic';

export default (strategy: Strategy) => {
  let strategyFn: StrategyFn;
  switch (strategy) {
    case Strategy.basket:
      strategyFn = basketBasedPricing;
      break;
    case Strategy.distance:
      strategyFn = distanceBasedPricing;
      break;
    case Strategy.dynamic:
      strategyFn = dynamicPricing;
      break;
    default:
      throw new Error('Not supported strategy');
  }
  return strategyFn;
};
