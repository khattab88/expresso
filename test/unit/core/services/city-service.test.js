import CityService from "../../../../src/core/services/city-service";

const svc = new CityService();

test("should return 3 cities", async () => {
    const cities = await svc.getCities();

    expect(cities.length).toBe(3);
});
