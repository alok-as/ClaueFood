const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const connectToDatabase = require("./database");
const { errorHandler, notFound } = require("./middlewares/error");
const router = require("./routers");

const app = express();
const port = process.env.PORT || 3001;

app.use(
	cors({
		credentials: true,
	})
);
app.use(express.json());
app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms")
);

connectToDatabase();

app.use("/api", router);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server is up and running on port ${port}`);
});
