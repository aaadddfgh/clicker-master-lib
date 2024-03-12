# Info

This is the master side js/ts lib for [Android-Remote-Clicker](https://github.com/aaadddfgh/Android-Remote-Clicker)

Find source code [here](https://github.com/aaadddfgh/clicker-master-lib)

Examle UI can be find in `/public/`.

Data security still WORKING. 

# Example

Direct use [example.html](./public)

``` js
import { CommandJsonBuilder } from "../src/CommandJsonBuilder"

let commandBuilder =new CommandJsonBuilder();

commandBuilder
    .click(1,2)
    .sleep(100)
    .swipe(100,200,300,400)
    .swipe(100,200,300,400,500)
    .swipe(100,200,300,400,500,1000)
;

let out=commandBuilder.build();

if(out.commands!=="click 1 2;sleep 100;swipe 100 200 300 400;swipe 100 200 300 400 500;swipe 100 200 300 400 500 1000;"){
    throw new Error(out.commands);
}
console.log(out)
console.log(commandBuilder.buildString())

```
