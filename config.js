var config = {
    database: {
        connectionString: "mongodb://localhost:27017/schemasample",
        databaseName: "schemasample"
    },
    debug: {
        database: {
            connectionString: "mongodb://localhost:27017/schemasample-dev",
            databaseName: "schemasample-dev"
        }
    }
};

module.exports = config;