import React from "react";
import styled, { css } from "styled-components";
import { Form, InputGroup } from "react-bootstrap";
import {
  color,
  background,
  layout,
  border,
  space,
  position,
  flexbox,
  typography,
} from "styled-system";

const InputDefault = (props) => {
  const { className, placeholder, onChange, name } = props;

  return (
    <InputGroup>
      <Form.Control
        className={className}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      <InputGroup.Append>
        <InputGroup.Text>
          <img src="/ic_Search.png" alt="icon search" />
        </InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  );
};

export const Input = styled(InputDefault)`
  ${typography}
  ${flexbox}
  ${border}
  ${layout}
  ${color}
  ${background}
  ${space}
  ${position}
`;
