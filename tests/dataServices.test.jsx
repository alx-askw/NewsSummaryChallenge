import { dataGet } from '../src/utils/dataServices';
import axios from 'axios';


vi.mock('axios')

describe('dataService', () => {
    describe('Routes', () => {
        it('should try and get with the relevant link', async () => {
            await dataGet('http://localhost:3000/mockApiResponse')

            expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/mockApiResponse')
        })

        // it('should return correct data', async () => {

        //     axios.get.mockResolvedValueOnce({ data: newsData.data });

        //     const res = await dataGet('http://localhost:3000/mockApiResponse')

        //     expect(res).toEqual(newsData.mockApiResponse)
        // })

    })

})
