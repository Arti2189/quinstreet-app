import React from "react";
import { AdvertorialCard, AdvertorialLabel, AdvertorialSection, AdvertorialTagLine, AdvertorialText, AdvertorialTitle, ReadMoreLink } from "./Advetorial.styles";


export const Advetorial: React.FC = () => {
    return (
        <AdvertorialSection>
            <AdvertorialTagLine>Even more savings</AdvertorialTagLine>
            <AdvertorialCard>
                <AdvertorialLabel>ADVERTORIAL</AdvertorialLabel>
                <AdvertorialTitle>
                    Tricks Homeowners Use to Eliminate Bills
                </AdvertorialTitle>
                <AdvertorialText>
                    Surging energy bills, unpredictable weather patterns and
                    dissatisfaction with utility companies have homeowners
                    scrambling...{" "}
                    <ReadMoreLink
                        href="https://google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        READ MORE
                    </ReadMoreLink>
                </AdvertorialText>
            </AdvertorialCard>
        </AdvertorialSection>
    );
};
