// დავალება 1

function expo(a, b, cb) {
  if (b === 0) {
    return cb(1);
  }

  return expo(a, b - 1, (res) => cb(a * res));
}

expo(2, 3, (res) => {
  console.log(`Result: ${res}`);
});

// დავალება 2

// const data = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// console.log(data);

const root = document.body;
const h1h1 = document.createElement("h1");

async function fetchData() {
  try {
    const allData = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!allData.ok) {
      throw Error("error");
    }

    const data = await allData.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

const appear = root.appendChild(h1h1);
fetchData();
