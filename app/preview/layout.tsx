import Link from "next/link"
import Header from "../components/Header"

export default function CreateNewLinkLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white flex flex-col">
          <section className="w-full p-4 flex justify-center items-center gap-4">
              <Link href="/dashboard/createNewLink" className="w-full">
                <button className="bg-white w-full px-[27px] py-[11px] border border-[#633CFF] text-[#633CFF] font-semibold rounded-lg">Back to Editor</button>
              </Link>
              <Link href="" className="w-full">
              <button className="bg-[#633CFF] w-full px-[27px] py-[11px] border border-[#633CFF] text-white font-semibold rounded-lg">Share Link</button></Link>
          </section> 
      <section className=" p-4">
        {children}
      </section>
    </div>
  )
}