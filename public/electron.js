const electron = require('electron');
const log = require('electron-log');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const fs = require('fs');
const isDev = require('electron-is-dev');
const ipcMain = electron.ipcMain;
let mainWindow;

function createFile(value) {
  fs.readFile('users.json', 'utf8', function readFileCallback(err, data){
    log.info(value);
    if (err){
      log.error(err);
      fs.writeFile('users.json', JSON.stringify([value]), 'utf8', function callback() {});
    } else {
      let users = [];
      if (data.length > 0) users = JSON.parse(data); //now it an object
      users.push(value)
      fs.writeFile('users.json', JSON.stringify(users), 'utf8', function callback() {}); // write it back 
    }
  });
}

ipcMain.on('create-user',  (event, value) => {
  createFile(value)
});

ipcMain.on('get-user',  (event) => {
  fs.readFile('users.json', 'utf8', function readFileCallback(err, data){
    event.reply('user-reply', data)
  })
});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  // if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  // }

  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});