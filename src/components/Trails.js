// components/Trails.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Trails = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const fetchTrails = async () => {
      const overpass_url = "http://overpass-api.de/api/interpreter";
      const overpass_query = `
        [out:json];
        (
          node["highway"="path"]["sac_scale"](around:50000,38.0049,-121.8058);
          way["highway"="path"]["sac_scale"](around:50000,38.0049,-121.8058);
          relation["highway"="path"]["sac_scale"](around:50000,38.0049,-121.8058);
        );
        out body;
        >;
        out skel qt;
      `;

      try {
        const response = await axios.get(overpass_url, {
          params: { data: overpass_query },
        });
        setTrails(response.data.elements);
      } catch (error) {
        console.error("Error fetching trails:", error);
      }
    };

    fetchTrails();
  }, []);

  return (
    <div id="trails" className="section">
      <h1>Hiking Trails in Antioch, CA</h1>
      <ul>
        {trails.map((trail) => (
          <li key={trail.id}>
            {trail.tags && trail.tags.name ? trail.tags.name : "Unnamed Trail"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trails;
