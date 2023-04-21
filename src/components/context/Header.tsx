type Props = {
  title: string;
  description: string;
};

function Header(props: Props): JSX.Element {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-marine-blue mb-2">{props.title}</h1>
      <p className="text-cool-gray text-lg">{props.description}</p>
    </div>
  );
}

export default Header;
