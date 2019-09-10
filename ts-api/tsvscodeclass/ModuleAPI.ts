
import { Request, Response, NextFunction, Router } from "express";
import { I$safeitemname$DataProvider } from "./$safeitemname$Interfaces";
import { $safeitemname$DataProvider } from "./$safeitemname$DataProvider";
//import { Mock$safeitemname$Connector } from "./Mock/Mock$safeitemname$Connector";

export class $safeitemname$API {

	dataProvider: I$safeitemname$DataProvider

    constructor(private router: Router, dataProvider: I$safeitemname$DataProvider = $safeitemname$DataProvider) { 
		this.dataProvider = dataProvider;
	}

    attach() {
        this.router.get("/$safeitemname$/:id", (req, res, next) => this.$safeitemname$(req, res, next));
	}
	
	prepareForTests() {
		//this.dataProvider.dataConnector = Mock$safeitemname$Connector;
	}

    private async $safeitemname$(req: Request, res: Response, _next: NextFunction) {
		let id = req.params.id;
		let result = await this.dataProvider.$safeitemname$(id);
		if (result != null) {
			res.send(result);
		} else {
			res.status(404);
			res.send({ error: '$safeitemname$ not found' });
		}
    }
}