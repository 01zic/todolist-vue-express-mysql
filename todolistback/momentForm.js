const moment = require('moment');
function timeFormat(time) {
    return moment(time).format(
        'Y-MM-DD HH:mm:ss'
    );
}
module.exports = timeFormat;