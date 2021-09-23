var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'startsend',
  description: 'API whatsApp ZLTecnologia',
  script: 'C:\\Users\\Administrator\\PDEV\\whatsapp-api-tutorial-master\\app.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});


svc.install();
