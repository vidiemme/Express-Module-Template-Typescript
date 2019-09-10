import { I$safeitemname$DataHandler } from "./$safeitemname$Interfaces";
import { $safeitemname$ } from "./$safeitemname$Models";

export const $safeitemname$DataHandler: I$safeitemname$DataHandler = {
	async $safeitemname$(id: string, item: $safeitemname$ | null): Promise<$safeitemname$ | null> {
		return item;
	}
}
