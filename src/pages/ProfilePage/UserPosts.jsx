/* eslint-disable react/prop-types */

function UserPosts({ posts }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <h3 className="text-center text-3xl my-6 font-semibold"> My Posts</h3>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 items-center p-4 ">
        {posts.map((post) => {
          return (
            <article
              key={post.id}
              className="posts p-6 mb-2 text-base bg-white rounded-lg flex flex-col justify-between border-l-2 border-primary  shadow-lg"
            >
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 ">
                    <img
                      className="mr-2 w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Michael Gough"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold">{user.name}</span>
                      <span className="text-[#ccc]">{user.email}</span>
                    </div>
                  </p>
                </div>
              </footer>
              <h3 className="text-black capitalize text-lg font-bold">
                {post.title}{" "}
              </h3>
              <p className="text-gray-500">{post.body}</p>
            </article>
          );
        })}
      </div>
    </>
  );
}
export default UserPosts;
