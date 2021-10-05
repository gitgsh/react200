const Member = (props) => {
  return (
    <>
      <tr>
        <td>{props.idx + 1}</td>
        <td>{props.member.name}</td>
        <td>{props.member.message}</td>
      </tr>
    </>
  );
};
export default Member;
