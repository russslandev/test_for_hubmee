import React from 'react';

interface IProps {
  text: string;
  keyword: string;
}

const TextHighlighter: React.FC<IProps> = ({ text, keyword }) => {
  const regex = new RegExp(`(${keyword})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part.toLowerCase() === keyword.toLowerCase() ? <span style={{ backgroundColor: '#5DCB42' }}>{part}</span> : part}
        </React.Fragment>
      ))}
    </>
  );
};

export default TextHighlighter;
