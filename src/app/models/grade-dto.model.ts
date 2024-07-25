import { SubjectDTO } from "./subject-dto.model";

export interface GradesDTO {
    value: number;
    subject: SubjectDTO;
    createOn: string;
}
