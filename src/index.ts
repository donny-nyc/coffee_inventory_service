import express, {Request, Response} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import expressWinston from 'express-winston'
import winston from 'winston'
import { baseRouter } from './routes/base'
import sequelizeConnection from '../config/db'

const app = express();

app.use(cors());

app.use(express.urlencoded({extended: true}));

app.use(expressWinston.logger({
	transports: [
		new winston.transports.Console()
	],
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.json()
	)
}));

app.use(expressWinston.errorLogger({
	transports: [
		new winston.transports.Console()
	],
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.json()
	)
}));

// parse requests of content-type application/json
app.use(express.json());

app.use("/api", baseRouter);

app.get("/", (req: Request, res: Response) => {
	res.status(200).json("Welcome to the Inventory Manager");
});

sequelizeConnection.authenticate()
.then(() => {
	console.log('Postgre connection successful');
}).catch((error: any) => {
	console.error(error.message);
});

sequelizeConnection.sync()
.then(() => {
	console.log('successfully synchronized the database');
}).catch((error: any) => {
	console.error(error.message);
});

const PORT = 3000;

try {
	app.listen(PORT, () => {
		console.log(`Express listening on ${PORT}`);
	});
} catch (error: any) {
	console.log(`Error occured: ${error.message}`);
}

module.exports = app;
