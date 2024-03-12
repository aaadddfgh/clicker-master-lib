import type { CommandJsonBuilder } from "./CommandJsonBuilder";

/**
 * 
 * @param url e.g http://127.0.0.1:8888
 * @param commands 
 */
export function sendCommand(url: string,commands:CommandJsonBuilder){
    const xhr = new XMLHttpRequest();
        xhr.open('POST', url); // 替换为您的图片 URL
      
        xhr.send(commands.buildString());
}
