import { CommandoClient, Command, CommandMessage } from "discord.js-commando";
import { Message } from "discord.js";

export default class TestCommand extends Command {
    constructor(client: CommandoClient) {
        super(client, {
            name: 'test',
            group: 'util',
            memberName: 'test',
            description: 'test'
        });
    }

    public hasPermission(message: CommandMessage): boolean {
        return true;
    }

    public async run(message: CommandMessage, args: {} | string | string[]): Promise<Message | Message[]> {
        return message.say('test');
    }
}