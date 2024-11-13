import { render, screen, fireEvent} from '@testing-library/react'
import { vi } from 'vitest'
import Button from './Button'


describe('Button', () => {
    it('Deve renderizar o texto corretamente', () => {
        render(<Button>Click Me</Button>)
        const buttonElement = screen.getByText(/Click Me/)
        
    })
    it("Deve chamar a funcao onclick quando o botao for clicado", () => {
        const handleClick = vi.fn()    
        render(<Button onclick={handleClick}>Click Me</Button>)

        const butonElement = screen.getByText(/Click Me/)
        fireEvent.click(butonElement)

        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})


