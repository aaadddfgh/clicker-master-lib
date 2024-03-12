import { Command } from "./Command";

export class CommandBuilder {

    commands: Command[] = [];
    stringBuilder: string;

    constructor() {
        this.stringBuilder = "";
    }

    click(x: number, y: number): this {
        this.commands.push(CommandBuilder.makeClick(x, y));
        return this;
    }

    sleep(duration: number): this {
        this.commands.push(CommandBuilder.makeSleep(duration));
        return this;
    }

    swipe(x1: number, y1: number, x2: number, y2: number, duration?: number, delay?: number): this {
        if (typeof duration !== "undefined" && typeof delay !== "undefined") {
            this.commands.push(CommandBuilder.makeSwipe(x1, y1, x2, y2, duration, delay));
        } else if (typeof duration !== "undefined") {
            this.commands.push(CommandBuilder.makeSwipe(x1, y1, x2, y2, duration));
        } else {
            this.commands.push(CommandBuilder.makeSwipe(x1, y1, x2, y2));
        }
        return this;
    }

    build(): string {
        
        return this.commands.reduce(
                (acc,command) => {return acc + command.toString()+';';},
                ""
            );
    }

    clear(): void {
        this.commands = [];
        this.stringBuilder = "";
    }

    static makeClick(x: number, y: number): Command {
        return new Command("CLICK").addPosition(x, y);
    }

    static makeSleep(duration: number): Command {
        return new Command("SLEEP").setDuration(duration);
    }

    static makeSwipe(x1: number, y1: number, x2: number, y2: number, duration?: number, delay?: number): Command {
        let swipeCommand = new Command("SWIPE").addPosition(x1, y1).addPosition(x2, y2);
        if (typeof duration !== "undefined") {
            swipeCommand.setDuration(duration);
        }
        if (typeof delay !== "undefined") {
            swipeCommand.setDelay(delay);
        }
        return swipeCommand;
    }
}