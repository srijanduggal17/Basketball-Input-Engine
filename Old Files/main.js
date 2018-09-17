//This file creates some basic window properties and initializes electron. It also indicates the main html file.

const {app, BrowserWindow} = require('electron')
let win

//These two lines load the appstate file. This is used to determine whether the app has been opened or not in order to determine the html sequence.
var fs = require('file-system');
var appstate = JSON.parse(fs.readFileSync("Data Storage/appstate.JSON", 'utf8'));

//The rest of this code is default and comes with electron. Idk what most of it means but there are a few important lines.
function createWindow(){
	win = new BrowserWindow({width: 800, height: 600, minHeight: 500, minWidth: 400})

//The line below tells the window to maximize on startup	
	win.maximize();

/*The block below is for determining the html sequence. 
If it is the user's first time opening the app, it will load the welcome page and then ask to create a team,
input staff and players, and input practices/games. 
If it is not the first time, it will load the home page.
*/
	if (appstate["State"] === "First Time") {
		win.loadURL(`file://${__dirname}/index.html`);
		appstate["State"] = "Not First Time";
		
		fs.writeFile("Data Storage/appstate.JSON", JSON.stringify(appstate, null, "\t"), function (err) {
			if (err != undefined) {
				alert(err.message,"State Save error")
			}
		});
	}
	else {
		win.loadURL(`file://${__dirname}/home.html`);
	}


	win.on('closed', () => {
		win=null
	});
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (win === null) {
		createWindow()
	}
})

const {ipcMain} = require('electron')

ipcMain.on('main_comunications', (event, arg) => {
	event.returnValue = arg;
})