const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
    GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
    GET_ALL_MENTOR_API:BASE_URL + "/profile/getAllMentors"
}

// APPOINTMENTS ENDPOINTS
export const appointmentsEndpoints={
    GET_ALL_APPOINTMENT_API: BASE_URL + "/appointment/getAppointment",
    BOOK_APPOINTMENT_API: BASE_URL + "/appointment/book-appointment"
}