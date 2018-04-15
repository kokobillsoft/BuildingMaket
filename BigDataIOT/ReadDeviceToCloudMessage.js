var EventHubClient = require('azure-event-hubs').Client;
var connectionString = 'HostName=23-openhub.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=x4OvyTj2E+Xvu8DBW5NGQp0SCponLByDKc7QBZ8tJZE=';
var printError = function (err) {
    console.log(err.message);
  };
  
  var printMessage = function (message) {
    var controlDevice = JSON.stringify(message.body);
    if (controlDevice.match('device4')){
    console.log('Message received: ');
    console.log(JSON.stringify(message.body));
    console.log('');
    }
  };

  var client = EventHubClient.fromConnectionString(connectionString);
client.open()
    .then(client.getPartitionIds.bind(client))
    .then(function (partitionIds) {
        return partitionIds.map(function (partitionId) {
            return client.createReceiver('$Default', partitionId, { 'startAfterTime' : Date.now()}).then(function(receiver) {
                console.log('Created partition receiver: ' + partitionId)
                receiver.on('errorReceived', printError);
                receiver.on('message', printMessage);
            });
        });
    })
    .catch(printError);