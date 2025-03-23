import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";


describe("SearchForm Component", () => {
  const SearchFormMock = (initialSearchQuery: string, onSearch: jest.Mock) => {
    render(
      <SearchForm initialSearchQuery={initialSearchQuery} onSearch={onSearch} />
    );
  };
  
  it("should render an input with initial value", () => {
    const initialSearchQueryMock = "Initial search value";
    const onSearchMock = jest.fn();

    SearchFormMock(initialSearchQueryMock, onSearchMock);

    expect(
      screen.getByDisplayValue(initialSearchQueryMock)
    ).toBeInTheDocument();
  });

  it("should call onSearch with the proper value on typing and clicking search", () => {
    const initialSearchQueryMock = "Initial search value";
    const newSearchQueryMock = "New search value";
    const onSearchMock = jest.fn();

    SearchFormMock(initialSearchQueryMock, onSearchMock);

    const inputElement = screen.getByDisplayValue(initialSearchQueryMock);
    const searchButton = screen.getByText("Search");

    fireEvent.change(inputElement, { target: { value: newSearchQueryMock } });

    fireEvent.click(searchButton);

    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith(newSearchQueryMock);
  });

  it("should call onSearch with the proper value when pressing Enter", () => {
    const initialSearchQueryMock = "Initial search value";
    const newSearchQueryMock = "New search value";
    const onSearchMock = jest.fn();
    SearchFormMock(initialSearchQueryMock, onSearchMock);
    const inputElement = screen.getByDisplayValue(initialSearchQueryMock);
    const searchButton = screen.getByText("Search");

    fireEvent.keyDown(inputElement, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
    });
    fireEvent.change(inputElement, { target: { value: newSearchQueryMock } });
    fireEvent.click(searchButton);

    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith(newSearchQueryMock);
  });
});
