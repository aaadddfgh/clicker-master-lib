
import { CommandBuilder } from "../src/CommandBuilder"

let commandBuilder =new CommandBuilder();

commandBuilder
    .click(1,2)
    .sleep(100)
    .swipe(100,200,300,400)
    .swipe(100,200,300,400,500)
    .swipe(100,200,300,400,500,1000)
;

let out=commandBuilder.build();

if(out!=="click 1 2;sleep 100;swipe 100 200 300 400;swipe 100 200 300 400 500;swipe 100 200 300 400 500 1000;"){
    throw new Error(out);
}
console.log(out)

