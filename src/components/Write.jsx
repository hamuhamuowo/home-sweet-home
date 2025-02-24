import { db, auth } from "../../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // ✅ 로그인된 사용자 저장
      } else {
        setTimeout(() => {
          alert("로그인이 필요합니다.");
          navigate("/");
        }, 0); // 🔥 비동기 처리
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        id: uuid(),
        title,
        content,
        userId: user.uid,
        createdAt: Timestamp.now(),
      });

      alert("게시글이 저장되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("게시글 저장 실패:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-7xl pr-[100px] pl-[100px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
          <input
            className="h-[60px] p-3.5 outline-none border-1 border-solid font-bold"
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="h-[800px] p-3.5 outline-none border-1 border-solid resize-none font-bold"
            placeholder="Write ..."
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <div className="flex gap-1.5 justify-center mt-4">
            <button
              className="pl-3 pr-3 pt-1 pb-1 bg-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-white hover:border-1 hover:border-solid"
              onClick={() => navigate("/")}
            >
              취소
            </button>
            <button
              className="pl-3 pr-3 pt-1 pb-1 bg-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-white hover:border-1 hover:border-solid"
              type="submit"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Write;
