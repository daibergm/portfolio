const Tag = () => {
  const tagList = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'React-Native',
    'ReactJs',
    'NextJs',
    'NodeJs',
    'Git/GitHub',
  ];
  return (
    <>
      {tagList.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
