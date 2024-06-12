import { insertAccountSchema } from "@/db/schema"
import { z } from "zod"
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

    const formSchema = insertAccountSchema.pick({
        name: true
    })

    type FormValues = z.input<typeof formSchema>

    const onSubmit = (values: FormValues) => {
        console.log({ values })
    }

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
                <AccountForm onSubmit={onSubmit} disabled={false} />
            </SheetContent>
        </Sheet>
    )
}
