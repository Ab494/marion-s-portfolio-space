import { createElement } from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ExperienceSection from "../components/ExperienceSection";

describe("experience section", () => {
  it("renders without crashing", () => {
    render(createElement(ExperienceSection));
    expect(screen.getByText(/experience/i)).toBeInTheDocument();
  });
});
