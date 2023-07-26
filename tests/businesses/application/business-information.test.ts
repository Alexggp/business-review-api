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

const mockedBusinessRepository: jest.Mocked<BusinessRepository> = {
  getById: jest.fn().mockImplementation(() => mockedBusinessRepositoryResponse),
};

const mockedReviewRepositoryResponse = [
  { rating: 2 },
  { rating: 4 },
  { rating: 5 },
];

const mockedReviewRepository: jest.Mocked<ReviewRepository> = {
  getByBussinesId: jest
    .fn()
    .mockImplementation(() => mockedReviewRepositoryResponse),
  createNewReview: jest.fn(),
};
const mockedLogger: jest.Mocked<Logger> = {
  error: jest.fn(),
  info: jest.fn(),
};

describe("BusinessInformation", () => {
  const businessInfrmation = new BusinessInformation(
    mockedBusinessRepository,
    mockedReviewRepository,
    mockedLogger
  );

  test("getting business by id", async () => {
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

  test("business without reviews", async () => {
    mockedReviewRepository.getByBussinesId = jest
      .fn()
      .mockImplementation(() => []);

    const business = await businessInfrmation.getBussinesById(
      "64c0474167a03562d0baa7db"
    );
    expect(mockedBusinessRepository.getById).toBeCalled();
    expect(mockedReviewRepository.getByBussinesId).toBeCalled();
    expect(business).not.toBe(null);
    expect(business?.id).toBe("64c0474167a03562d0baa7db");
    expect(business?.numberOfReviews).toBe(0);
  });

  test("business do not exists", async () => {
    mockedBusinessRepository.getById = jest
      .fn()
      .mockImplementationOnce(() => null);

    const business = await businessInfrmation.getBussinesById(
      "64c0474167a03562d0baa7db"
    );
    expect(mockedBusinessRepository.getById).toBeCalled();
    expect(business).toBe(null);
  });
});
