type UserPictureProps={
    className?:string
}

export function UserPicture({className}:UserPictureProps){
    return <>
        <div className={`${className||''} profilPicture rounded-full bg-blue-900`} style={{backgroundImage:"url(https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=1024x1024&w=is&k=20&c=y4FFqpMLolCvEqoxlr4oypQqhAL1ta0ojXUnOofQXHk=)"}}>

        </div>
    </>
}
export default UserPicture