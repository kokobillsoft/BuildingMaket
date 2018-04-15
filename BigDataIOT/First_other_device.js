function main(){

'use strict';

var iothub = require('azure-iothub');
var connectionString = 'HostName=23-openhub.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=QNReY5jQUjm6Hp8glj+P24d7VBLrwc8lHWqZXPjM3Eo=';

var registry = iothub.Registry.fromConnectionString(connectionString);

var device = {
    deviceId: 'device4'
  }
  registry.create(device, function(err, deviceInfo, res) {
    if (err) {
      registry.get(device.deviceId, printDeviceInfo);
      console.log('Error Connection');
    }
    if (deviceInfo) {
      printDeviceInfo(err, deviceInfo, res)
    }
  });
  
  function printDeviceInfo(err, deviceInfo, res) {
    if (deviceInfo) {
      console.log('Device ID: ' + deviceInfo.deviceId);
      console.log('Device key: ' + deviceInfo.authentication.symmetricKey.primaryKey);
    }
  }
  return 0;
};

  main ();