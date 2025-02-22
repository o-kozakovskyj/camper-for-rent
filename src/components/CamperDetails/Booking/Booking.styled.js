import styled from "styled-components";


export const BookingContainer = styled.div`
  padding: 24px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  width: 641px;
`;

export const FormHeader = styled.h3`
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
`;

export const FormSecondaryText = styled.p`
  margin: 0 0 24px 0;
  color: var(--secondary);
`;

export const InputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0 0 24px 0;

  & input,
  & textarea {
    width: 400px;
    padding: 18px;

    background-color: var(--inputs);

    line-height: 1.25;

    border: 0;
    border-radius: 10px;
  }

  & textarea {
    outline: 0;
    resize: none;
  }
`;

// export const SendButton = styled(PrimaryButton)`
//   padding: 16px 60px;
//   display: block;
//   margin: 0 auto;
// `;

export const ErrorText = styled.span`
  color: red;
`;


export const SuccessMessage = styled.p`
  color: green;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px 12px;
  text-align: center;
`;
