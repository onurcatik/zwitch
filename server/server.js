import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import { validateEnv } from "./config/index.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

validateEnv(); // Validate environment variables

try {
    validateEnv();
    console.log('Environment variables are valid.');
} catch (error) {
    console.error('Validation error:', error.message);
}

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/", routes);

app.use(errorHandler); // Error handling middleware

app.get('/test', (req, res, next) => {
    // Burada bir hata oluşturabiliriz, örneğin:
    const err = new Error('Bu bir test hatasıdır.');
    next(err); // Hata, errorHandler middleware'ine iletilir.
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

server.on('error', (error) => {
  console.error('Server error:', error);
});


