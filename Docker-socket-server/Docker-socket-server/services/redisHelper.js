const ERROR = 500, OK = 200, EXISTS = 202, NOT_EXISTSS = 404;
require('dotenv').config()

var redis = require('redis'),
    jsonify = require('redis-jsonify'),
    client = jsonify(redis.createClient({ host: process.env.REDIS, port: 6379 }));

module.exports = {
    connect: () => {
        return new Promise((resolve, reject) => {
            client.on('connect', () => {
                console.log('redis client connected!');
                resolve(client);
            });
            client.on('error', (err) => {
                reject({
                    statusCode: ERROR,
                    message: err,
                    data: null
                });
            });
        });
    },
    setKey: (key, value) => {
        return new Promise((resolve, reject) => {
            client.set(key, value, function (err, result) {
                if (err) {
                    reject({
                        statusCode: ERROR,
                        message: err,
                        data: null
                    });
                } else if (result) {
                    resolve({
                        statusCode: OK,
                        message: OK,
                        data: result
                    });
                }
            });
        })
    },
    getKey: (key) => {
        return new Promise((resolve, reject) => {
            client.get(key, function (err, result) {
                if (err) {
                    reject({
                        statusCode: ERROR,
                        message: err,
                        data: null
                    });
                } else if (result) {
                    resolve({
                        statusCode: OK,
                        message: EXISTS,
                        data: result
                    });
                } else if (result == null) {
                    resolve({
                        statusCode: NOT_EXISTSS,
                        message: NOT_EXISTSS,
                        data: result
                    });
                }
            });
        });
    },


}
