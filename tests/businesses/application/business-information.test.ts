import { BusinessInformation } from "../../../src/businesses/application/business-information";
import { BusinessRepository } from "../../../src/businesses/domain/business-repository";
import { ReviewRepository } from "../../../src/reviews/domain/review-repository";
import { Logger } from "../../../src/shared/domain/logger";

const mockedBusinessRepositoryResponse = {
  id: "64c0474167a03562d0baa7db",
  name: "Churros tres hermanos",
  address: "www.treshermanoschurreria.com",
  phone: 90812321,
  email: "churros3hermanos@mail.com",
};

const mockedReviewRepositoryResponse = [
  { rating: 2 },
  { rating: 4 },
  { rating: 5 },
];

describe("BusinessInformation", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockedBusinessRepository: jest.Mocked<BusinessRepository> = {
    getById: jest.fn().mockImplementation(() => null),
  };

  const mockedReviewRepository: jest.Mocked<ReviewRepository> = {
    getByBussinesId: jest.fn().mockImplementation(() => []),
    createNewReview: jest.fn(),
  };
  const mockedLogger: jest.Mocked<Logger> = {
    error: jest.fn(),
    info: jest.fn(),
  };

  const businessInfrmation = new BusinessInformation(
    mockedBusinessRepository,
    mockedReviewRepository,
    mockedLogger
  );

  test("business do not exists", async () => {
    const business = await businessInfrmation.getBussinesById(
      "64c0474167a03562d0baa7db"
    );
    expect(mockedBusinessRepository.getById).toBeCalled();
    expect(mockedReviewRepository.getByBussinesId).not.toBeCalled();
    expect(business).toBe(null);
  });

  test("business without reviews", async () => {
    mockedBusinessRepository.getById = jest
      .fn()
      .mockImplementationOnce(() => mockedBusinessRepositoryResponse);

    const business = await businessInfrmation.getBussinesById(
      "64c0474167a03562d0baa7db"
    );
    expect(mockedBusinessRepository.getById).toBeCalled();
    expect(mockedReviewRepository.getByBussinesId).toBeCalled();
    expect(business).not.toBe(null);
    expect(business?.id).toBe("64c0474167a03562d0baa7db");
    expect(business?.numberOfReviews).toBe(0);
    expect(business?.averageRating).toBe(undefined);
  });

  test("getting business by id full feature", async () => {
    mockedBusinessRepository.getById = jest
      .fn()
      .mockImplementationOnce(() => mockedBusinessRepositoryResponse);

    mockedReviewRepository.getByBussinesId = jest
      .fn()
      .mockImplementationOnce(() => mockedReviewRepositoryResponse);

    const business = await businessInfrmation.getBussinesById(
      "64c0474167a03562d0baa7db"
    );
    expect(mockedBusinessRepository.getById).toBeCalled();
    expect(mockedReviewRepository.getByBussinesId).toBeCalled();
    expect(business).not.toBe(null);
    expect(business?.id).toBe("64c0474167a03562d0baa7db");
    expect(business?.numberOfReviews).toBe(3);
    expect(business?.averageRating).toBe("3.7");
  });
});
