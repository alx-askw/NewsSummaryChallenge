import newsData from '../mockNewsData.json';
import { render, screen } from '@testing-library/react';
import { dataGet } from '../src/utils/dataServices';
import Headlines from '../src/components/Headlines';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import App from '../src/App';
// import userEvent from '@testing-library/user-event'


vi.mock('axios')

describe('App', () => {
    describe('Routes', () => {
        it('should / route should contain text', async () => {
            render(<MemoryRouter><App /></MemoryRouter>)
            expect(screen.getByText(/Cannot retrieve/i)).toBeInTheDocument()
        })
    })
    // it('should / route should contain text', async () => {
    //     render(<MemoryRouter><App /></MemoryRouter>)
    //     userEvent.click(screen.getByText(/Victorian/i))
    //     expect(screen.getByText(/Cannot retrieve/i)).toBeInTheDocument()
    // })
})

