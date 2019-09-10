var db = [
]

import { I$safeitemname$Connector } from "../$safeitemname$Interfaces";
import { $safeitemname$ } from "../$safeitemname$Models";

export const Mock$safeitemname$Connector: I$safeitemname$Connector = {

	async $safeitemname$(id: string): Promise<$safeitemname$ | null> {
		return null;
	}
}

console.log("[$safeitemname$API] Using mocked $safeitemname$sAPI $safeitemname$ Connector");