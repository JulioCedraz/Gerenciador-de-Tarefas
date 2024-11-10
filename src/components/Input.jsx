function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 w-full p-2 rounded-md"
      {...props}

      /* 
      O spread acima serve para resumir todo o código abaixo:

      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      */
    />
  );
}

export default Input;
