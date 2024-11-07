export default function Title({ text }) {
  return (
    <div className="relative flex justify-center items-center text-3xl font-bold text-[#C8E1FF]">
      <div className="absolute text-5xl font-bold text-[#C8E1FF1A] opacity-40">
        {text}
      </div>
      <div className="relative">{text}</div>
    </div>
  );
}
