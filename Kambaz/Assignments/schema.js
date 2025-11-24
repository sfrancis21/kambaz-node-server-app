import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
        _id: String,
        title: String,
        course: String,
        points: String,
        description: String,
        due_date: String,
        available_date: String,
    },
    { collection: "assignments" }
);
export default assignmentSchema;