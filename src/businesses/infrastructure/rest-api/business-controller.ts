import { Request, Response } from "express";

import { BusinessInformation } from "../../application/business-information";

export class BusinessController {
  constructor(private readonly businessInformation: BusinessInformation) {}

  async getBussinesInformation(req: Request, res: Response) {
    const { id: businessId } = req.params;
    const business = await this.businessInformation.getBussinesById(businessId);

    if (!business) {
      return res.status(404).send();
    }

    res.status(200).send(business);
  }
}
