import axios from 'axios';

export const createWatchLater = async ({ tv_maze_id, imdb_id, show_name }) => {
    try {
        if (typeof imdb_id !== 'string' || typeof show_name !== 'string') {
            throw new Error('imdb_id and show_name must be a string');
        }
        const data = {
            data: {
                imdb_id,
                show_name,
                tv_maze_id
            }
        }
        console.log(data);
        await axios.post('http://localhost:1337/api/shows-to-watch-laters', data);
    } catch (e) {
        console.error(e);
    }
}

export const getAllWatchLater = async () => {
    try {
        const data = await axios.get('http://localhost:1337/api/shows-to-watch-laters');
        const formattedData = data?.data?.data?.map((show) => {
            const { imdb_id: imdb, tv_maze_id: id, show_name: name } = show.attributes;
            return {
                id, 
                imdb,
                name
            }
        })
        return formattedData;
    } catch (e) {
        console.error(e);
    }
}