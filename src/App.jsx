const App = () => {
  return (
    <div className="w-screen h-screen bg-red-100 ">
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5 ">
        <a className="py-3 px-5 border rounded" href=".create">
          {" "}
          Add new Product
        </a>
        <hr className="w-[80%] my-3" />
        <h1>Category</h1>
        <ul>
          <li>cat 1</li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
