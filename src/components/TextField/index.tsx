import { TextField, TextFieldProps, Typography } from "@mui/material";
import React from "react";
import { InputTextFieldContainer, TextFieldContainer } from "./style";
type InputTextFieldProps = {
  value?: number | string;
  label: string;
  icon?: any;
  usedFor?: string;
};
export const InputTextField: React.FC<InputTextFieldProps & TextFieldProps> = ({
  value,
  label,
  icon,
  usedFor = "input",
  ...rest
}) => {
  if (usedFor === "input")
    return (
      <InputTextFieldContainer
        style={{
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
      >
        <Typography
          fontWeight={600}
          fontSize={12}
          color={"rgba(122, 122, 122, 1)"}
        >
          {label}
        </Typography>
        <div className="text-field">
          {
            <>
              <TextField
                inputProps={{
                  style: {
                    fontSize: 24,
                    fontWeight: 600,
                    padding: 0,
                    color: "rgba(0, 80, 30, 1)",
                  },
                }}
                value={value}
                {...rest}
                className="text-field"
                sx={{
                  "& fieldset": { border: "none", height: "20px" },
                }}
              />
              {icon}
            </>
          }
        </div>
      </InputTextFieldContainer>
    );
  else
    return (
      <TextFieldContainer style={{ backgroundColor: "rgba(0, 107, 40, 1)" }}>
        <div className="sub-title">{label}</div>
        <div className="content">{value}</div>
      </TextFieldContainer>
    );
};
