import Header from "../components/Header"

export default function CreateNewLinkLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className=" flex flex-col gap-6">
      <Header /> 
      <section className="bg-[#FAFAFA] px-4">
        {children}
      </section>
    </div>
  )
}