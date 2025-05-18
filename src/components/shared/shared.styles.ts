import { styled } from "@linaria/react";

const FlexContainer = styled.div<{ direction?: 'row' | 'column' }>`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    gap: 1.25rem;
    width: 100%;
`;

const FlexItem = styled.div<{ flex?: number }>`
    flex: ${props => props.flex ?? 1};
`
export const Flex = {
    Root: FlexContainer,
    Item: FlexItem,
}