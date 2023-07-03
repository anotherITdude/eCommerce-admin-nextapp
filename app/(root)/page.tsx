'use client'
import { Button } from "@/components/ui/button";
import { useClerk, UserButton } from "@clerk/clerk-react";


export default function SetupPage() {
  const { signOut } = useClerk();
  return (
    <div className="p-4">
      <Button onClick={() => signOut()} size="sm" variant="default">
        Sign Out
      </Button>
      This is a protected route!
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
