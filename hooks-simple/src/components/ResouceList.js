import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ui>
      {resources.map((record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ui>
  );
};

export default ResourceList;
