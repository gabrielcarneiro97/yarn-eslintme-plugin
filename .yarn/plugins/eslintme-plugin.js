module.exports = {
  name: 'eslintme-plugin',
  factory: require => {
    const { Command } = require('clipanion');

    class EslintMeCommand extends Command {
      async execute(cli, context) {
        context.stdout.write(`This is my very own plugin 😎\n`);
        // cli.add(['eslint']);
      }
    }

    EslintMeCommand.addPath(`eslintme`);

    return {
      commands: [
        EslintMeCommand,
      ],
    };
  }
}
