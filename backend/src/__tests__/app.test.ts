import supertest from 'supertest'
import createServer from '../utils/server.ts'

const app = createServer();

describe('POST /api/links', () => {
    describe("Link is correct", () => {
        test("Link is correct and we will recive a shorten version", async () => {
            await supertest(app).post("/api/links").send({ link: "https://github.com/vbondarets" }).expect(200)
            // const response = await request(app).post("/api/links").send({
            //     link: "https://github.com/vbondarets"
            // });
            // expect(response.statusCode).toBe(200);
            // expect(typeof response.data.newLink).toBe('string');
        })

    })
    describe("Link is incorrect", () => {
        test("Link is correct and we will recive an error mesage", async () => {
            // const response = await request(app).post("/api/links").send({
            //     link: "github"
            // });
            // expect(response.statusCode).toBe(409);
        })
    })
})