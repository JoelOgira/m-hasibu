"use client"

import { useUser } from "@clerk/nextjs"

export default function WelcomeMessage() {
    const { user, isLoaded } = useUser()
    return (
        <div className="flex flex-col space-y-2">
            <h2 className="text-white text-2xl font-medium lg:text-4xl">
                Welcome Back{isLoaded ? ", " : " "}{user?.firstName}
            </h2>
            <p className="text-sm text-blue-200 lg:text-base">
                This is the current financial overview.
            </p>
        </div>
    )
}
