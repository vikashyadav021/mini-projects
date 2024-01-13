import React, { useState, useEffect } from 'react';

const apiUrl = 'https://api.netlify.com/api/v1/sites';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'Authorization': `nfp_qVs1y13j27rXjk6yAiwhvcrUL92mdZh80817`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch projects from Netlify API');
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Your Netlify Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {projects.map((project) => (
          <div key={project.id} style={projectCardStyle}>
            <h3>{project.name}</h3>
            <p>
              <strong>Repository:</strong> {project.build_settings.repo_url}
            </p>
            <p>
              <strong>Created at:</strong> {new Date(project.created_at).toLocaleDateString()}
            </p>
            <p>
              <strong>Last Updated:</strong> {new Date(project.updated_at).toLocaleDateString()}
            </p>
            <p>
              <strong>URL:</strong> <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const projectCardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  width: '300px',
  textAlign: 'left',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default ProjectsList;
