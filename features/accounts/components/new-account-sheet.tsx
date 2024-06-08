import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet"

export default function NewAccountSheet() {
    return (
        <Sheet open>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>
                        New Account
                    </SheetTitle>
                    <SheetDescription>
                        Create a new account to track the finances.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}