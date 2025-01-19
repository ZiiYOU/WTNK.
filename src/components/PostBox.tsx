interface PostBoxProps {
  title: string;
}

const PostBox = ({ title }: PostBoxProps) => {
  return (
    <div className="flex flex-col gap-4 border-2 border-gray-300/10 rounded-xl px-8 py-4 ">
      <div className="text-gray-300 font-bold">{title}</div>
    </div>
  );
};

export default PostBox;
