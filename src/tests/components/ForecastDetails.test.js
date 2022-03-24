import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 111111,
    humidity: 20,
    wind: {
      speed: 12,
      direction: "n",
    },
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders the correct date, temperature, wind and humidity props", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct values for props", () => {
    const { getByTestId } = render(<ForecastDetails forecast={validProps} />);
    expect(getByTestId("forecast-date")).toHaveClass("forecast-details_date");
    expect(getByTestId("forecast-humidity")).toHaveClass(
      "forecast-details_humidity"
    );
    expect(getByTestId("forecast-wind")).toHaveClass("forecast-details_wind");
    expect(getByTestId("forecast-temp-min")).toHaveClass(
      "forecast-details_min-temperature"
    );
    expect(getByTestId("forecast-temp-max")).toHaveClass(
      "forecast-details_max-temperature"
    );
  });
});
