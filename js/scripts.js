function createData(obj) {
    var data = obj;

    return {
        get: function (key) {
            return data[key];
        },
        set: function (key, value) {
            if(key != undefined && value != undefined) {
                return data[key] = value;
            }
            else {
                console.log("Brakuje key lub value");
            }
        }
    };
}

var data = createData({});

console.log( data.set("name", "Janek") );

console.log( data.get("name") );



