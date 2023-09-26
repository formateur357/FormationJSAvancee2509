const apiResult = "{ \"id\": 1, \"result\": [ { \"status\": { \"code\": 0, \"message\": \"OK\" }, \"url\": \"\\/sys\\/login\\/user\" } ]}";
const apiResultWithoutBacklash = apiResult.replace(/\\+/g, "");
const apiResultHarmonized = apiResultWithoutBacklash.replace(/"([^"]*)"/g, "'$1'");

console.log(apiResultHarmonized);