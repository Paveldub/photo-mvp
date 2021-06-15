import {
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
  CheckBoxWrapperComponent,
} from './TogglerBtn.styles'

export const Toggle = ({ toggleTheme }) => {
  return (
    <CheckBoxWrapperComponent>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" onClick={toggleTheme} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </CheckBoxWrapperComponent>
  )
}
