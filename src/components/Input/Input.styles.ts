import { styled } from '@linaria/react';
import { COLOR, FONT_WEIGHT } from '../../utils';


export const InputContainer = styled.div`
  margin-bottom: .5rem;
  width: 100%;
`;

export const StyledInput = styled.input<{ hasError: boolean }>`
  width: 100%;
  height: 2.875rem;
  padding: 0 0.9375rem;
  border: 0.0625rem solid ${props => (props.hasError ? COLOR.RED_100 : COLOR.GREY_100)};
  border-top-width: 0.125rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;
  font-weight: ${FONT_WEIGHT.LIGHT};

  &:focus {
    border-color: ${props => (props.hasError ? COLOR.RED_100 : COLOR.GREY_200)};
  }

  &::placeholder {
    color: ${COLOR.GREY_300};
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: ${COLOR.RED_100};
`;