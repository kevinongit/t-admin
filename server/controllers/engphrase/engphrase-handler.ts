import * as _ from 'lodash';
import BaseCtrl from '../base';
import Engphrase from '../../models/engphrase';

export default class EngphraseHandler extends BaseCtrl {
    model = Engphrase;
    
    getData = (req, res) => {
        // console.log('inboxData : ' + JSON.stringify(inboxData));

        res.send({});
    }
}