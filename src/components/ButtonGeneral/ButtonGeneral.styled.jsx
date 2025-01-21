import { Button, styled } from '@mui/material';

export const CustomButton = styled(Button)`
   background-color:  ${({ theme }) => theme.palette.primary.main}; 
  color: #212529;
  padding: 8px 28px;
  border-radius: 8px;
  font-size: 16px;
  text-transform: none,
`
 
;
