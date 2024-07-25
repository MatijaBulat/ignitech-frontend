import { StudentDTO } from "./student-dto.model";

export interface TeacherDTO {
    id?: number;
    firstName: string;
    lastName: string;
    teacherCode: string;
    students: StudentDTO[];
}
