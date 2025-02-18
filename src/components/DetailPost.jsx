import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailPost = () => {
  const example = {
    title: "Sorem ipsum dolor ",
    date: Date.now(),
    post: `안녕하세요! 요즘 읽은 책에 대해 조금 나누고 싶어서 이렇게 글을 남깁니다. 요즘 들어 시간이 많이 남는 편이라 여러 가지 책들을 읽고 있는데, 최근에는 《**나는 왜 너를 사랑하는가**》라는 책을 읽었습니다. 이 책은 인간 관계, 특히 연애와 감정의 본질에 대해 깊이 고민하는 내용이 담겨있어서 아주 흥미롭게 읽었습니다.

책을 읽으면서 가장 인상 깊었던 부분은 사랑이 단순히 감정에 의존하는 것이 아니라, 상호 이해와 신뢰, 그리고 서로를 위한 배려가 필수적이라는 점이었어요. 저도 평소에 감정을 따르는 경향이 강해서, 이 부분에서 많이 배울 수 있었습니다. 책 속에서 저자는 사랑을 단순한 '감정의 발로'가 아니라, 더 넓은 시각에서 바라보는 중요성을 강조하고 있었습니다.

또한, 인간이 서로의 차이를 인정하고 그 속에서 공감을 찾는 것이 사랑을 지속시키는 데 얼마나 중요한지에 대해 이야기한 부분도 깊은 인상을 남겼습니다. 우리는 종종 상대방이 자신과 같기를 원하고, 그 차이를 극복하려 하죠. 하지만 이 책에서는 차이를 인정하고 이해하는 것이 사랑의 진정성을 키운다고 말하고 있었습니다.

저는 특히 **"사랑은 상대방을 있는 그대로 받아들이는 것"** 이라는 문구가 마음에 와닿았습니다. 많은 사람들이 사랑을 하면 상대방을 변화시키고 싶어하지만, 진정한 사랑은 그 사람을 있는 그대로 인정하고 사랑하는 것이라고 하더군요. 책을 읽고 나서, 제 자신에게도 그런 생각을 해보게 되었습니다. 사랑이란 상대를 바꾸려는 노력이 아니라, 상대를 있는 그대로 받아들이는 과정이 아닌가 하는 생각이 듭니다.

물론, 이 책이 연애에만 국한된 이야기는 아니었어요. 인간 관계 전반에 걸쳐 적용할 수 있는 교훈들이 많았습니다. 일상 속에서 가족, 친구와의 관계에서도 이런 자세를 가지면 더 좋은 관계를 유지할 수 있지 않을까 하는 생각이 들었습니다.

책을 다 읽고 나서, 저에게 큰 영향을 미친 부분은 **'관계의 진정성'**을 중요시하라는 말이었습니다. 무언가를 주고받는 관계가 아닌, 서로의 존재 자체를 인정하고 존중하는 관계를 만들자는 메시지가 정말 와닿았습니다. 실제로 제 주변 사람들과의 관계에서도 더 진지하고 깊이 있는 대화를 나누게 되었고, 그로 인해 더 행복한 느낌을 받았습니다.

앞으로도 이런 책들을 계속 읽으면서, 제 스스로도 성장하고, 더 나은 인간 관계를 만들 수 있도록 노력해야겠다고 다짐했습니다. 여러분도 시간이 된다면 꼭 한 번 읽어보시길 추천드립니다! 책이 주는 메시지가 정말 크고, 사람을 깊게 성찰하게 만드는 힘이 있더라고요.

긴 글 읽어주셔서 감사합니다!`,
  };

  return (
    <div className="pl-[385px] pr-[385px] pt-[115px] flex flex-col gap-3">
      <h1 className="text-6xl font-bold">{example.title}</h1>
      <div className="text-gray-400 flex gap-2 items-center text-xl">
        {new Date(example.date).toLocaleDateString("ja-jp")}
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="cursor-pointer text-[1rem] mb-0.5"
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="cursor-pointer text-[1rem] mb-0.5"
        />
      </div>

      <Markdown remarkPlugins={[remarkGfm]}>{example.post}</Markdown>
      <button className="bg-gray-200 px-2 py-1 mt-6 cursor-pointer">
        목록
      </button>
    </div>
  );
};

export default DetailPost;
