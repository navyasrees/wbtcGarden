import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { WalletConnectContainer, WalletContainer } from "./styles";
import detectEthereumProvider from "@metamask/detect-provider";
type ConnectWalletProps = {
  handleClose: () => void;
  handleConnect: () => void;
};
type WalletProps = {
  name: string;
  icon: any;
  isNew?: boolean;
  onClick?: any;
};
const Wallet: React.FC<WalletProps> = ({ icon, name, isNew, onClick }) => {
  return (
    <WalletContainer onClick={onClick}>
      {icon}
      <div className="wallet-name">
        <Typography
          fontWeight={600}
          fontSize={16}
          color={"rgba(255, 255, 255, 1)"}
        >
          {name}
        </Typography>
        {isNew && (
          <Typography
            fontSize={8}
            fontWeight={600}
            color={"rgba(0, 80, 30, 1)"}
            sx={{
              backgroundColor: "rgba(171, 254, 44, 1)",
              padding: "3px",
              borderRadius: "3px",
            }}
          >
            NEW
          </Typography>
        )}
      </div>
    </WalletContainer>
  );
};
export const ConnectWallet: React.FC<ConnectWalletProps> = ({
  handleClose,
  handleConnect,
}) => {
  return (
    <WalletConnectContainer>
      <div className="wallet-container-heading">
        <Typography
          fontWeight={600}
          fontSize={16}
          color={"rgba(229, 255, 190, 1)"}
        >
          Connect a wallet
        </Typography>
        <svg
          onClick={handleClose}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8182 2.46499L8.9695 7.31372L13.8182 12.1625L12.202 13.7787L7.35326 8.92996L2.50453 13.7787L0.888283 12.1625L5.73702 7.31372L0.888283 2.46499L2.50453 0.848744L7.35326 5.69748L12.202 0.848745L13.8182 2.46499Z"
            fill="#E5FFBE"
          />
        </svg>
      </div>
      <Wallet
        isNew={true}
        name="Catalog"
        icon={
          <div
            style={{
              backgroundColor: "rgba(92, 255, 213, 1)",
              borderRadius: "8px",
              //   height: "32px",
              //   width: "32px",
              padding: "8px",
            }}
          >
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.5 10.1771V14H0.5V10.1771H7.334L1.94961 4.85371L4.68364 2.15022L10.0679 7.47453V0H13.933V7.47453L19.3173 2.15022L22.0503 4.85371L16.666 10.1771H23.5Z"
                fill="black"
              />
            </svg>
          </div>
        }
      />
      <Wallet
        onClick={() => {
          handleConnect();
          handleClose();
        }}
        icon={<img src={"./MetaMask_Fox.svg.png"} alt={"no icon"} />}
        name="MetaMask"
      />
    </WalletConnectContainer>
  );
};
