import $ from "jquery";
import { id } from "prelude-ls";
import { useEffect, useState } from "react";
import Member from "./Member";
const List = () => {
  const [memberList, setMemberList] = useState([]);
  const [no, setNo] = useState(0);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  //그냥 가져오면 비동기라서 안된다 react 먼저실행 --> useEffect 이용(이벤트 실행후 작동되는)
  useEffect(() => {
    //useEffect를 이용해서 ajax이용
    $.get("http://localhost:5500/list", (data, status) => {
      console.log(data, status);
      if (status === "success") {
        setMemberList(data);
      }
    });
  }, []); //빈 배열이라도 끝에 있어야함
  function onSubmit() {
    var array = [...memberList];
    array.push({ name, message });
    setMemberList(array);
    console.log("D?");
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        성명:
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        메시지:
        <input
          type="text"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <br />
        <input type="submit" value="저장" />
      </form>

      <table border="1px" width="100%">
        {memberList.map((member, i) => {
          return <Member key={i} member={member} idx={i} />;
        })}
      </table>
    </>
  );
};
export default List;
