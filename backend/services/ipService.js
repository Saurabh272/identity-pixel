const axios = require('axios');

async function getIpInfo(ip) {
  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    return {
      address: `${response.data.city}, ${response.data.region}, ${response.data.country_name}`,
    };
  } catch (error) {
    console.error('Error fetching IP info:', error);
    return {};
  }
}

module.exports = { getIpInfo };