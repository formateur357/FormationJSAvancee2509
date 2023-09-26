const apiResult = "{ \"id\": 1, \"result\": [ { \"status\": { \"code\": 0, \"message\": \"OK\" }, \"url\": \"\\/sys\\/login\\/user\" } ]}";
const apiResultWithoutBackslash = apiResult.replace(/\\/g, '');

// Will return : { "id": 1, "result": [ { "status": { "code": 0, "message": "OK" }, "url": "/sys/login/user" } ]}
console.log(apiResultWithoutBackslash);