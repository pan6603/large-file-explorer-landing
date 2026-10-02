import { forwardRef, type KeyboardEventHandler } from "react";
import styled from "styled-components";


const AppPreviewTab = styled.button<{ $active: boolean }>`
    width: fit-content;
    height: 32px;
    padding: 0 20px;
    background: ${({ $active }) => $active ? "#ffffff" : "transparent"};
    color: ${({ $active }) => $active ? "#004E9F" : "#414753"};
    box-shadow: ${({ $active }) => $active ? "0 1px 3px rgba(19, 27, 46, 0.16)" : "none"};
    font-weight: ${({ $active }) => $active ? 600 : 400};

    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    white-space: nowrap;
    cursor: pointer;

    &:hover {
        background: ${({ $active }) => $active ? "#ffffff" : "#d7e3ff"};
    }

    &:focus-visible {
        outline: 2px solid #004e9f;
        outline-offset: 2px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        height: 32px;
        padding: 0 14px;

        font-size: 12px;
        line-height: 16px;

        border-radius: 7px;
    }

`;

type PreviewTabProps = {
    label: string;
    active: boolean;
    id: string;
    panelId: string;
    onClick: () => void;
    onKeyDown: KeyboardEventHandler<HTMLButtonElement>;
};

const PreviewTab = forwardRef<HTMLButtonElement, PreviewTabProps>(function PreviewTab(
    {
        label,
        active,
        id,
        panelId,
        onClick,
        onKeyDown,
    },
    ref,
) {
    return (
        <AppPreviewTab
            ref={ref}
            type="button"
            role="tab"
            id={id}
            aria-controls={panelId}
            aria-selected={active}
            aria-label={label}
            tabIndex={active ? 0 : -1}
            $active={active}
            onClick={onClick}
            onKeyDown={onKeyDown}
        >
            {label}
        </AppPreviewTab>
    );
});

export default PreviewTab;
