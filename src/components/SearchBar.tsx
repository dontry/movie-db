import React, { useState } from "react";
import styled from "styled-components";

const TextInput = styled.input`
  height: 1em;
  padding: 5px;
  width: 200px;
  border-radius: 2px;
`;

const Label = styled.label`
  margin-right: 1rem;
  font-weight: bold;
`

interface Props {
  onSubmit(query: string): void;
}

export const SearchBar = ({ onSubmit }: Props) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSubmit(query);
      setQuery("");
    }
  };

  return (<><Label htmlFor="search-bar">Search:</Label><TextInput id="search-bar" onChange={handleChange} onKeyPress={handleKeyPress} /></>);
};
