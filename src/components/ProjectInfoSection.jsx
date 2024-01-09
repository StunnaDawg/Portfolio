const Section = ({ title, content }) => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <h1 className="font-bold text-sm mb-3">{title}</h1>
      </div>
      <div className="mb-2 text-wrap mx-11 md:px-24">
        <div>
          <p className="text-xs">{content}</p>
        </div>
      </div>
    </>
  )
}

export default Section
