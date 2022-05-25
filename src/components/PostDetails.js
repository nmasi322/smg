
const PostDetails = ({ post }) => {
  return (
    <div className="p-7 md:p-10 rounded-lg shadow-lg my-10 text-[#6F6D6D]">
        <div className="mb-5">
            <h1 className="text-lg font-bold md:text-xl mb-5 text-gray-600">{post.title}</h1>
            <p>{post.body}</p>
        </div>
        <div className="mb-5">
            <p>Reactions: {post.reactions}</p>
        </div>
        <div className="mb-5">
            <h1 className="text-sm pb-2 text-[#AFC2D4]">TAGS</h1>
            <div className="flex">
                {
                    post.tags.map(item =>{
                        return <p className="mr-3 uppercase text-xs text-[#607485] rounded-full py-1 px-4 bg-[#FAFCFE] border border-[#4799EB]">{item}</p>
                    })
                }
            </div>
        </div>
        <div>
            <h2 className="text-[#6F6D6D]">OWNER ID: {post.userId}</h2>
        </div>
    </div>
  )
}

export default PostDetails