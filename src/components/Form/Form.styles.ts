import { styled } from "@linaria/react";
import { COLOR, FONT_WEIGHT } from "../../utils";

export const FormContainer = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-bottom: 1.25rem;
`;

export const FormHeader = styled.div`
    background-color: ${COLOR.GREY_500};
    color: white;
    padding: 1.25rem 2.5rem;
    text-align: center;
`;

export const FormTitle = styled.h2`
    margin: 0 auto;
    max-width: 450px;
    font-size: 1.25rem;
    font-weight: ${FONT_WEIGHT.SEMI_BOLD};
`;

export const FormContent = styled.form`
    padding: 1.5rem 3rem;

    @media (max-width: 767px) {
        padding: 1rem 1.5rem;
    }
`;