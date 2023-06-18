import styled from "@emotion/styled";
export const WalletConnectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  .wallet-container-heading {
    display: flex;
    justify-content: space-between;
    padding: 17px 24px;
  }
`;

export const WalletContainer = styled.div`
  background-color: rgba(0, 107, 40, 1);
  border-radius: 15px;
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 12px 16px;
  .wallet-name {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
