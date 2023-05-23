import { describe, vi } from "vitest";
import { podUploader } from "./index";
import { IProps } from "./types";
import { test as vitest } from "vitest";

describe("whatever", () => {
  vitest("upload", async () => {
    const reult = await podUploader({
      user_group_hash: "sad",
      folder_hash: "asd",
      access_token: "asd",
    });

    const mock = vi.fn();
    mock("checker");
    // mock.mock.calls[0] === ["checker"];
  });
});

const test = createTest<typeof podUploader>();

vitest(
  "returns data when access token is provided",
  async ({ expect, mock }: any) => {
    // Set up test data
    const user_group_hash = "user_group_hash";
    const folder_hash = "folder_hash";
    const access_token = "access_token";
    const expectedData = { response: "some data" };

    // Mock the fetch request
    const fetchMock = mock(global, "fetch", () =>
      Promise.resolve({
        json: () => expectedData,
      })
    );

    // Call the function and expect the correct data to be returned
    const result = await podUploader({
      user_group_hash,
      folder_hash,
      access_token,
    } as IProps);

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining(user_group_hash),
      {
        headers: expect.objectContaining({
          Authorization: `Bearer ${access_token}`,
        }),
        method: "POST",
        body: expect.any(FormData),
      }
    );
    expect(result).toEqual(expectedData);
  }
);

vitest(
  "returns error message when access token is not provided",
  async ({ expect }: any) => {
    // Set up test data
    const user_group_hash = "user_group_hash";
    const folder_hash = "folder_hash";
    const access_token = "";

    // Call the function and expect an error message to be returned
    const result = await podUploader({
      user_group_hash,
      folder_hash,
      access_token,
    } as IProps);

    expect(result).toEqual({ errorMessage: "Access denied" });
  }
);
function createTest<T>() {
  throw new Error("Function not implemented.");
}
