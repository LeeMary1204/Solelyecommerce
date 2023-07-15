const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// process.env.STRIPE_SECRET_KEY
const stripe = require("stripe")('teacher mary');

exports.processPayment = catchAsyncErrors(async(req, res, next) => {
    const myPayment = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "inr",
        metadata: {
            company: "Ecommerce",
        },
    });

    res.status(200)
        .json({ success: true, client_secret: myPayment.client_secret });
});

// process.env.STRIPE_API_KEY
exports.sendStripeApiKey = catchAsyncErrors(async(req, res, next) => {
    res.status(200).json({ stripeApiKey: 'teacher mary' });
});