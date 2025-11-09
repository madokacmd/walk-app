import { SidebarInset } from '@/components/ui/sidebar';
import * as React from 'react';
import { usePage } from '@inertiajs/react';
interface AppContentProps extends React.ComponentProps<'main'> {
    variant?: 'header' | 'sidebar';
}

export function AppContent({
    variant = 'header',
    children,
    ...props
}: AppContentProps) {
    const { flash } = usePage().props as {
        flash?: { message?: string; success?: string; error?: string };
    };

    const message = flash?.success ?? flash?.error ?? "";
    const [visibleMessage, setVisibleMessage] = React.useState<string | null>(message);

    React.useEffect(() => {
        if (message) {
            setVisibleMessage(message);
            const timeout = setTimeout(() => setVisibleMessage(null), 2000);
            return () => clearTimeout(timeout);
        }
    }, [message]);

    if (variant === 'sidebar') {
        return (
            <SidebarInset {...props}>
                {visibleMessage && (
                    <div
                        className={`
                            rounded-lg px-4 py-2 mb-2 animate-fade-out border
                            ${flash?.success
                                            ? "border-green-300 bg-green-50 text-green-700"
                                            : "border-red-300 bg-red-50 text-red-700"}
                            `}
                    >
                        {visibleMessage}
                    </div>
                )}
                {children}
            </SidebarInset>
        );
    }

    return (
        <main
            className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl"
            {...props}
        >
            {children}
        </main>
    );
}
