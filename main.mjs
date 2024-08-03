import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import isDev from 'electron-is-dev';

// Resolusi untuk __dirname dan __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });

  // Memuat file HTML dari build React
  win.loadURL(`file://${path.join(__dirname, 'dist', 'index.html')}`);
  // win.loadURL(
  //   isDev
  //     ? 'http://localhost:5173'
  //     : `file://${path.join(__dirname, 'div', 'index.html')}`
  // );
  // win.webContents.openDevTools(); // untuk debug

  // Uncomment untuk membuka DevTools
  // win.webContents.openDevTools();
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
