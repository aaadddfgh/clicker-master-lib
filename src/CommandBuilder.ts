import { Command } from "./Command";

export class CommandBuilder {
    stringBuilder: string;

    constructor() {
        this.stringBuilder = "";
    }

    click(x: number, y: number): this {
        this.stringBuilder += CommandBuilder.makeClick(x, y).toString() + ";";
        return this;
    }

    sleep(duration: number): this {
        this.stringBuilder += CommandBuilder.makeSleep(duration).toString() + ";";
        return this;
    }

    swipe(x1: number, y1: number, x2: number, y2: number, duration?: number, delay?: number): this {
        if (typeof duration !== "undefined" && typeof delay !== "undefined") {
            this.stringBuilder += CommandBuilder.makeSwipe(x1, y1, x2, y2, duration, delay).toString() + ";";
        } else if (typeof duration !== "undefined") {
            this.stringBuilder += CommandBuilder.makeSwipe(x1, y1, x2, y2, duration).toString() + ";";
        } else {
            this.stringBuilder += CommandBuilder.makeSwipe(x1, y1, x2, y2).toString() + ";";
        }
        return this;
    }

    build(): string {
        return this.stringBuilder;
    }

    clear(): void {
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