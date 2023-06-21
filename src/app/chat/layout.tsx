import Chat from "@/components/Chat";
import socket from "@/lib/socket";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chat",
    description: "Generated by create next app",
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
};

interface Props {
    children: React.ReactNode;
}

function ChatLayout({ children }: Props) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center mb-4">
                <h1>Chat</h1>
            </div>
            <div className="flex flex-col flex-1 gap-2">
                <div className="w-full">{children}</div>
                <Chat />
            </div>
        </div>
    );
}

export default ChatLayout;