import fs from 'fs';
import path from 'path';

const config = JSON.parse(fs.readFileSync(path.resolve(__dirname + '/config.json'), 'utf8'));

function envConfig(env) {
    switch (env) {
        case 'development':
            return config.devConfig;
        case 'test':
            return config.testConfig;
        case 'production':
            return config.prodConfig;
        default:
            throw `Invalid ENV`;
    }
}

export default {
    ...envConfig(process.env.NODE_ENV)
};