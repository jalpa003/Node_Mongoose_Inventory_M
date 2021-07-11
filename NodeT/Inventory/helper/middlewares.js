
const responseMiddleWares = (data, status, message) => {
    var response = { status: status, message: message };
    if (data) response['data'] = data;
    return response;
}


module.exports = { responseMiddleWares }