import { styled } from "@linaria/react";
import { COLOR, FONT_WEIGHT } from "../../utils/constant";

export const AdvertorialSection = styled.div`
    margin-top: 1.25rem;
    border: 0.0625rem solid ${COLOR.GREEN_100};
    padding: 1rem;
    position: relative;
    max-width: 25.25rem;
    max-height: 14.6875rem;

    @media (max-width: 767px) {
        max-height: none;
        width: 100%;
        padding: 0.75rem;
    }
`;

export const AdvertorialCard = styled.div`
    background-color: rgba(255, 255, 255, 0.75);
    display: flex;
    flex-direction: column;
    max-width: 22.6875rem;
    max-height: 12.6875rem;
    padding: 0.6875rem 1.3125rem 2.8125rem;

    @media (max-width: 767px) {
        max-height: none;
        max-width: 100%;
        padding: 0.5rem 1rem 2.8125rem;
    }
`;

export const AdvertorialTagLine = styled.h4`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    width: 15rem;
    max-width: 100%;
    text-align: center;
    transition: var(--quinstreet-bg-transition);
    background-color: var(--quinstreet-bg-color);
    font-weight: ${FONT_WEIGHT.SEMI_BOLD};

    @media (max-width: 767px) {
        width: 12.5rem;
        font-size: 0.875rem;
    }
`;

export const AdvertorialLabel = styled.div`
    color: ${COLOR.GREEN_100};
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    font-weight: ${FONT_WEIGHT.SEMI_BOLD};
`;

export const AdvertorialTitle = styled.h3`
    margin: 0 0 0.75rem 0;
    font-size: 1.125rem;
    color: ${COLOR.GREY_600};
    font-weight: ${FONT_WEIGHT.LIGHT};

    @media (max-width: 767px) {
        font-size: 1rem;
        margin: 0 0 8px 0;
    }
`;

export const AdvertorialText = styled.p`
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5;
    color: ${COLOR.GREY_400};


    @media (max-width: 767px) {
        font-size: 0.8125rem;
        line-height: 1.4;
    }
`;

export const ReadMoreLink = styled.a`
    color: ${COLOR.TEAL_BLUE_100};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;