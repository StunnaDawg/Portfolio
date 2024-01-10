const Section = ({ title, content, status }) => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <h1 className="font-bold text-2xl mb-3">{title}</h1>
      </div>
      <div className="mb-2 text-center md:mx-32 md:px-24 lg:mx-64 lg:px-48">
        <div>
          <p className="text-xl">{content}</p>
        </div>
      </div>
    </>
  )
}

export default Section
