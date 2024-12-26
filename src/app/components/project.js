import Image from "next/image";

export default function Project(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <Image src={GitHub} width={50} height={50} alt="GitHub" />
    </div>
  );
}
