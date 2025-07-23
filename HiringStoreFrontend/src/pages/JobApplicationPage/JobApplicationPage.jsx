import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase, faBuilding, faMapMarkerAlt, 
  faDollarSign, faClock, faUserTie,
  faCalendarAlt, faArrowLeft, faPaperclip
} from '@fortawesome/free-solid-svg-icons';

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  color: #e2e2e2;
  background-color: #1e1e1e;
  min-height: 100vh;
  padding: 2rem 0;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #2d2d2d;
  border: 1px solid #444;
  color: #e2e2e2;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #3d3d3d;
    transform: translateX(-3px);
  }
`;

const JobApplicationPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    experience: '0-2 years'
  });
  const [submitted, setSubmitted] = useState(false);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchJob = async () => {
      try {
        // In a real app: const response = await axios.get(`/api/jobs/${jobId}`);
        setTimeout(() => {
          setJob({
            id: jobId,
            title: "Senior Frontend Developer",
            company: "Tech Innovations Inc.",
            location: "Remote",
            salary: "$120,000 - $150,000",
            type: "Full-time",
            experience: "5+ years",
            description: "Join our team as a Senior Frontend Developer...",
            requirements: [
              "5+ years of frontend development",
              "Experience with React and TypeScript",
              "Strong problem-solving skills"
            ]
          });
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error("Error fetching job:", err);
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app: Submit form data to your backend
    setSubmitted(true);
  };

  if (loading) return <div>Loading...</div>;
  if (!job) return <div>Job not found</div>;

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Jobs
      </BackButton>

      {submitted ? (
        <div>
          <h2>Application Submitted!</h2>
          <p>Your application has been received.</p>
          <button onClick={() => navigate('/jobs')}>Back to Jobs</button>
        </div>
      ) : (
        <div>
          <h1>{job.title}</h1>
          <p>{job.company} • {job.location}</p>
          
          <form onSubmit={handleSubmit}>
            <div>
              <label>Full Name</label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div>
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div>
              <label>Resume</label>
              <div>
                <input 
                  type="file" 
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
            </div>
            
            <button type="submit">Submit Application</button>
          </form>
        </div>
      )}
    </Container>
  );
};

export default JobApplicationPage;
