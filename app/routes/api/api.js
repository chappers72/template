/**
 * Created by StevenChapman on 01/05/15.
 */
var ctrl = require('../controllers/myController');
module.exports=function(app){
    app.post('/api/mycall',ctrl.doSomething);
}
