import React from "react";

function Projects() {
  return (
    <section id="projects" className="section">
      <h1>Projects</h1>
      <div>
        <h2>CYO RUGS</h2>
        <p>A rug selling website.</p>
        <a href="https://github.com/gsnilloC/cyo-rugs" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
      <div>
        <h2>DROPS</h2>
        <p>A sneaker price tracker and notifier.</p>
        <a href="https://github.com/gsnilloC/drops-notifier" target="_blank" rel="noopener noreferrer">
          Notifier on GitHub
        </a>
        <br />
        <a href="https://github.com/gsnilloC/drops-site" target="_blank" rel="noopener noreferrer">
          Site on GitHub
        </a>
      </div>
      <div>
        <h2>Compiler</h2>
        <p>Compiler for an imaginary language I created.</p>
        <a href="https://github.com/gsnilloC/x_compiler" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
      <div>
        <h2>Tic Tac Toe AI</h2>
        <p>Created an AI bot for Tic Tac Toe using a minimax algorithm.</p>
        <a href="https://github.com/gsnilloC/simple_tictactoe" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;

