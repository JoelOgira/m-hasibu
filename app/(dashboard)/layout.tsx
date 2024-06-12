import Header from "@/components/header"

export default function DashboardLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="px-4 lg:px-14">
                <div className="max-w-screen-2xl mx-auto">
                    {children}
                </div>
            </main>
        </>
    )
}
