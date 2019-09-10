import { $safeitemname$ } from "./$safeitemname$Models";

export interface I$safeitemname$Connector {
	$safeitemname$(id: string): Promise<$safeitemname$ | null>;
}

export interface I$safeitemname$DataHandler {
	$safeitemname$(id: string, item: $safeitemname$ | null): Promise<$safeitemname$ | null>;
}

export interface I$safeitemname$DataProvider {
	$safeitemname$(id: string): Promise<$safeitemname$ | null>;
	dataHandler: I$safeitemname$DataHandler;
	dataConnector: I$safeitemname$Connector;
}