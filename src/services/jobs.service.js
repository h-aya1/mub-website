const API_BASE_URL = 'http://localhost:3000/api/public/jobs';

export const jobService = {
    /**
     * Fetch jobs with optional filters
     * @param {Object} filters - optional filters
     * @param {string} filters.country
     * @param {string} filters.city
     * @param {string} filters.status - default 'ACTIVE'
     * @param {number} filters.page - default 1
     * @param {number} filters.pageSize - default 20
     */
    async getJobs(filters = {}) {
        const params = new URLSearchParams();
        if (filters.country && filters.country !== 'All') params.append('country', filters.country);
        if (filters.city) params.append('city', filters.city);
        if (filters.status) params.append('status', filters.status);
        if (filters.page) params.append('page', filters.page);
        if (filters.pageSize) params.append('pageSize', filters.pageSize);

        try {
            const response = await fetch(`${API_BASE_URL}?${params.toString()}`);
            if (!response.ok) {
                throw new Error('Failed to fetch jobs');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching jobs:', error);
            throw error;
        }
    }
};
