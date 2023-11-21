import {render} from '@testing-library/react'
import Navigation from '../component/Navigation'
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

test("Nav bar should render", () => {
    const { getByText, asFragment } = render(
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    );
    expect(getByText("TV Search")).toBeInTheDocument()
    expect(getByText("My Favorites")).toBeInTheDocument()
    expect(getByText("Watch Later")).toBeInTheDocument()
})