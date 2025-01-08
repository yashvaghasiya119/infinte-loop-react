import { usePollinationsImage, usePollinationsText } from '@pollinations/react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const AIGeneratedContent = () => {
    let [data,setdata]=useState("")
  const imageUrl = usePollinationsImage(data || "loading", { width: 800, height: 600, seed: 42 });
  const markdown = usePollinationsText("Write a brief travel guide for Paris, including top attractions and local cuisine in markdown", { seed: 42 });

  return (
    <div>
        <input type="text" value={data} onChange={(e)=>setdata(e.target.value)} />
      <h2>AI-Generated Travel Guide</h2>
      <img src={imageUrl} alt="AI Generated" />
      {markdown ? (
        <ReactMarkdown>{markdown}</ReactMarkdown>
      ) : (
        <p>Loading markdown content...</p>
      )}
    </div>
  );
};

export default AIGeneratedContent;