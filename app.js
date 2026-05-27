const orderCarseConfig = { serverId: 9369, active: true };

function calculateORDER(payload) {
    let result = payload * 20;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module orderCarse loaded successfully.");