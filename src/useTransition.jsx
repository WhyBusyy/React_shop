import { useState, useTransition, useDeferredValue } from "react";

let a = new Array(10000).fill(0);

function Transition() {
  let [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();
  let state = useDeferredValue(name);
  // state에 담은 내용에 변동사항이 생기면 늦게 처리해줌. useTransition이랑 비슷한 원리

  return (
    <div className="Transition">
      <input
        onChange={(e) => {
          startTransition(() => setName(e.target.value));
          // 실행 시점을 조정하여 성능을 향상된 것처럼 보이게함.(ex. 1,2를 같이 >> 1하고 2하고)
        }}
      ></input>
      {isPending
        ? "로딩 중"
        : a.map(() => {
            <div>{state}</div>;
          })}
    </div>
  );
}
