import { InMemoryBusinessRepository } from "../../../../src/businesses/infrastructure/business-repository/in-memory-business-repository";

describe("InMemoryBusinessRepository", () => {
  let repository: InMemoryBusinessRepository;

  beforeEach(() => {
    repository = new InMemoryBusinessRepository();
  });

  describe("getById", () => {
    it("should return the business when exists a business with that id", async () => {
      const existingBusinessId = "1";
      const business = await repository.getById(existingBusinessId);
      expect(business).not.toBeNull();
      expect(business?.id).toEqual(existingBusinessId);
    });

    it("should return null when the Business does not exist", async () => {
      const nonExistingBusinessId = "10";
      expect(await repository.getById(nonExistingBusinessId)).toBeNull();
    });
  });
});
