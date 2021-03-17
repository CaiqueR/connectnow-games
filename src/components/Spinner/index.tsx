import * as S from './styles'

export type SpinnerProps = {
  color?: 'black' | 'white' | 'primary'
  size:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
}

const Spinner = ({ color = 'white', size }: SpinnerProps) => (
  <S.StyledSpinner viewBox="0 0 50 50" color={color} size={size}>
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </S.StyledSpinner>
)
export default Spinner
