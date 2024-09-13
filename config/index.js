var configValues = require("./config");

module.exports = {
    getDbConnectionString: function() {
        return "mongodb+srv://" + configValues.uname + ":" + configValues.pwd + "@cluster0.nbw9b.mongodb.net/nodetodo?retryWrites=true&w=majority"
    }
}