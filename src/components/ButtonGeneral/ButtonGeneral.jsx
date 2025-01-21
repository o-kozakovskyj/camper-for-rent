import * as Styled from "./ButtonGeneral.styled"

export const ButtonGeneral = ({ children, onClick, variant = 'contained' }) => {
  return (
    <Styled.CustomButton onClick={onClick} variant={variant}>
      {children}
    </Styled.CustomButton>
  );
};