import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false); // coin 얻기를 끝냈으면 loading을 false로
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading . . .</strong> : null}
      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}) ({coin.quotes.USD.price}) USD
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;

//toDoList----------------------------------------------------------------------
// import { useState } from "react";

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]); // 비어있는 배열. push같은 걸로 넣는 것이 아닌 setToDos를 이용하서 넣어야 한다.
//   const onChange = (event) => {
//     setToDo(event.target.value); // toDo값을 수정하는 함수. toDo는 input과 연결
//   };
//   const onSubmit = (event) => {
//     event.preventDefault(); // submit을 해도 새로고침 안되게
//     if (toDo === "") {
//       // toDo가 비면 이 함수 작동X
//       return;
//     }
//     setToDos((currentArray) => [toDo, ...currentArray]); //추가 단어와 원래 array 합침
//     setToDo("");
//   };
//   console.log(toDos);
//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write your to do..."
//         />
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       {/* map은 array의 모든 item들에 함수를 적용시킴. 함수가 item의 수 만큼 실행. */}
//       <ul>
//         {toDos.map((item, index) => ( // item들을 변형시켜 li가 되도록 함
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

//----------------------------------------------------------------
//import { useState, useEffect } from "react";

// function Hello() {
//   //...?
//   // component는 jsx를 return하는 funtion

//   useEffect(() => {
//     console.log("hi :)");
//     return () => console.log("bye :(");
//   }, []);
//   // useEffect(function () {
//   //   console.log("hi :)");
//   //   return function () {
//   //     console.log("bye :(");
//   //   };
//   // }, []);
//   return <h1>Hello</h1>;
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => {
//     setShowing((prev) => !prev);
//   };
//   return (
//     //js쓸 때 {} 괄호 사용
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
//----------------------------------------------------------------
// const [counter, setValue] = useState(0); //state
// const [keyword, setKeyword] = useState("");
// const onClick = () => setValue((prev) => prev + 1);
// const onChange = (event) => {
//   // onChange 발생하면 event가 text를 받음. 받은 value를 keyword에 넣어줌
//   setKeyword(event.target.value);
// };
// console.log("I run all the time");
// useEffect(() => {
//   // 상태가 변해도 처음 한번만 표시
//   console.log("I run only once.");
// }, []);
// useEffect(() => {
//   // 상태가 변해도 밑의 조건에 따라 표시
//   if (keyword !== "" && keyword.length > 5) {
//     // 비어있지 않고 5보다 길 때 검색
//     console.log("SEARCH FOR", keyword);
//   }
// }, [keyword]);

// useEffect(() => {
//   // counter가 변할 때 표시. []안의 것을 지켜본다.
//   console.log("I run when 'counter' changes.");
// }, [counter]);

// useEffect(() => {
//   console.log("I run when keyword & counter change");
// }, [counter, keyword]);   // 둘 중 하나가 변경되면 실행

// return (
//   <div>
//     <input
//       value={keyword} /** input에 value를 주어서 state와 연결될 수 있게 함 */
//       onChange={onChange} /** eventListener */
//       type="text"
//       placeholder="Search here..."
//     />
//     <h1>{counter}</h1>
//     <button onClick={onClick}>click me</button>
//   </div>
// );
// }

// export default App;
