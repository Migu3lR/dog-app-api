import iot from './libs/iotPublisher'

export function handler(event, context, callback) {
    
    const params = {
        topic: `/redux/${event.cid}`,
        payload: JSON.stringify(event),
        qos: 0
    };

    iot.publish(params, function(err, data){
        if(err){
            console.log(err);
            callback(err);
        }
        else{
            console.log("success?");
            callback(null, event);
            //context.succeed(event);
        }
    });
}