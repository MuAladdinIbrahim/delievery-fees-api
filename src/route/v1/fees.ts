import Router, {NextFunction, Request, Response} from 'express';
import {calculateFees} from '../../service/Fees/calculateFees';
import parseFeesRequest from '../../helpers/parseFeesRequest';
import {Params, StrategyFn} from '../../Abstracts/types';
const router = Router();

router.get(
  '/v1/fees',
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const [params, strategyFn]: [Params, StrategyFn] = parseFeesRequest(req);
      const fees: number = await calculateFees(params, strategyFn);
      res.send({delivery_fees: fees});
      return;
    } catch (err) {
      next(err);
    }
  }
);

export default router;
