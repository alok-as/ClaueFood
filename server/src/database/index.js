const mongoose = require("mongoose");
const connectionURI = process.env.CONNECTION_URI;

const connectToDatabase = async () => {
	try {
		const conn = await mongoose.connect(connectionURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log("Database is connected to host", conn.connection.host);
	} catch {
		console.log("Error connection to database", error.message);
		process.exit(1);
	}
};

module.exports = connectToDatabase;
