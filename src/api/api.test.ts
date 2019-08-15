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
        window.localStorage.getItem = jest.fn((key: string) => "session_id")
        await clientAPI.createSessionID();
        expect(clientAPI.getSessionID()).toBe("session_id");
    })
})

describe("query", () => {
    const clientAPI = new ClientAPI(process.env.REACT_APP_API_KEY!);
    test("searchTvShows with query='breaking bad' page=1", async () => {
        const res = await clientAPI.searchTvShows("breaking bad", 1);
        expect(res.page).toBe(1);
        expect(res.total_pages).toBe(1);
        expect(res.total_results).toBe(1)
        expect(res.results.length).toBe(1)
        expect(res.results[0].original_name).toBe("Breaking Bad");
    })

    test("searchTvShows with query='sherlock' page=1", async () => {
        const res = await clientAPI.searchTvShows("sherlock", 1);
        expect(res.page).toBe(1);
        expect(res.total_pages).toBe(2);
        expect(res.total_results).toBe(29)
        expect(res.results.length).toBe(20)
    })
})