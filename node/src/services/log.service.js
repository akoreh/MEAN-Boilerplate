import chalk from 'chalk';

export function success(message) {
    console.log(chalk.green(message));
}

export function info(message) {
    console.log(chalk.yellow(message));
}

export function error(message) {
    console.log(chalk.red(message));
}

export function pad(length, character) {
    let pad = '';

    for (let i = 0; i < length; i++) {
        pad += character;
    }

    return pad;
}