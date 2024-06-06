import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CoursesService } from "./courses.service";

describe("Courses service", () => {
  let coursesService: CoursesService, httpTest: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoursesService],
    });
    coursesService = TestBed.inject(CoursesService);
  });
});
