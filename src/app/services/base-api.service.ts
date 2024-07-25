import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

export abstract class BaseApiService {
  constructor(public apiControllerPath: string, protected http: HttpClient) {}

  private getApiUrl(): string {
    return environment.apiUrl;
  }
  private url(endPath: string): string {
    return `${this.getApiUrl()}/${this.apiControllerPath}/${endPath}`;
  }

  public get<T>(endPath: string, params?: HttpParams): Observable<T> {
    if (params) {
      return this.http.get<T>(this.url(endPath), { params });
    }
    return this.http.get<T>(this.url(endPath));
  }

  public post<T>(endPath: string, body: any): Observable<T> {
    return this.http.post<T>(this.url(endPath), body);
  }

  public put<T>(endPath: string, body: any): Observable<T> {
    return this.http.put<T>(this.url(endPath), body);
  }

  public delete<T>(id: number): Observable<T> {
    return this.http.delete<T>(
      `${this.getApiUrl()}/${this.apiControllerPath}/${id}`
    );
  }
}
