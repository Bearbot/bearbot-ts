import { CommandoClient } from 'discord.js-commando';
import path from 'path';

export class BearTS {
    private client!: CommandoClient;

    public start(token: string): void {
        this.client = new CommandoClient({
            commandPrefix: '.',
			disableEveryone: true,
			owner: '89553652477358080',
			unknownCommandResponse: false,
        });

        this.client.registry
            .registerDefaultTypes()
            .registerGroups([
                ['util', 'Utility commands']
            ])
            .registerDefaultCommands({
                commandState: false,
				help: false,
				ping: false,
				prefix: false,
            })
            .registerCommandsIn(path.join(__dirname, 'commands'));

        
        this.client.on('ready', () => {
            this.client.user.setActivity("with TypeScript <3");
        });

        this.client.login(token);
    }
}