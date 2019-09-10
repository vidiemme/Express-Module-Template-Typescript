import { I$safeitemname$Connector } from "./$safeitemname$Interfaces";
import { $safeitemname$ } from "./$safeitemname$Models";

export const $safeitemname$Connector: I$safeitemname$Connector = {

	async $safeitemname$(id: string): Promise<$safeitemname$ | null> {
		return new $safeitemname$(id, "Name", "Surname");
	}
}