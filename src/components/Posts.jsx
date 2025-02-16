import React, { useState } from "react";
import { v4 as randomId } from "uuid";

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      id: randomId(),
      title: "title",
      post: "Iure esse vero quas, dolor facilis quod numquam exercitationem doloribus molestiae magnam alias nisi, modi iusto delectus dignissimos eligendi laboriosam quam voluptas.",
      date: Date.now(),
    },
    {
      id: randomId(),
      title: "title",
      post: "Iure esse vero quas, dolor facilis quod numquam exercitationem doloribus molestiae magnam alias nisi, modi iusto delectus dignissimos eligendi laboriosam quam voluptas.",
      date: Date.now(),
    },
  ]);

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="ml-[320px] mr-[320px] mb-5 pl-[100px] pr-[100px] pt-[65px] pb-[65px]"
        >
          <h3 className="text-5xl font-bold">{post.title}</h3>
          <p className="text-xl text-gray-400">
            {new Date(post.date).toLocaleDateString("ja-jp")}
          </p>
          <p className="text-2xl">
            {post.post}
            <span className="text-blue-500"> read more...</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
