import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts"
import AccountForm from "@/features/accounts/components/account-form"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet"

export default function NewAccountSheet() {
    const { isOpen, onClose } = useNewAccount()

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent>
                <SheetHeader className="my-20">
                    <SheetTitle>
                        New Account
                    </SheetTitle>
                    <SheetDescription>
                        Create a new account to track the finances.
                    </SheetDescription>
                </SheetHeader>
                <AccountForm onSubmit={() => { }} disabled={false} />
            </SheetContent>
        </Sheet>
    )
}
