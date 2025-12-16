export default function AppLayout({children}){
    return <div>
        <h1>Common Part</h1>
        <div>
            {children}
        </div>
    </div>;
}