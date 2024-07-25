import { SubjectDTO } from "./subject-dto.model";
import { TeacherDTO } from "./teacher-dto.model";

export interface StudentDTO {
    firstName: string;
    lastName: string;
    teacher: TeacherDTO;
    studentCode: string;
    subjects: SubjectDTO[];
}
