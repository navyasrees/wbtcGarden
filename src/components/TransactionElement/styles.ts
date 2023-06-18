import styled from "@emotion/styled";
export const TransactionElementContainer = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  .transaction {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .transaction-status {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .send-status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
  }
  .await-status {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
