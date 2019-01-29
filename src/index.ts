import { BearTS } from './BearTS';
import * as dotenv from 'dotenv';

dotenv.config();

const token: string = String(process.env.BEAR_TOKEN);

const bear: BearTS = new BearTS();
bear.start(token);