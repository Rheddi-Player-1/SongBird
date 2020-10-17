'use strict'
const {Client} = require('cassandra-driver');

async function run(){
    const client = new Client({
        cloud: { secureConnectBundle: 'resources/secure-connect-clio.zip'},
        credentials: {username: 'clioadmin', password: 'password'}
    })
}
