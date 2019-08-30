var ip = "90.145.66.50";// context.getVariable('client.ip');
var whiteList = '{ "developers": ["90.145.66.50", "90.145.66.55"] }';// context.getVariable('ip.whitelist');

var whiteListJson = JSON.parse(JSON.stringify(whiteList));
var accessAllowed = false;
for (var customerKey in whiteListJson) {
    if (whiteListJson.hasOwnProperty(customerKey)) {
        if(Array.isArray(whiteListJson[customerKey]) && whiteListJson[customerKey].indexOf(ip) === 1) {
            accessAllowed = true;
        }
    }
}

if(!accessAllowed) {
    throw new Error("Your ip is illegal. Please contact the administrator")
}

