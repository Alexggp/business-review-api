import { logger } from "../../shared/infrastructure/dependencies";
import { BusinessInformation } from "../application/buesiness-information";
import { MongoBusinessRepository } from "./business-repository/mongo-business-repository";
import { BusinessController } from "./rest-api/business-controller";

const businessRepository = new MongoBusinessRepository();
const businessInformation = new BusinessInformation(businessRepository, logger);

export const businessController = new BusinessController(businessInformation);
