import * as dotenv from "dotenv";
import express from "express";
import sequelize from "./config/database";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => console.log(`fdsfg${PORT}`));
	} catch (e) {
		console.log(e);
	}
};
start();
