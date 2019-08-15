import React from "react";
import styled from "styled-components";

const TextInput = styled.input`
  padding: 5px;
  width: 200px;
  border-radius: 2px;
`;

const Label = styled.label`
  margin-right: 1rem;
  font-weight: bold;
`;

interface Props {
  query: string;
  onChange(query: string): void;
  onSubmit(query: string): void;
}

export const SearchBar = ({ query = "", onChange, onSubmit }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    const _query = query.trim();
    if (e.key === "Enter" && _query !== "") {
      onSubmit(_query);
    }
  };

  return (
    <>
      <Label htmlFor="search-bar">Search:</Label>
      <TextInput id="search-bar" onChange={handleChange} onKeyPress={handleKeyPress} />
    </>
  );
};
