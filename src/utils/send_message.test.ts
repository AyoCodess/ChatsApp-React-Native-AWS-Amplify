import react, { useEffect, useState } from "react";

import { onSendMessage } from "./send_message";

describe("Send Message", () => {
  it("", () => {
    const result = onSendMessage("Hello World");

    expect(result).toEqual({});
  });
});
