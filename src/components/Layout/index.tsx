import React from "react";
import { LayoutContainer } from "./styles";
type LayoutProps = {
  children: any;
};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <div className="content">{children}</div>

      <div className="footer"></div>
    </LayoutContainer>
  );
};
