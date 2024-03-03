import { CommandBuilder } from "./CommandBuilder";

export class CommandJsonBuilder {
    commandBuilder: CommandBuilder;

    constructor(){
        this.commandBuilder=new CommandBuilder();
    }

    public  click(x: number, y: number) {
        this.commandBuilder.click(x, y);
        return this;
    }

    // 添加睡眠命令到构建器
    public  sleep(duration: number) {
        this.commandBuilder.sleep(duration);
        return this;
    }

    // 添加滑动命令到构建器，带持续时间和延迟
    public swipe(x1: number, y1: number, x2: number, y2: number, duration: number |undefined = undefined, delay: number|undefined = undefined) {
        this.commandBuilder.swipe(x1, y1, x2, y2, duration, delay);
        return this;
    }

    public  clear() {
        this.commandBuilder.clear();
        return;
    }

    /**
     * build
     */
    public build() {
        return {"commands":this.commandBuilder.build()}
    }

    public buildString()  {
        
        return JSON.stringify(this.build());
    }

}