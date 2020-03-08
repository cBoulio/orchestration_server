
const appName = process.env.NAME;

exports.getTestService = async () => {
    return new Promise(async (resolve,reject) =>{
        let test = {
            appName:appName,
            message:'is running, heres a test respone.'
        }
        resolve(test);
    });
};


exports.postTestService = async (data) => {
    return new Promise(async (resolve,reject) =>{
        let test = {
            email:data.email,
            password:data.password
        }
        resolve(test);
    });
};