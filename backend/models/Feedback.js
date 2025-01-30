import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    uiRating: { type: Number, required: true },
    uxRating: { type: Number, required: true },
    featuresRating: { type: Number, required: true },
    improvements: { type: String },
});

export default mongoose.model("Feedback", feedbackSchema);
