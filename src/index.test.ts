import { describe, test, vi } from "vitest";
import { podUploader } from "./index";

describe("whatever", () => {
  test("upload", async () => {
    const reult = await podUploader({
      USER_GROUP_HASH: "sad",
      FOLDER_HASH: "asd",
      access_token: "asd",
    });

    const mock = vi.fn();
    mock("checker");
    // mock.mock.calls[0] === ["checker"];
  });
});
