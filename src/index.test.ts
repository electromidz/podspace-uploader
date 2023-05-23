import { describe, test, vi } from "vitest";
import { podUploader } from "./index";

describe("whatever", () => {
  test("upload", async () => {
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
