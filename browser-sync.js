const BS = require('browser-sync');

const config = {
  proxy: 'localhost:4000',
  port: 3001,
  files: ['static/**/*'],
  open: false,
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false
  }
}

BS(config);
