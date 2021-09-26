import React from "react";
import './Youtube.css';

export default function Contents() {
  return (
      <div className="Youtube_background">
          <h1 className="Youtube_title">YouTube Channel</h1>
          <div className="Youtube_player">
            
            <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/phkzbdGNVd4" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen />
          </div>
      </div>);
}