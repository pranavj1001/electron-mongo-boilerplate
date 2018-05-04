const electron = require('electron');
const mongoose = require('mongoose');

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

mongoose.connect('mongodb://localhost/database_name');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

// db queries