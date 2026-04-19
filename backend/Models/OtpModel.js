const mongoose = require("mongoose");
const { OtpSchema } = require("../schemas/OtpSchema");

const OtpModel = mongoose.model("Otp", OtpSchema);

module.exports = { OtpModel };
