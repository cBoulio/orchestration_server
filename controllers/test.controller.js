const {asyncHandler} = require('../utils/helper');
const TestService = require('../services/test.service');

exports.getTestRoute = asyncHandler(async (req,res) => {

    let testResponse = await TestService.getTestService();
    if(!testResponse){
        return HELPER.sendResponse(res, 404, 'Error')
    }


    return HELPER.sendResponse(res, 200, testResponse)
    
});


exports.postTestRoute = asyncHandler(async (req,res) => {

    let testResponse = await TestService.postTestService(req.body);
    if(!testResponse){
        return HELPER.sendResponse(res, 404, 'Error')
    }

    
    return HELPER.sendResponse(res, 200, testResponse)
    
});