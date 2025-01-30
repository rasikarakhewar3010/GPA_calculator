import Feedback from "../models/Feedback.js";

export const submitFeedback = async (req, res) => {
    try {
        const { name, email, message, uiRating, uxRating, featuresRating, improvements } = req.body;

        const newFeedback = new Feedback({
            name,
            email,
            message,
            uiRating,
            uxRating,
            featuresRating,
            improvements,
        });

        await newFeedback.save();
        res.status(201).json({ message: "Feedback submitted successfully!" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while submitting feedback." });
    }
};
