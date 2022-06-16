import express, { Request, Response } from 'express';
import { Asset } from '../models/asset';
import bodyParser from 'body-parser';

const router = express.Router();

const jsonParser = bodyParser.json();

router.options('/')

router.get('/', [], async (req: Request, res: Response): Promise<Response>  => {
	try {
		const assets = await Asset.findAll();
		return res.status(200).send(assets);
	} catch (err: any) {
		return res.status(500).send({
			message: err.message
		});
	};
});

export { router as assetRouter }
