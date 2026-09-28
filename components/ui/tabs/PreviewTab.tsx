import styled from "styled-components";


const AppPreviewTab = styled.button<{ $active: boolean }>`
    width: fit-content;
    height: 32px;
    padding: 0 20px;
    background: ${({ $active }) => $active ? "#dbeafe" : "#D7E3FF"};
    color: ${({ $active }) => $active ? "#004E9F" : "#414753"};

    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    white-space: nowrap;
`;

type PreviewTabProps = {
    label: string;
    active: boolean;
    onClick: () => void;
}


export default function PreviewTab({ label, active,  onClick }: PreviewTabProps) {
    return (
        <>
            <AppPreviewTab 
                $active={active}
                onClick={onClick}>
                    {label}
            </AppPreviewTab>
        </>
    )
} 