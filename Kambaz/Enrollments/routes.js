import EnrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app, db) {
    const dao = EnrollmentsDao(db);

    const findAllEnrollments = (req, res) => {
        const enrollments = dao.findAllEnrollments();
        res.json(enrollments);
    };

    const findEnrollmentsForUser = (req, res) => {
        let { userId } = req.params;
        if (userId === "current") {
            const currentUser = req.session["currentUser"];
            userId = currentUser._id;
        }
        const enrollments = dao.findEnrollmentsForUser(userId);
        res.json(enrollments);
    };

    const enrollUserInCourse = (req, res) => {
        let { userId, courseId } = req.body;

        if (userId === "current") {
            const currentUser = req.session["currentUser"];
            userId = currentUser._id;
        }

        const enrollment = dao.enrollUserInCourse(userId, courseId);
        res.json(enrollment);
    };

    const unenrollUserFromCourse = (req, res) => {
        let { userId, courseId } = req.body;

        if (userId === "current") {
            const currentUser = req.session["currentUser"];
            userId = currentUser._id;
        }

        const status = dao.unenrollUserFromCourse(userId, courseId);
        res.json(status);
    };
    app.get("/api/enrollments", findAllEnrollments);
    app.get("/api/users/:userId/enrollments", findEnrollmentsForUser);
    app.post("/api/enrollments", enrollUserInCourse);
    app.delete("/api/enrollments", unenrollUserFromCourse);
}
