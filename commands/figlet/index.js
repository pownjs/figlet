exports.yargs = {
    command: 'figlet',

    builder: (yargs) => {
        yargs.command(require('./sub/figlet').yargs)
        yargs.command(require('./sub/fonts').yargs)
    }
}
