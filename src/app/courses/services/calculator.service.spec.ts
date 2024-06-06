import { CalculatorService } from "./calculator.service";
import { TestBed } from "@angular/core/testing";
import { LoggerService } from "./logger.service";

describe("Calculator Service", () => {
  let calculatorService: CalculatorService, logger: any;
  beforeEach(() => {
    logger = jasmine.createSpyObj(LoggerService, ["log"]);
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CalculatorService,
        {
          provide: LoggerService,
          useValue: logger,
        },
      ],
    });

    calculatorService = TestBed.inject(CalculatorService);
  });

  it("Should sum two numbers", () => {
    const result = calculatorService.add(2, 2);
    expect(result).toBe(4);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it("Should subtract two numbers", () => {
    const result = calculatorService.subtract(2, 2);
    expect(result).toBe(0);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });
});
