import { Button, ButtonProps, Typography } from "@mui/material";
import React from "react";
import { CbuttonContainer } from "./styles";

type CButtonProps = {
  text: string;
  onClick?: any;
};
export const CButton: React.FC<CButtonProps> = ({ text, onClick }) => {
  return (
    <CbuttonContainer>
      <Typography
        fontWeight={600}
        fontSize={16}
        color={"rgba(0, 80, 30, 1)"}
        style={{
          backgroundColor: "rgba(171, 254, 44, 1)",
          width: "140px",
          padding: "10px",
          textAlign: "center",
          borderRadius: "25px",
        }}
        onClick={onClick}
      >
        {text}
      </Typography>
    </CbuttonContainer>
  );
};
