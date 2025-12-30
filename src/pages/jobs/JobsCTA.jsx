import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './JobsCTA.css';

const JobsCTA = () => {
    return (
        <section className="jobs-cta">
            <div className="container">
                <h2>Ready to start your journey?</h2>
                <p>Join thousands of successful Ethiopian professionals.</p>
                <div className="cta-buttons">
                    <Link to="/auth-choice" className="btn btn-primary">
                        Register Now
                        <ArrowRight size={20} />
                    </Link>
                    <Link to="/about" className="btn btn-secondary-outline">
                        Learn More
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default JobsCTA;



