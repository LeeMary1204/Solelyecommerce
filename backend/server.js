const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});



// Connecting to database
connectDatabase();

// Connecting to cloudinary
cloudinary.config({
    cloud_name: 'dwitmt8k7',
    api_key: '124165368453328',
    api_secret: 'VCoTpNH7n8NyDyZv-QDFaTMUZOY'
});

const server = app.listen(8777, () => {
    console.log(`Server is working on http://localhost:8777`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});