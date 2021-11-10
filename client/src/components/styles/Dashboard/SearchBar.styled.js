import styled from 'styled-components'

export const SearchBar = styled.input`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  line-height: 1;
  padding-left: 1rem;
  width: 100%;

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`