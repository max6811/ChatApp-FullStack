import React, { useEffect, useRef } from "react";

const useChatScroll = <T,>(
    dependency: T
): React.LegacyRef<HTMLDivElement> | undefined => {
    const ref = useRef<HTMLDivElement>();
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [dependency]);
    return ref as React.LegacyRef<HTMLDivElement> | undefined;
};

export default useChatScroll;
