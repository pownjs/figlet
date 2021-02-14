exports.yargs = {
    command: 'fonts',
    describe: 'List figlet fonts',

    builder: {},

    handler: async(argv) => {
        const util = require('util')
        const figlet = require('figlet')

        const fonts = util.promisify(figlet.fonts.bind(figlet))

        console.table((await fonts()).map(font => ({ font })))
    }
}
