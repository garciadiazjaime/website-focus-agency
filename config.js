var convict = require('convict');

var config = convict({
    email: {
      doc: 'default contact email',
      format: String,
      default: 'info@mintitmedia.com',
      env: 'FOCUS_AGENCY_EMAIL'
    },
    ipaddress: {
        doc: 'IP the application runs on',
        format: 'ipaddress',
        default: '0.0.0.0',
    },
    port: {
        doc: 'Port the application listens on',
        format: 'port',
        default: '3070',
    },
    sendgrid: {
        doc: 'Sendrid API KEY',
        format: String,
        default: '',
        env: 'SENDGRID_API_KEY'
    }
});

config.validate();

module.exports = config;
