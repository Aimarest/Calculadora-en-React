import { ButtonComponent } from './ButtonComponent';
import { ResultComponent } from './ResultComponent';

export const CalculatorComponent = () => {
  return (
    <>
      <ResultComponent />
      <section className='buttons'>
        <ButtonComponent value={7} />
        <ButtonComponent value={8} />
        <ButtonComponent value={9} />
        <ButtonComponent value={'%'} />
        <ButtonComponent value={'CE'} />
        <ButtonComponent value={4} />
        <ButtonComponent value={5} />
        <ButtonComponent value={6} />
        <ButtonComponent value={'X'} />
        <ButtonComponent value={'/'} />
        <ButtonComponent value={1} />
        <ButtonComponent value={2} />
        <ButtonComponent value={3} />
        <ButtonComponent value={'+'} />
        <ButtonComponent value={'='} />
        <ButtonComponent value={0} />
      </section>

    </>
  )
}
