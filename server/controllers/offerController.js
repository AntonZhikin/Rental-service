import { Offer } from "../models/offer.js";

export async function getAllOffers(req, res, next) {
	try {
		const offers = await Offer.findAll();
		res.send(offers);
	} catch (e) {
		console.log("oshibka", e);
	}
}
