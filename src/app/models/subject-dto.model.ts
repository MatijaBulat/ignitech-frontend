import { GradesDTO } from "./grade-dto.model";
import { StudentDTO } from "./student-dto.model";
import { TeacherDTO } from "./teacher-dto.model";

export interface SubjectDTO {
    id?: number;
    name: string;
    studentId?: StudentDTO;
    teacherId?: TeacherDTO;
    grades: GradesDTO[];
}