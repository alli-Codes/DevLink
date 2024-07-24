import Header from "../components/Header"

export default function CreateNewLinkLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-[#FAFAFA] flex flex-col">
      <Header /> 
      <section className=" p-4">
        {children}
      </section>
    </div>
  )
}