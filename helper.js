const Handlebars = require('handlebars')

Handlebars.registerHelper('ifEquals', function (job, selectedJob) {
  if (job === selectedJob) {
    return 'checked'
  }
})