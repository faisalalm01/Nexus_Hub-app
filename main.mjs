import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import isDev from 'electron-is-dev';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });
  // Memuat file HTML dari build React
    win.loadURL(`file://${path.join(__dirname, 'build', 'index.html')}`);
    win.loadURL(
      isDev
        ? 'http://localhost:3000'
        : `file://${path.join(__dirname, 'build', 'index.html')}`
    );
  // win.loadFile(path.join(__dirname, 'build', 'index.html'));
  // win.webContents.openDevTools(); // untuk debug
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
