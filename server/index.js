import * as dotenv from "dotenv";
import express from "express";
import sequelize from "./config/database.js";
import { Offer } from "./models/offer.js";
import { Review } from "./models/review.js";
import { User } from "./models/user.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => console.log(`fdsfg${PORT}`));
		Offer;
		Review;
		User;
	} catch (e) {
		console.log(e);
	}
};
start();
