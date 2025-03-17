import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt
            ? data.createdAt.toDate().toLocaleString()
            : "날짜 없음",
        };
      });
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="ml-[320px] mr-[320px] mb-5 pl-[100px] pr-[100px] pt-[65px] pb-[65px]"
        >
          <h3 className="text-5xl font-bold">{post.title}</h3>
          <p className="text-xl text-gray-400">{post.createdAt}</p>
          <p className="text-2xl">
            {post.content}
            <Link to={`/detail/${post.id}`} className="text-blue-500">
              {" "}
              read more...
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
