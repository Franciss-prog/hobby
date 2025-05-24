

import axios from 'axios';

export async function fetchTop(category: string) {
  const url = `https://api.jikan.moe/v4/top/${category}`;

  const res = await axios.get(url, {
    headers: {
      'Accept': 'application/json'
    }
  });

  return res.data;
}
