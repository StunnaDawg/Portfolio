const ProjectInfo = ({
  title,
  projectDescription,
  challengeDescription,
  roleDescription,
  toolsDescription,
  imageLink1,
  imageLink2,
  imageLink3,
}) => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col items-center">
          <div className="m-3">
            <h1 className="font-bold text-3xl">{title}</h1>
          </div>

          <div className="my-3">
            <h1 className="font-bold text-xl">Project Description</h1>
            <div>
              <p>{projectDescription}</p>
            </div>
          </div>

          <div className="my-3">
            <h1 className="font-bold text-xl">My Role</h1>
            <div>
              <p>{roleDescription}</p>
            </div>
          </div>

          <div className="my-3">
            <h1 className="font-bold text-xl">Tools used</h1>
            <div>
              <p>{toolsDescription}</p>
            </div>
          </div>

          <div className="my-3">
            <h1 className="font-bold text-xl">Challenge</h1>
            <div>
              <p>{challengeDescription}</p>
            </div>
          </div>

          {/* Images */}
          <div className="my-3">
            <h1 className="font-bold text-xl">ScreenShots</h1>
          </div>

          <div className="flex md:flex-row md:justify-center flex-col mb-3">
            <div className="md:mx-2 my-2">
              <img className="w-48" src={imageLink1} />
            </div>

            <div className="md:mx-2 my-2">
              <img className="w-48" src={imageLink2} />
            </div>

            <div className="md:mx-2 my-2">
              <img className="w-48" src={imageLink3} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectInfo
