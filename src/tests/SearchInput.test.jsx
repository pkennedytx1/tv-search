import { render, screen, waitFor } from '@testing-library/react'
import SearchInput from '../component/SearchInput';
import '@testing-library/jest-dom'

test("Search input should render", () => {
    const { getByText } = render(<SearchInput />)
    expect(getByText("Search Show")).toBeInTheDocument();
})

test("Search input should render with a value if provided", async () => {
    render(<SearchInput searchTermInput='test'/>)
    const inputField = await screen.findByPlaceholderText('Show Name')
    await waitFor(() => expect(inputField).toHaveDisplayValue('test'));
})