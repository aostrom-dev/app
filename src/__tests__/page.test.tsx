import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("Home", () => {
  render(<Home />);

  const h1 = screen.getByRole("heading");

  expect(h1).toBeDefined();
  expect(h1.textContent).toContain("red");
});
