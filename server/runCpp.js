const { exec } = require('child_process');

function runCpp(callback) {
    exec('../cpp/library', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return callback(stderr);
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return callback(stderr);
        }
        callback(stdout);
    });
}

module.exports = { runCpp };
