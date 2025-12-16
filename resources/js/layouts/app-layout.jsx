import AppHeader from "@/components/app-header";

export default function AppLayout({children}){
    return <div className="bg-gray-300 min-h-screen">
        <AppHeader />
        <main className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
                {children}
            </div>
        </main>
    </div>;
}