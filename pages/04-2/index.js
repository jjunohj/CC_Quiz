import { gql, useMutation, useQuery } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function graphQlPractice() {
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          //key와 value가 같으면 value 생략 가능, shorthand-property
          writer: "writer",
          title: "title",
          contents: "contents",
        },
      });
      // 서버로부터 받아온 생성된 게시글, result의 data.createBoard._id값으로 이동
      console.log(result.data.createBoard.number);
      // 하지만 result.data.createBoard._id로 된 폴더가 없다. 이럴때는 대괄호 폴더로 동적 라우팅된다.
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: 275974,
    },
  });

  console.log(data);

  console.log(createBoard);
  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
    </>
  );
}
