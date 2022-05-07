export default function Log({ author, description, date }) {
  return (
      <>
    <div>
        <p>{description}</p>
    </div>
    <div>
        <p>{author}</p>
        <p>on{new Date(date).toLocaleString('en-US')}</p>
    </div>
    </>
  )
}
