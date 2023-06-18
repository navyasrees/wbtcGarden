import styled from "@emotion/styled";
export const DisconnectWalletContainer = styled.div`
  position: relative;
  .content {
    background-color: rgba(0, 80, 30, 1);
    width: 100vw;
    height: 63vh;
    display: flex;
    justify-content: space-between;
    // gap: 350px;
    padding: 45px 0;
  }
  .user-name {
    display: flex;
    height: 35px;
    align-items: center;
    gap: 11px;
    padding-left: 32px;
  }

  .user-name-icon {
    background-color: rgba(171, 254, 44, 1);
    padding: 5px;
    border-radius: 50%;
    height: 33px;
    width: 33px;
  }
  .transaction-component {
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .arrow-icon {
    padding: 10px 12px;

    background-color: #00501e;

    position: absolute;

    top: 190px;
    left: 820px;

    border-radius: 24px;
  }
  .arrow-icon-transaction {
    left: 430px;
  }
  .text-field {
  }
  .transaction {
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .transaction-details {
    background-color: rgba(0, 107, 40, 1);
    border-radius: 15px;
    width: 410px;
    height: 50px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .footer {
    background-color: rgba(229, 255, 190, 1);
    width: 100vw;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 26vh;
    color: rgba(0, 80, 30, 1);
  }
  .footer-content {
    // padding: 20px;
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
  .footer-content-text {
    width: 40vw;
  }
  .footer-content-powered {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .footer-content-powered-icons {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .footer-links {
    display: flex;
    justify-content: space-between;
    width: 15vw;
    padding: 20px;
    padding-right: 30px;
  }
  .footer-links-link {
    font-size: 14px;
    color: rgba(0, 80, 30, 1);
    font-weight: 400;
  }
  .transaction-element-container {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 15px;
    width: 630px;
    margin-top: 70px;
    padding-left: 16px;
    padding-right: 16px;
    // align-self: center;
    height: fit-content;
  }
  hr {
    border: none;
    border-bottom: 1px solid rgba(229, 255, 190, 1);
  }
`;

export const TransactionElementContainer = styled.div``;
