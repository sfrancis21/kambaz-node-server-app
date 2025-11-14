import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao(db) {
    function enrollUserInCourse(userId, courseId) {
        const { enrollments } = db;
        const exists = enrollments.find(
            (e) => e.user === userId && e.course === courseId
        );
        if (!exists) {
            enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
        }
        return enrollments;

    }
    function unenrollUserFromCourse(userId, courseId) {
        const { enrollments } = db;
        db.enrollments = enrollments.filter(
            (e) => !(e.user === userId && e.course === courseId)
        );
        return db.enrollments;
    }
    function findEnrollmentsForUser(userId) {
        return db.enrollments.filter((e) => e.user === userId);
    }

    return { enrollUserInCourse, unenrollUserFromCourse, findEnrollmentsForUser };
}
