import { I$safeitemname$DataHandler } from "../$safeitemname$Interfaces";
import { $safeitemname$ } from "../$safeitemname$Models";

export const Mock$safeitemname$DataHandler: I$safeitemname$DataHandler = {

	async $safeitemname$(id: string, item: $safeitemname$ | null): Promise<$safeitemname$ | null> {
		return null;
	}
}

console.log("[$safeitemname$API] Using mocked $safeitemname$sAPI $safeitemname$ Data Handler");