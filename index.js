const getPossibleSizes = async (event) => {  
    let groupsParam = event.groups;
    let responseObj = { sizes: 'There are no groups to process.'};
    
    if (groupsParam) {
      let groups = groupsParam.split(",").map(Number);
      let process = require("./process");
      let processObj = new process(groups);
      let responseSizes = processObj.getResponse();
      responseObj = { sizes: responseSizes.toString() };
    }
      
    const response = {
        statusCode: 200,
        body: JSON.stringify(responseObj),
    };
    return response;
};
  
exports.handler = getPossibleSizes;