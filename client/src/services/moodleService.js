import axios from 'axios';

const MOODLE_API_URL = 'https://your-moodle-site.com/webservice/rest/server.php';
const MOODLE_TOKEN = 'YOUR_TOKEN';

export const fetchMoodleCourses = async () => {
  try {
    const response = await axios.get(MOODLE_API_URL, {
      params: {
        wstoken: MOODLE_TOKEN,
        wsfunction: 'core_course_get_courses',
        moodlewsrestformat: 'json'
      }
    });
    return response.data.map(course => ({
      id: course.id,
      title: course.fullname,
      description: course.summary,
      externalLink: course.viewurl,
      source: 'moodle'
    }));
  } catch (error) {
    console.error('Error fetching Moodle courses:', error);
    return [];
  }
};