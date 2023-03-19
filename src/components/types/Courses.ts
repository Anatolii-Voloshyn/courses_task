export interface Course {
  id: string;
  title: string;
  tags: string[];
  launchDate: string;
  description: string;
  duration: number;
  lessonsCount: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: Meta;
};

export interface Meta {
  slug: string;
  skills?: string[];
  courseVideoPreview?: CourseVideoPreview;
  fullCourseProductId?: string;
  fullCourseProductFamily?: string;
}

export interface CourseVideoPreview {
  link: string;
  duration: number;
  previewImageLink: string;
}

export interface AllLesson {
  id: string
  title: string
  tags: string[]
  launchDate: string
  status: "unlocked" | "locked"
  description: string
  duration: number
  previewImageLink: string
  rating: number
  meta: Meta
  lessons: Lesson[]
  containsLockedLessons: boolean
}

export interface Lesson {
  id: string;
  title: string;
  duration: number;
  order: number;
  type: string;
  status: string;
  link: string;
  previewImageLink: string;
}
