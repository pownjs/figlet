exports.yargs = {
    command: '$0 <text>',
    describe: 'Generate figlet',

    builder: {
        font: {
            alias: 'f',
            describe: 'FIGlet font to use',
            type: 'string',
            default: 'Standard'
        },

        fg: {
            describe: 'Foreground color',
            choices: ['default', 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey'],
            default: 'default'
        },

        bg: {
            describe: 'Background color',
            choices: ['default', 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'],
            default: 'default'
        },

        bold: {
            describe: 'Make it bold',
            type: 'boolean',
            default: false
        }
    },

    handler: async(argv) => {
        const { font, fg, bg, bold, text } = argv

        const util = require('util')
        const figlet = require('figlet')
        const colors = require('@pown/cli/lib/colors')

        const figletText = util.promisify(figlet.text.bind(figlet))

        const options = { font }

        let color = colors

        color = color[fg] || color
        color = color[`bg${bg[0].toUpperCase()}${bg.substring(1)}`] || color
        color = bold ? color.bold : color

        if (color === colors) {
            color = (i) => i
        }

        console.log(color(await figletText(text, options)))
    }
}
