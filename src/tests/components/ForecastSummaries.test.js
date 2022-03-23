import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1111111,
      description: "stub description 1",
      icon: "781",
      temperature: {
        min: 12,
        max: 22,
      },
    },
    {
      date: 2222222,
      description: "stub description 2",
      icon: "762",
      temperature: {
        min: 15,
        max: 25,
      },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct quantity of ForecastSummary components", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps} />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
