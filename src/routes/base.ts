import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';

const router = express.Router();

// const bodyParser = bodyParser.json();

router.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({message: "success"});
});

export { router as baseRouter }
