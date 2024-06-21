const baseUrl = "https://jsonplaceholder.typicode.com";
const todoPath = "todos";
	const getTodos = () => {
    fetch([baseUrl, todoPath].join("/")).then((response) => response.json()).then((res) => console.log(res));
};

getTodos();