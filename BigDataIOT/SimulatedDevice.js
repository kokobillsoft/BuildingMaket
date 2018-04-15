function main () {

  console.log('Connection start');
var clientFromConnectionString = require('azure-iot-device-mqtt').clientFromConnectionString;
var Message = require('azure-iot-device').Message;
var connectionString = 'HostName=23-openhub.azure-devices.net;DeviceId=device4;SharedAccessKey=QNReY5jQUjm6Hp8glj+P24d7VBLrwc8lHWqZXPjM3Eo=';
var client = clientFromConnectionString(connectionString);

function printResultFor(op) {
  console.log('PrintResultStart');
    return function printResult(err, res) {
      if (err) console.log(op + ' error: ' + err.toString());
      if (res) console.log(op + ' status: ' + res.constructor.name);
    };
    console.log('PrintResultEnd');
  }

  var connectCallback = function (err) {
    console.log('connect Call Back start');
    if (err) {
      console.log('Could not connect: ' + err);
    } else {
      console.log('Client connected');
      // Create a message and send it to the IoT Hub every second
      setInterval(function(){
          var localTimeValue = new Date();
          console.log(localTimeValue);
          var idDevice = 60 + (Math.random() * 2312);            
          var data = JSON.stringify({ deviceId: 'device4', PersonalID: idDevice, localTimeValue: localTimeValue });
          var message = new Message(data);
          console.log("Sending message: " + message.getData());
          client.sendEvent(message, printResultFor('send'));
      }, 1000);
    }
  };
  client.open(connectCallback);
};

main ();