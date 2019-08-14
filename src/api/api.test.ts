import { ClientAPI, httpClient } from ".";


// const mock = new MockAdapter(httpClient)


describe("authentication", () => {
    const clientAPI = new ClientAPI(process.env.REACT_APP_API_KEY!);


    afterAll(() => {
        jest.clearAllMocks();
    })

    test("createRequestToken", async () => {
        await clientAPI.createRequestToken();
        expect(clientAPI.getRequestToken()).toBeTruthy();
    })

    test("createSessionID", async () => {
        // @ts-ignore
        clientAPI.post = jest.fn((url: string, payload: any) => Promise.resolve({
            data: {
                success: true,
                session_id: "session_id"
            }
        }))
        await clientAPI.createSessionID();
        expect(clientAPI.getSessionID()).toBe("session_id");
    })
})