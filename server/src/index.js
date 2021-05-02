const cors = require("cors");
const express = require("express");
const passport = require("passport");

const connectToDatabase = require("./database");
const passportConfiguration = require("../config/auth/passport");
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

connectToDatabase();

passportConfiguration(passport, "google");
app.use(passport.initialize());

app.use("/api", router);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server is up and running on port ${port}`);
});
