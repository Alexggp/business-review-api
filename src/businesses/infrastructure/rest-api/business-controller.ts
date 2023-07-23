import { Request, Response } from "express";

import { BusinessInformation } from "../../application/buesiness-information";

export class BusinessController {
  constructor(private readonly businessInformation: BusinessInformation) {}

  async sendBussinesInformation(req: Request, res: Response) {
    const { id: businessId } = req.params;
    const bussiness = await this.businessInformation.getBussinesById(
      businessId
    );
    res.status(200).send(bussiness);
  }
}
