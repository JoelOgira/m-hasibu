import Image from "next/image"
import { SignIn } from "@clerk/nextjs"
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { Loader2 } from "lucide-react"
import logo from "../../../../public/logo.svg"

export default function SignInPage() {
    return (
        <main className="h-screen" >
            <div className="h-full grid grid-cols-1 justify-center items-center lg:grid-cols-2">
                <div className="h-full flex flex-col items-center justify-center space-y-6 p-4">
                    <h1 className="font-bold text-3xl text-darkGrey">
                        Welcome Back!
                    </h1>
                    <p className="text-base text-lightGrey">
                        Log in to get back to your dashboard.
                    </p>
                    <ClerkLoading>
                        <Loader2 className="animate-spin text-muted-foreground" />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <SignIn path="/sign-in" />
                    </ClerkLoaded>
                </div>
                <div className="hidden lg:flex flex-col items-center justify-center space-y-6 p-4 h-full bg-primary">
                    <Image
                        src={logo}
                        height={100}
                        width={100}
                        alt="Logo"
                    />
                </div>
            </div>
        </main>
    )
}
