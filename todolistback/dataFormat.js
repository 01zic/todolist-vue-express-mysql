const timeFormat = require('./momentForm');
function dataFormat(data) {
    data.forEach(element => {
        element.create_time = timeFormat(element.create_time);
        element.update_time = timeFormat(element.update_time);
    });
}
module.exports = dataFormat;
