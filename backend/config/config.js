const PORT = process.env.PORT || 4000;

const dbConnect = process.env.MONGO_URL;

module.exports = { PORT, dbConnect };
