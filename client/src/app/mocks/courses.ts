import { Course } from '../models/Course';

const mockCourseItemsPerPage = 3;

const mockCourseItem = new Course(1, 'Video Course 1. Name tag', new Date(2020, 11, 17), 88, 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.');

export function getMockCoursesData () {
    return new Promise((resolve) => {
        function executor() {
            const mockCoursesData = [];

            for (let i = 0; i < mockCourseItemsPerPage; i++) {
                mockCoursesData.push(mockCourseItem);
            }

            return mockCoursesData;
        }
        resolve(executor());
    });
}
