import Header from "../components/Header"

export default function CreateNewLinkLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header /> 
      <section className="bg-[#FAFAFA] px-4">
        {children}
      </section>
    </div>
  )
}