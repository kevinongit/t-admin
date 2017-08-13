import Golfclub from '../models/golfclub';
import BaseCtrl from './base';

export default class GolfclubCtrl extends BaseCtrl {
  model = Golfclub;

  getFee = (req, res) => {
    // this.model.findOne({ _id: req.params.id }, (err, obj) => {
    //   if (err) { return console.error(err); }
    //   res.json(obj);
    // });

    this.model.aggregate([
        {
            $lookup:
             {
                 from: "feeInfo",
                 localField: "uid",
                 foreignField: "gc_id",
                 as: "gcfeeinfo"
             }
        }
    ]).exec(function(err, results) {
        if (err) { console.error(err); }
        res.json(results);
    });
  }
}
