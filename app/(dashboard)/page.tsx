"use client"

import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts"
import { Button } from "@/components/ui/button"

export default function Home() {
  const { onOpen } = useNewAccount()

  return (
    <main className="min-h-100">
      <Button
        onClick={onOpen}
      >
        Add New Account
      </Button>
    </main>
  )
}
