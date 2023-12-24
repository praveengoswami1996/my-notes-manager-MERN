import { ReactNode } from "react"

const MainContainer = ({ title, children } : {
    title: string
    children: ReactNode
}) => {
  return (
    <section className='h-full w-full py-8 flex flex-col gap-5'>
      <div className='py-3'>
        <h1 className='text-5xl text-slate-600 font-extralight'>
          { title }
        </h1>
      </div>
      <hr />
      { children }
    </section>
  )
}

export default MainContainer;