export class Command {
    static Actions = {
        CLICK: "click",
        SLEEP: "sleep",
        SWIPE: "swipe"
    } as const;

    action: string;
    pos: { x: number; y: number; }[];
    duration?: number;
    delay?: number;

    constructor(actions: keyof typeof Command.Actions) {
        this.action = Command.Actions[actions];
        this.pos = [];
    }

    addPosition(x: number, y: number): this {
        this.pos.push({ x, y });
        return this;
    }

    setDuration(duration: number): this {
        this.duration = duration;
        return this;
    }

    setDelay(delay: number): this {
        this.delay = delay;
        return this;
    }

    toString(): string {
        let builder = this.action;
        for (let point of this.pos) {
            builder += ` ${point.x} ${point.y}`;
        }
        if (this.duration && this.duration > 0) {
            builder += ` ${this.duration}`;
        }
        if (this.delay && this.delay > 0) {
            builder += ` ${this.delay}`;
        }
        return builder;
    }
}