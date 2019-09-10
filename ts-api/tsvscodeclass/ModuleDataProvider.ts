import { I$safeitemname$DataProvider, I$safeitemname$DataHandler, I$safeitemname$Connector } from "./$safeitemname$Interfaces";
import { $safeitemname$DataHandler } from "./$safeitemname$DataHandler";
import { $safeitemname$Connector } from "./$safeitemname$Connector";
import { $safeitemname$ } from "./$safeitemname$Models";

var dataHandler: I$safeitemname$DataHandler = $safeitemname$DataHandler;
var connector: I$safeitemname$Connector = $safeitemname$Connector;

export const $safeitemname$DataProvider: I$safeitemname$DataProvider =  {

	async $safeitemname$(id: string): Promise<$safeitemname$ | null> {
		let item = await connector.$safeitemname$(id);
		return await dataHandler.$safeitemname$(id, item);
	},

	get dataHandler(): I$safeitemname$DataHandler { return dataHandler; },
	set dataHandler(newValue: I$safeitemname$DataHandler) { dataHandler = newValue; },
	get dataConnector(): I$safeitemname$Connector { return connector; },
	set dataConnector(newValue: I$safeitemname$Connector) { connector = newValue; }
}
