import { styled } from '@linaria/react';
import { COLOR, FONT_WEIGHT } from '../../utils';

export const StyledButton = styled.button`
  width: 75%;
  height: 3rem;
  background-color: ${COLOR.ORANGE_200};
  color: white;
  border: none;
  border-radius: 1.875rem;
  font-size: 1.125rem;
  font-weight: ${FONT_WEIGHT.REGULAR};
  cursor: pointer;
  transition: background-color 0.2s;
  text-transform: uppercase;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: ${COLOR.ORANGE_300};
  }

  &:disabled {
    background-color: ${COLOR.ORANGE_100};
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 3rem;
    font-size: 1rem; 
    margin-top: 1rem; 
    border-radius: 1.5rem;
    padding: 0 1rem;
  }
`;