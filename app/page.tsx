import { ChatContainer } from '@/components/chat/chat-container';

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold">AI Chat Assistant</h1>
        <p className="text-lg text-muted-foreground">
          Your intelligent conversation partner
        </p>
      </div>
      <ChatContainer />
    </main>
  );
}