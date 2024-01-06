const Section = ({ title, content }) => {
  return (
    <>
      <div className="mb-2 text-center mx-11">
        <h1 className="font-bold text-sm mb-3">{title}</h1>
        <div>
          <p className="text-xs">{content}</p>
        </div>
      </div>
    </>
  )
}

export default Section
