import { MongoReviewResository } from "../../reviews/infrastructure/review-repository/mongo-review-repository";
import { logger } from "../../shared/infrastructure/dependencies";
import { BusinessInformation } from "../application/buesiness-information";
import { MongoBusinessRepository } from "./business-repository/mongo-business-repository";
import { BusinessController } from "./rest-api/business-controller";

const businessRepository = new MongoBusinessRepository();
const reviewsRepository = new MongoReviewResository();

const businessInformation = new BusinessInformation(
  businessRepository,
  reviewsRepository,
  logger
);

export const businessController = new BusinessController(businessInformation);
