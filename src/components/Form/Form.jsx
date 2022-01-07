export default function Form({ submitHandler = null, children }) {
  return (
    <form action="#" className="pt-4 px-5" onSubmit={submitHandler}>
      {children}
    </form>
  );
}
