export interface courseObject {
  courseCode: string;
  title: string;
  weight: string;
  mark: string;
  grade: string;
  courseAvg: string;
  opt: string;
}
export type coursesType = courseObject[];
export type sessionType = {
  courses: coursesType;
  year: number;
  season: string;
};

// OOP Design

import { Course } from './lib';
export type Courses = Course[];

export type ColHeaderInfo = {
  colNames: string[];
  colIndices: number[];
};
// export type SessionGpaHdr = {
//   'Sessional GPA'?: number;
//   'Annual GPA'?: number;
//   'Cumulative GPA '?: number;
//   Status?: string;
// };
export type Letter2NumGpaMap = { [key: string]: number };
export type Num2LetterGpaMap = { [key: string]: string }; // object keys must be string
export type SessionGpaHdr = { [key: string]: string | number };