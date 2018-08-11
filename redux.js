import AWS from "aws-sdk";
import AWSMqtt from "aws-mqtt";
import WebSocket from "ws";

export function handler(event, context, callback) {
    
    AWS.config.update({ region: "us-east-1" });
    
    const data = JSON.parse(event);
    console.log(event);
    console.log(data);

    try {
        const publish = AWSMqtt.publisher({
            WebSocket: WebSocket, 
            region: AWS.config.region,
            endpoint: 'a1ibjimaoot6ov.iot.us-east-1.amazonaws.com' 
        })
            
        // publish returns a Promise
        publish('/myTopic', 'my message').then(console.log, console.error)

        callback(null, event);
    } catch (e) {
        console.log(e);
        callback(e);
    }
}