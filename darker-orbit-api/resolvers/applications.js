let mongoose = require('mongoose');

var applicationSchema = mongoose.Schema({
  name: String,
  type: String
});

const Application = mongoose.model('Application', applicationSchema);

exports.getApplications = () => new Promise((res, rej) => {
  Application.find((err, apps) => {
    if (err) rej(err);
    res(apps)
  });
});

exports.createApplication = (root, { app }) => new Promise((res, rej) => {
  let newApp = new Application(app);
  return newApp.save((err, savedApp) => {
    if (err) rej(err);
    res(savedApp);
  });
});