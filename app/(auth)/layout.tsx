export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col justify-center items-center">
      {children}
    </div>
  );
}
