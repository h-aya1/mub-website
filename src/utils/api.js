// Ensure the trailing slash is handled properly if it exists
// Using import.meta.env for Vite environment variables
const BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, '');

export const API_CONFIG = {
    BASE_URL,
    ENDPOINTS: {
        JOBS: {
            PUBLIC_LIST: `${BASE_URL}/api/public/jobs`
        },
        APPLICANTS: {
            GET_DRAFT: `${BASE_URL}/api/public/applicants/draft/me`,
            SAVE_DRAFT: `${BASE_URL}/api/public/applicants/draft`,
            SUBMIT: `${BASE_URL}/api/public/applicants/submit`,
            DRAFT_TOKEN: `${BASE_URL}/api/public/applicants/draft-token`
        },
        EMPLOYERS: {
            REGISTER: `${BASE_URL}/api/employers/register`
        }
    }
};
