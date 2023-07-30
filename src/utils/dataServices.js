// made this file so I can easily test it - does it even need testing though?

import axios from 'axios';

export const dataGet = async (apiLink) => {
    return await axios.get(apiLink);
}

