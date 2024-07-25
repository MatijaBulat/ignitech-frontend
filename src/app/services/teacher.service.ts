import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeacherDTO } from '../models/teacher-dto.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends BaseApiService {
  constructor(http: HttpClient) {
    super('Teacher', http);
  }

  public getAllTeachers(): Observable<TeacherDTO> {
    return this.get<TeacherDTO>('GetAllTeachers');
  }

  public getTeacherByStudentAndSubjectId(studentId: number, subjectId: number): Observable<TeacherDTO> {
    let params: HttpParams = new HttpParams()
      .set('studentId', studentId.toString())
      .set('subjectId', subjectId.toString());

    return this.get<TeacherDTO>('GetTeacherByStudentAndSubjectId', params);
  }
}
