export default function Log({ author, content, date }) {
  return (
    <>
      <div>
        <p>{content}</p>
      </div>
      <div>
        <p>{author}</p>
        <p>on{new Date(date).toLocaleString('en-US')}</p>
      </div>
    </>
  );
}
