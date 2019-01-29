import { CommandoClient } from 'discord.js-commando';
import path from 'path';

export class BearTS {
    private client!: CommandoClient;

    public start(token: string): void {
        this.client = new CommandoClient({
            commandPrefix: process.env.BEAR_PREFIX,
			disableEveryone: true,
			owner: process.env.BEAR_OWNER,
			unknownCommandResponse: false,
        });

        this.client.registry
            .registerGroups([
                ['util', 'Utility commands']
            ])
            .registerDefaults()
            .registerCommandsIn(path.join(__dirname, 'commands'));

        
        this.client.on('ready', () => {
            console.log("> Bearbot is ready!");
            this.client.user.setActivity("with TypeScript <3");
        });

        this.client.login(token);
    }
}