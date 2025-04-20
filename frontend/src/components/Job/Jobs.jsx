import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const BASE_URL = import.meta.env.VITE_SERVER_URL || "https://careerconnect-stm.onrender.com";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthorized) return;

    axios
      .get(`${BASE_URL}/api/v1/job/getall`, {
        withCredentials: true,
      })
      .then((res) => {
        setJobs(res.data.jobs || []);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [isAuthorized]);

  if (!isAuthorized) return null;

  return (
    <section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE JOBS</h1>
        <div className="banner">
          {loading ? (
            <p>Loading jobs...</p>
          ) : jobs.length === 0 ? (
            <p>No jobs available at the moment.</p>
          ) : (
            jobs.map((element) => (
              <div className="card" key={element._id}>
                <p><strong>{element.title}</strong></p>
                <p>Category: {element.category}</p>
                <p>Location: {element.country}</p>
                <Link to={`/job/${element._id}`}>View Details</Link>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
