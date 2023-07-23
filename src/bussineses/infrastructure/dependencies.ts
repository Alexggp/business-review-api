import { logger } from "../../shared/infrastructure/dependencies";
import { BusinessInformation } from "../application/buesiness-information";
import { InMemoryBusinessRepository } from "./business-repository/in-memory-business-repository";
import { BusinessController } from "./rest-api/business-controller";

const businessRepository = new InMemoryBusinessRepository();
const welcomeEmailSender = new BusinessInformation(businessRepository, logger);

export const businessController = new BusinessController(welcomeEmailSender);
