"use client";

import React, { ReactNode } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";

interface ModalWrapperProps {
    triggerLabel: string;
    triggerClassName?: string;
    title?: string;
    children?: ReactNode;
    confirmLabel?: string;
    onConfirm?: () => void;
    showFooter?: boolean;
    confirmButtonProps?: React.ComponentProps<typeof Button>;
    cancelButtonProps?: React.ComponentProps<typeof Button>;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
    triggerLabel,
    triggerClassName,
    title = "Modal Title",
    children,
    confirmLabel = "Confirm",
    onConfirm,
    showFooter = true,
    confirmButtonProps,
    cancelButtonProps,
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleConfirm = () => {
        onConfirm?.();
        onClose();
    };

    return (
        <>
            <Button
                className={triggerClassName}
                variant="flat"
                color="warning"
                onPress={onOpen}
            >
                {triggerLabel}
            </Button>

            <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onCloseInternal) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {title}
                            </ModalHeader>
                            <ModalBody>{children}</ModalBody>
                            {showFooter && (
                                <ModalFooter>
                                    <Button
                                        color="danger"
                                        variant="light"
                                        onPress={onCloseInternal}
                                        {...cancelButtonProps}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        color="primary"
                                        onPress={handleConfirm}
                                        {...confirmButtonProps}
                                    >
                                        {confirmLabel}
                                    </Button>
                                </ModalFooter>
                            )}
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalWrapper;
