import { Link } from 'react-router-dom';
import { MapPin, DollarSign, Clock } from 'lucide-react';
import './JobCard.css';

const JobCard = ({ job }) => {
    return (
        <div className="job-card">
            <div className="job-card-header">
                <span className="job-type">{job.type}</span>
                <h3 className="job-title">{job.title}</h3>
            </div>

            <div className="job-info">
                <div className="info-item">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                </div>
                <div className="info-item">
                    <DollarSign size={16} />
                    <span>{job.salary}</span>
                </div>
                <div className="info-item">
                    <Clock size={16} />
                    <span>{job.postedAt}</span>
                </div>
            </div>

            <div className="job-card-footer">
                <Link to="/auth-choice" className="btn-apply">Apply Now</Link>
            </div>
        </div>
    );
};

export default JobCard;
