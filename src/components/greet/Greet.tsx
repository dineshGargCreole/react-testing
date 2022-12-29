import React from "react";

interface GreetProps {
  name?: string;
}

export const Greet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>;
};
